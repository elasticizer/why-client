import { RouteError, onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { StatusCodes } from 'http-status-codes';
import jwt, { verify } from 'jsonwebtoken';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { env } from 'process';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
	const token = [req.query.token].flat().at(-1);

	if (!token) {
		throw new RouteError(StatusCodes.BAD_REQUEST, 'Token not received');
	}

	try {
		const data = verify(token, env.APP_KEY as string) as Record<
			string,
			unknown
		>;

		await connection.execute(
			'UPDATE User SET Email = ? WHERE SN = ?',
			[data.email, data.sn]
		);
	} catch (e) {
		throw new RouteError(StatusCodes.UNAUTHORIZED, 'Invalid token');
	}

	res.status(StatusCodes.OK).json({
		done: true,
		data: null
	});
});

export default router.handler({ onError, onNoMatch });
