import { RouteError, onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import jwt from 'jsonwebtoken';
import { env } from 'process';
import chalk from 'chalk';
import { StatusCodes } from 'http-status-codes';
import { send } from '@/handlers/mailer';
import { render } from '@react-email/components';
import MagicLinkEmail from '@/emails/magic-link';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
	const { email } = req.body;
	const [[user]] = await connection.execute(
		'SELECT SN, Email FROM User WHERE Email = ? AND WhenDeactivated IS NULL',
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
	const link = `${env.APP_URL}/signin/challenge?token=${token}`;

	send({
		html: render(MagicLinkEmail({ link })),
		recipient: email,
		subject: '登入您的 Why Academy 帳戶'
	});

	console.info(chalk.bgBlueBright('Magic link:', link));

	res.status(StatusCodes.OK).json({
		done: true,
		data: link
	});
});

export default router.handler({ onError, onNoMatch });
