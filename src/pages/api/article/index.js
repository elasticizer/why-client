import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { StatusCodes } from 'http-status-codes';
import { createRouter } from 'next-connect';
import { stripHtml } from 'string-strip-html';

const router = createRouter();

router.get(async (req, res) => {
	const limit = req.query.limit ?? 10;
	const [results] = await connection.execute(
		'SELECT * FROM Article JOIN User ON Article.AuthorSN = User.SN LIMIT ?',
		[limit]
	);
	const data = results.map(article => ({
		...article,
		Content: stripHtml(article.Content).result
	}));

	return res.status(200).json(data);
});

export default router.handler({ onError, onNoMatch });
