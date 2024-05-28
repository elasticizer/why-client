import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { serialize } from 'cookie';
import { StatusCodes } from 'http-status-codes';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
	const id = req.cookies.SESSION_ID;

	await connection.execute(
		'UPDATE Session SET WhenRevoked = CURRENT_TIMESTAMP WHERE UUID = ?',
		[id]
	);

	const cookie = serialize('SESSION_ID', '', {
		maxAge: 0,
		httpOnly: true,
		path: '/',
		sameSite: 'lax',
		// secure: true
	});

	res.setHeader('Set-Cookie', cookie);
	res.status(StatusCodes.OK).json({
		done: true,
		data: null
	});
});

export default router.handler({ onError, onNoMatch });
