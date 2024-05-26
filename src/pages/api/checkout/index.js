import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { createRouter } from 'next-connect';
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router';
import { StatusCodes } from 'http-status-codes';

const router = createRouter();

router.get(async (req, res) => {
	// 登入
	const sessionId = req.cookies.SESSION_ID;
	if (!sessionId) {
		throw new RouteError(StatusCodes.FORBIDDEN, '沒有登入');
	}
	const user = await Session.associate(sessionId);

	const [results] = await connection.execute(
		'SELECT Cart.UserSN AS id, Course.Name AS name, Course.Price AS amount FROM Cart JOIN Course ON Course.SN = Cart.CourseSN'
	);
	res.status(200).json(results);
});


export default router.handler({ onError, onNoMatch });

