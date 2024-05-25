import { createRouter } from "next-connect";
import connection from '@/handlers/sqlite3';
import React from 'react';
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

console.log(user);

	const sql = `
	SELECT Article.SN AS ArticleSN , Article.Title, Article.Content, Article.WhenCreated, Article.AuthorSN, User.Nickname AS Authorname
	FROM Article
			JOIN User ON Article.AuthorSN = User.SN
	WHERE
			AuthorSN = ?
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
