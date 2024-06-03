import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import Session from '@/helpers/session';
import { StatusCodes } from 'http-status-codes';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
	const session = await Session.associate(req.cookies.SESSION_ID ?? '');

	await connection.execute(
		`UPDATE Session
		SET WhenRevoked = CURRENT_TIMESTAMP
		WHERE UserSN = ?
			AND WhenRevoked IS NOT NULL
			AND UUID <> ?`,
		[session.SN, req.cookies.SESSION_ID]
	);

	res.status(StatusCodes.OK).json({
		done: true,
		data: null
	});
});

export default router.handler({ onError, onNoMatch });
