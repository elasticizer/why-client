import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { StatusCodes } from 'http-status-codes';
import { createRouter } from 'next-connect';

const router = createRouter();

router.get(async (req, res) => {
	const sn = req.query.sn;
	const [results] = await connection.execute(
		'SELECT * FROM Course WHERE SN=?',
		[sn]
	);

	return res.status(200).json(results[0]);
});

export default router.handler({ onError, onNoMatch });
