import { RouteError, onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { serialize } from 'cookie';
import { StatusCodes } from 'http-status-codes';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
	const id = req.cookies.SESSION_ID;

	if (!id) {
		throw new RouteError(
			StatusCodes.BAD_REQUEST,
			'Session not established'
		);
	}

	const [[user]] = await connection.execute(
		'SELECT User.SN, User.Email, User.FirstName, User.LastName, User.Nickname FROM Session JOIN User ON User.SN = Session.UserSN WHERE UUID = ? AND WhenRevoked IS NULL',
		[id]
	);
	const name = `${user.FirstName}+${user.LastName}`;
	const icon = `https://ui-avatars.com/api/?background=random&name=${name}`;

	if (!user) {
		throw new RouteError(
			StatusCodes.UNAUTHORIZED,
			'Invalid session received'
		);
	}

	const cookie = serialize('SESSION_ID', id, {
		maxAge: 24 * 60 * 60,
		httpOnly: true,
		path: '/',
		sameSite: 'lax',
		secure: true
	});

	res.setHeader('Set-Cookie', cookie);
	res.status(StatusCodes.OK).json({
		done: true,
		data: Object.assign(user, { Icon: icon })
	});
});

export default router.handler({ onError, onNoMatch });
