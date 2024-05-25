import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { StatusCodes } from 'http-status-codes';
import { createRouter } from 'next-connect';

const router = createRouter();

router.get(async (req, res) => {
	const [results] = await connection.execute(
		'SELECT Course.SN, Course.Identifier, Course.Name, Course.Price, Domain.Name AS DomainName, File.Filename FROM Course JOIN	Domain ON Course.DomainSN = Domain.SN JOIN File ON Course.ThumbnailSN = File.SN'
	);
	res.status(StatusCodes.OK).json(results);
});

export default router.handler({ onError, onNoMatch });
