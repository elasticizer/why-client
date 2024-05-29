import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { StatusCodes } from 'http-status-codes';
import { createRouter } from 'next-connect';

const router = createRouter();

router.get(async (req, res) => {
	const [results] = await connection.execute(
		'SELECT * FROM Coupon'
	);
	res.status(StatusCodes.OK).json(results);
});

export default router.handler({ onError, onNoMatch });