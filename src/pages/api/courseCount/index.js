import { RouteError } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import Session from '@/helpers/session';
import { createRouter } from 'next-connect';
import { onError, onNoMatch } from '@/handlers/router';
import { StatusCodes } from 'http-status-codes';

const router = createRouter();

router.get(async (req, res) => {
	const sessionId = req.cookies.SESSION_ID;

	if (!sessionId) {
		throw new RouteError(StatusCodes.UNAUTHORIZED, '沒有登入');
	}

	const user = await Session.associate(sessionId);

	const [data] = await connection.execute(
		'SELECT Course.Name,Course.Identifier,Course.Price, Course.WhenLaunched,`Order`.SN AS OrderSN, `Order`.WhenPaid,SUM(Course.Price) AS Income, COUNT(*) AS Total FROM Course JOIN User ON User.SN = Course.TeacherSN JOIN OrderDetail ON OrderDetail.CourseSN = Course.SN JOIN `Order` ON `Order`.SN = OrderDetail.OrderSN WHERE Course.WhenLaunched IS NOT NULL AND `Order`.WhenPaid IS NOT NULL AND User.SN = ? GROUP BY Course.SN',
		[user.SN]
	);
	console.log(data);
	res.status(200).json(data);
});

export default router.handler({ onError, onNoMatch });

// export default async function handler(req, res) {
// 	const limit = req.query.limit ?? 10;
// 	const [[results]] = await connection.execute(
// 		'SELECT COUNT(Course.Name) AS TotalCourses FROM Course JOIN User ON Course.TeacherSN = User.SN'
// 	);

// 	return res.status(200).json(results);
// }
