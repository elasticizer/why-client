import { randomUUID } from 'crypto';
import { createRouter } from 'next-connect';
import { onError, onNoMatch, RouteError } from '@/handlers/router';
import { StatusCodes } from 'http-status-codes';
import connection from '@/handlers/sqlite3';
import Session from '@/helpers/session';
import { env } from 'process';
import { createHmac } from 'crypto';

const router = createRouter();

router.get(async (req, res) => {
	if (!req.cookies.SESSION_ID) {
		throw new RouteError(StatusCodes.BAD_REQUEST, '沒有登入');
	}

	const { orderId, transactionId } = req.query;
	const origin = 'https://sandbox-api-pay.line.me';
	const path = `/v3/payments/${transactionId}/confirm`;
	const [[order]] = await connection.execute(
		`SELECT
      SUM(Course.Price) AS Total
    FROM "Order"
    JOIN OrderDetail ON OrderDetail.OrderSN = "Order".SN
    JOIN Course ON Course.SN = OrderDetail.CourseSN
    WHERE "Order".SN = ?`,
		[orderId]
	);
	const body = JSON.stringify({
		amount: order.Total,
		currency: 'TWD'
	});

	const nonce = randomUUID();
	const headers = {
		'Content-Type': 'application/json',
		'X-LINE-ChannelId': env.LINEPAY_CHANNEL_ID,
		'X-LINE-Authorization-Nonce': nonce,
		'X-LINE-Authorization': createHmac('sha256', env.LINEPAY_CHANNEL_SECRET)
			.update(`${env.LINEPAY_CHANNEL_SECRET}${path}${body}${nonce}`)
			.digest('base64')
	};
	const method = 'POST';
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

	await connection.execute(
		`UPDATE "Order" SET WhenPaid = CURRENT_TIMESTAMP WHERE SN = ?`,
		[orderId]
	);
	console.log(orderId);

	res.redirect('/cart/checkout/finish', StatusCodes.SEE_OTHER);
});

export default router.handler({ onError, onNoMatch });
