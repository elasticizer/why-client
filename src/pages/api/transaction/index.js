import connection from '@/handlers/sqlite3';
import { createRouter } from 'next-connect';
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router';

const router = createRouter();

router.get(async (req, res) => {
	const sessionId = req.cookies.SESSION_ID;

	if (!sessionId) {
		throw new RouteError(StatusCodes.FORBIDDEN, '沒有登入');
	}

	const user = await Session.associate(sessionId);

	const [results] = await connection.execute(
		'SELECT "Order".*, File.Filename, Course.Name, Course.Price AS Amount FROM "Order" JOIN "OrderDetail" ON "Order"."SN" = "OrderDetail"."OrderSN" JOIN Course ON Course.SN = OrderDetail.CourseSN JOIN File ON Course.ThumbnailSN = File.SN'
	);
	res.status(200).json(results);
});

export default router.handler({
	onError(e, req, res) {
		res.status(500).json({ message: '已經有資料' });
	}
});
