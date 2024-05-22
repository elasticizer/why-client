import { RouteError, onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import jwt from 'jsonwebtoken';
import { env } from 'process';
import chalk from 'chalk';
import { StatusCodes } from 'http-status-codes';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
	const { email } = req.body;
	const [[user]] = await connection.execute(
		'SELECT SN, Email FROM User WHERE Email = ?',
		[email]
	);

	if (!user) {
		throw new RouteError(
			StatusCodes.UNAUTHORIZED,
			'Account not registered',
			'Please register the account first.'
		);
	}

	const token = jwt.sign({ sn: user.SN }, env.APP_KEY as string, {
		expiresIn: 15 * 60
	});

	console.info(chalk.bgBlueBright(
		'Magic link:',
		`${env.APP_URL}/api/auth/signin/challenge?token=${token}`
	));

	res.status(StatusCodes.OK).json({
		done: true,
		data: null
	});
});

export default router.handler({ onError, onNoMatch });
