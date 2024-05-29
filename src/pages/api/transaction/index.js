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
		Course.SN AS CourseSN
		FROM "Order"
		JOIN "OrderDetail" ON "Order"."SN" = "OrderDetail"."OrderSN"
		JOIN Course ON Course.SN = OrderDetail.CourseSN
		JOIN File ON Course.ThumbnailSN = File.SN
		JOIN User ON User.SN = "Order".LearnerSN
		WHERE User.SN = ?
		ORDER BY "Order"."SN" DESC`,
		[user.SN]
	);
	const order = results.reduce((total, value) => {
		(total[value.SN] ??= []).push(value);

		return total;
	}, {});

	res.status(200).json(Object.values(order));
});

export default router.handler({ onError, onNoMatch });
