import { RouteError, onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { StatusCodes } from 'http-status-codes';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.post(async (req, res) => {
	const { email, first_name, last_name } = req.body;

	if (!(email && first_name && last_name)) {
		throw new RouteError(
			StatusCodes.BAD_REQUEST,
			'Necessary field not received'
		);
	}

	const [[user]] = await connection.execute(
		'SELECT Email FROM User WHERE Email = ?',
		[email]
	);

	if (user) {
		throw new RouteError(
			StatusCodes.CONFLICT,
			'Duplicate signup detected',
			'Please sign in the account directly.'
		);
	}

	await connection.execute(
		'INSERT INTO User (Email, FirstName, LastName) VALUES (?, ?, ?)',
		[(email as string).toLowerCase(), first_name, last_name]
	);

	res.redirect(StatusCodes.TEMPORARY_REDIRECT, 'signin');
});

export default router.handler({ onError, onNoMatch });
