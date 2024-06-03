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
		throw new RouteError(StatusCodes.BAD_REQUEST, 'Session not established');
	}

	const [[user]] = await connection.execute(
		`SELECT
			User.SN,
			User.Email,
			User.FirstName,
			User.LastName,
			User.Nickname,
			User.Intro,
			File.Filename AS Icon
		FROM Session
		JOIN User ON User.SN = Session.UserSN
		LEFT JOIN File ON File.SN = User.PFPSN
		WHERE UUID = ?
		AND WhenRevoked IS NULL`,
		[id]
	);

	if (!user) {
		throw new RouteError(StatusCodes.BAD_REQUEST, 'Session not established');
	}

	if (!user) {
		throw new RouteError(StatusCodes.UNAUTHORIZED, 'Invalid session received');
	}

	const cookie = serialize('SESSION_ID', id, {
		maxAge: 24 * 60 * 60,
		httpOnly: true,
		path: '/',
		sameSite: 'lax',
		// secure: true
	});

	const name = user.Nickname ?? `${user.FirstName}+${user.LastName}`;

	res.setHeader('Set-Cookie', cookie);
	res.status(StatusCodes.OK).json({
		done: true,
		data: {
			...user,
			Icon: user.Icon
				? '/profile/'.concat(user.Icon as string)
				: `https://ui-avatars.com/api/?background=random&name=${name}`
		}
	});
});

export default router.handler({ onError, onNoMatch });
