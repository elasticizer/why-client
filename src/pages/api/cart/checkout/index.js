import { randomUUID } from 'crypto';
import { createRouter } from 'next-connect';
import { onError, onNoMatch, RouteError } from '@/handlers/router';
import { StatusCodes } from 'http-status-codes';
import connection from '@/handlers/sqlite3';
import Session from '@/helpers/session';
import { env } from 'process';
import { createHmac } from 'crypto';

const router = createRouter();

router.post(async (req, res) => {
	if (!req.cookies.SESSION_ID) {
		throw new RouteError(StatusCodes.BAD_REQUEST, '沒有登入');
	}

	const origin = 'https://sandbox-api-pay.line.me';
	const path = '/v3/payments/request';

	const user = await Session.associate(req.cookies.SESSION_ID);
	const [cart] = await connection.execute(
		`SELECT
      Course.SN AS id,
      Course.Price AS price,
      Course.Name AS name,
      1 AS quantity
    FROM Cart JOIN Course ON Course.SN = Cart.CourseSN
    WHERE UserSN = ?`,
		[user.SN]
	);
	const [[order]] = await connection.execute(
		'INSERT INTO "Order" (LearnerSN, CouponSN,WhenPaid) VALUES (?, ?) RETURNING SN',
		[user.SN, null]
	);

	req.body.courses.forEach(
		async courseSN =>
			await connection.execute(
				'INSERT INTO OrderDetail (OrderSN, CourseSN) VALUES (?, ?)',
				[order.SN, courseSN]
			)
	);

	const [products] = await connection.execute(
		`SELECT
			Course.SN AS id,
			Course.Name AS name,
			Course.Price AS price,
			1 AS quantity
		FROM Course
		JOIN OrderDetail ON OrderDetail.CourseSN = Course.SN
		JOIN "Order" ON "Order".SN = OrderDetail.OrderSN
		WHERE "Order".SN = ?`,
		[order.SN]
	);

	console.log(products);
	console.log(order);

	const name = env.APP_NAME;
	const amount = products.reduce((total, value) => total + value.price, 0);
	const body = JSON.stringify({
		amount,
		currency: 'TWD',
		orderId: order.SN,
		packages: [
			{
				id: 1,
				amount,
				name,
				products
			}
		],
		redirectUrls: {
			confirmUrl: `${env.APP_URL}/${env.LINEPAY_RETURN_CONFIRM_URL}`,
			cancelUrl: `${env.APP_URL}/${env.LINEPAY_RETURN_CANCEL_URL}`
		}
	});

	const method = 'POST';
	const nonce = randomUUID();
	const headers = {
		'Content-Type': 'application/json',
		'X-LINE-ChannelId': env.LINEPAY_CHANNEL_ID,
		'X-LINE-Authorization-Nonce': nonce,
		'X-LINE-Authorization': createHmac('sha256', env.LINEPAY_CHANNEL_SECRET)
			.update(`${env.LINEPAY_CHANNEL_SECRET}${path}${body}${nonce}`)
			.digest('base64')
	};
	const data = await fetch(`${origin}${path}`, { method, body, headers }).then(
		r => r.json()
	);

	if (data.returnCode !== '0000') {
		throw new RouteError(
			StatusCodes.INTERNAL_SERVER_ERROR,
			'付款失敗',
			data.returnMessage
		);
	}

	// 結帳後清除購物車
	await connection.execute('DELETE FROM Cart WHERE UserSN = ?', [user.SN]);

	res.status(StatusCodes.CREATED).json({
		done: true,
		data: data.info.paymentUrl.web
	});
});

export default router.handler({ onError, onNoMatch });

async function hmac(secret, body) {
	const encoder = new TextEncoder();
	const algorithm = { name: 'HMAC', hash: 'SHA-256' };
	const key = await crypto.subtle.importKey(
		'raw',
		encoder.encode(secret),
		algorithm,
		false,
		['sign']
	);
	const signature = await crypto.subtle.sign(
		algorithm.name,
		key,
		encoder.encode(body)
	);
	const digest = btoa(String.fromCharCode(...new Uint8Array(signature)));

	console.log(digest);

	return digest;
}
