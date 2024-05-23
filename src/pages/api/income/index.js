import connection from '@/handlers/sqlite3';
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router';

export default async function handler(req, res) {
	const sessionId = req.cookies.SESSION_ID;
	if (!sessionId) {
		throw new RouteError(StatusCodes.FORBIDDEN, '沒有登入');
	}

	const user = await Session.associate(sessionId);

	const limit = req.query.limit ?? 10;
	const [results] = await connection.execute(
		'SELECT Course.*, User.SN AS UserSN, User."FirstName", User."LastName", User."Nickname" FROM Course JOIN User ON Course.TeacherSN = User.SN WHERE User.SN = ? LIMIT ?',
		[user.SN, limit]
	);

	return res.status(200).json(results);
}
