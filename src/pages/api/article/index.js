import connection from '@/handlers/sqlite3';
import { stripHtml } from 'string-strip-html';

export default async function handler(req, res) {
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
}
