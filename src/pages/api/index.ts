import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { StatusCodes } from 'http-status-codes';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
	const [[data]] = await connection.execute('SELECT * FROM example');

	res.status(StatusCodes.OK).json(data);
});

export default router.handler({ onError, onNoMatch });
