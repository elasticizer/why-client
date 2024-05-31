import connection from '@/handlers/sqlite3';
import { createRouter } from 'next-connect';
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router';
import { onError, onNoMatch } from '@/handlers/router';

const router = createRouter();

router.get(async (req, res) => {
	const sessionId = req.cookies.SESSION_ID;

	if (!sessionId) {
		throw new RouteError(StatusCodes.FORBIDDEN, '沒有登入');
	}

	const user = await Session.associate(sessionId);

	const [results] = await connection.execute(
		`SELECT "Order".*,
		File.Filename, 
		Course.Name AS Name, 
		Course.Price AS Amount,
		Course.SN AS CourseSN,
		Coupon.DiscountRate
		FROM "Order"
		JOIN "OrderDetail" ON "Order"."SN" = "OrderDetail"."OrderSN"
		JOIN Course ON Course.SN = OrderDetail.CourseSN
		JOIN File ON Course.ThumbnailSN = File.SN
		JOIN User ON User.SN = "Order".LearnerSN
		LEFT JOIN Coupon ON "Order".CouponSN = Coupon.SN
		WHERE User.SN = ?`,
		[user.SN]
	);

	const orders = results.reduce((acc, order) => {
		if (!acc[order.SN]) {
			acc[order.SN] = [];
		}
		acc[order.SN].push(order);
		return acc;
	}, {});

	const sortedOrders = Object.values(orders).sort((a, b) => new Date(b[0].WhenPaid) - new Date(a[0].WhenPaid));

	res.status(200).json(sortedOrders);
});

export default router.handler({ onError, onNoMatch });
