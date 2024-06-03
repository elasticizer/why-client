import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import Session from '@/helpers/session';
import { StatusCodes } from 'http-status-codes';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
	const page = Number([req.query.page].flat()[0] ?? 1);
	const session = await Session.associate(req.cookies.SESSION_ID ?? '');
	const where = `WHERE UserSN = ?
		AND DATETIME(IFNULL(WhenRevoked, CURRENT_TIMESTAMP)) > DATETIME(CURRENT_TIMESTAMP, '-28 days')`;
	const [data] = await connection.execute(
		`SELECT IP, UserAgent, WhenCreated, WhenRevoked, UUID = ? AS Current FROM Session
		${where}
		ORDER BY WhenCreated DESC
		LIMIT ?, 10`,
		[req.cookies.SESSION_ID, session.SN, (page - 1) * 10]
	);
	const [[stat]] = await connection.execute(
		`SELECT COUNT(*) AS Total FROM Session
		${where}`,
		[session.SN]
	);

	res.status(StatusCodes.OK).json({
		done: true,
		data,
		stat: { Count: data.length, ...stat }
	});
});

export default router.handler({ onError, onNoMatch });
