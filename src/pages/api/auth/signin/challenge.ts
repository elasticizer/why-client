import { serialize } from 'cookie';
import { RouteError, onError, onNoMatch } from '@/handlers/router';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { StatusCodes } from 'http-status-codes';
import connection from '@/handlers/sqlite3';
import { verify } from 'jsonwebtoken';
import { env } from 'process';
import { randomUUID } from 'crypto';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
	if (req.cookies.SESSION_ID) {
		throw new RouteError(
			StatusCodes.CONFLICT,
			'Duplicate signin detected',
			'Please sign out the account first.'
		);
	}

	const token = getToken(req);
	const ip = req.socket.remoteAddress;
	const agent = req.headers['user-agent'];

	try {
		const data = verify(token, env.APP_KEY as string) as Record<
			string,
			unknown
		>;
		const identifier = randomUUID();

		await connection.execute(
			`INSERT INTO Session (UUID, ChallengeToken, IP, UserAgent, UserSN) VALUES (?, ?, ?, ?, ?)`,
			[identifier, token, ip ?? '', agent, data.sn]
		);

		const cookie = serialize('SESSION_ID', identifier, {
			maxAge: 24 * 60 * 60,
			httpOnly: true,
			path: '/',
			sameSite: 'lax'
			// secure: true
		});

		res.setHeader('Set-Cookie', cookie);
		res.status(StatusCodes.OK).json({
			done: true,
			data: null
		});
	} catch (e) {
		console.log(e);

		throw new RouteError(
			StatusCodes.UNAUTHORIZED,
			'Invalid token received',
			'Please request a new token again.'
		);
	}
});

export default router.handler({ onError, onNoMatch });

function getToken(req: NextApiRequest) {
	const token = [req.query.token].flat().at(-1);

	if (!token) {
		throw new RouteError(StatusCodes.BAD_REQUEST, 'Token not received');
	}

	return token;
}
