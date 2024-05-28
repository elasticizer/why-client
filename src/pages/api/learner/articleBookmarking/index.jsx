import { createRouter } from "next-connect";
import connection from '@/handlers/sqlite3';
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router';

const router = createRouter();

router.get(async (req, res) => {
	const sessionId = req.cookies.SESSION_ID;


	if (!sessionId) {
		throw new RouteError(
			StatusCodes.FORBIDDEN,
			'沒有登入'
		);
	}
	const user = await Session.associate(sessionId);

	const User = user.SN;

	const sql = `
	SELECT CollectedArticle.*,User.Nickname,Article.Title,Article.Content,Article.WhenCreated,Author.Nickname AS Author FROM CollectedArticle
JOIN
	User ON User.SN=CollectedArticle.UserSN
JOIN
	Article ON Article.SN=CollectedArticle.ArticleSN
JOIN
	User AS Author ON Author.SN=Article.AuthorSN
WHERE User.SN=?
	`;
	let [results] = await connection.execute(sql, [User]); // TODO

	res.json(results);
});

export default router.handler({
	onError: (err, req, res) => {
		console.log(err);
		res.status(err.statusCode || 500).json({ error: err.message });
	},
	onNoMatch: (req, res) => {
		res.status(404).json({ error: `路由 ${req.method} ${req.url} 找不到` });
	}
});
