import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { createRouter } from 'next-connect';
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router';
import { StatusCodes } from 'http-status-codes';

const router = createRouter();

router.get(async (req, res) => {
	const sessionId = req.cookies.SESSION_ID;

	if (!sessionId) {
		throw new RouteError(StatusCodes.FORBIDDEN, '沒有登入');
	}

	const user = await Session.associate(sessionId);
	const [results] = await connection.execute(
		'SELECT Course.SN, Course.Name, Course.Price, Domain.Name AS DomainName, Cart.UserSN, Cart.CourseSN FROM Cart JOIN Course ON Course.SN = Cart.CourseSN JOIN User ON User.SN = Cart.UserSN JOIN Domain ON Course.DomainSN = Domain.SN'
	);
	res.status(200).json(results);
});

router.post(async (req, res) => {
	const { user, payment } = req.body;
	if (!user || !course) {
		return res.status(400).json({ done: false, message: '缺少必要欄位' });
	}
	const [results] = await connection.execute(
		'INSERT INTO Cart (UserSN, CourseSN) VALUES (?, ?)',
		[user, payment]
	);
	res.status(200).json({ done: true, message: '新增課程成功' });
});

router.delete(async (req, res) => {
	const { user, course } = req.body;
	if (!user || !course) {
		return res.status(400).json({ done: false, message: '缺少必要欄位' });
	}
	const [results] = await connection.execute(
		'DELETE FROM Cart WHERE UserSN = ? AND CourseSN = ?',
		[user, course]
	);
	res.status(204).json({});
});

export default router.handler({ onError, onNoMatch });

