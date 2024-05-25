import { createRouter } from "next-connect";
import connection from '@/handlers/sqlite3';
import React from 'react';

const router = createRouter();

router.get(async (req, res) => {
	const { UserSN, ArticleSN } = req.query;
	const sql = `
	DELETE FROM CollectedArticle where UserSN=? AND ArticleSN=?
	`;
	let [results] = await connection.execute(sql, [UserSN, ArticleSN]); // TODO

	res.json({ status: 'success', message: '刪除成功' });
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
