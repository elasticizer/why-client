import connection from '@/handlers/sqlite3';
import { createRouter } from 'next-connect';
import { v4 as uuidv4 } from 'uuid';

const router = createRouter();

router.get(async (req, res) => {
	const payments = await rp({
		method: 'POST',
		uri: `https://sandbox-api-pay.line.me/v2/payments/request`,
		json: true,
		headers: {
			'X-LINE-ChannelId': process.env['LINE_PAY_CLIENT_ID'],
			'X-LINE-ChannelSecret': process.env['LINE_PAY_CLIENT_SECRET']
		},
		body: {
			amount: 100,
			productName: 'why',
			productImageUrl:
				'https://images.hahow.in/images/5b8fe80ade22ba001ee81b4b',
			confirmUrl: process.env['LINE_PAY_CONFIRM_URL'],
			orderId: v4(),
			currency: 'TWD'
		}
	});

	res.send(payments);
});

export default router.handler({
	onError(e, req, res) {
		res.status(500).json({ message: '已經有資料' });
	}
});
