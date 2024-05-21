import { createRouter } from "next-connect";
import connection from '@/handlers/sqlite3';
import React from 'react';

const router = createRouter();

router.get(async (req, res) => {
	const sql = `
	SELECT CollectedArticle.*,User.Username,Article.Title,Article.Content,Article.WhenCreated,Author.Nickname AS Author FROM CollectedArticle
JOIN
	User ON User.SN=CollectedArticle.UserSN
JOIN
	Article ON Article.SN=CollectedArticle.ArticleSN
JOIN
	User AS Author ON Author.SN=Article.AuthorSN
WHERE User.SN=?
	`;
	let [results] = await connection.execute(sql, [1]); // TODO

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
