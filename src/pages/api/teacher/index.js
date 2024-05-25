import { createRouter } from "next-connect";
import React from 'react';
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
	console.log(User);

	const [results] = await connection.execute('SELECT *,File.SN AS FileSN FROM Course JOIN FILE ON Course.ThumbnailSN=File.SN WHERE TeacherSN=?', [User]);

	console.log(results);
	res.status(200).json({ message: "查詢成功", results: results });

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
