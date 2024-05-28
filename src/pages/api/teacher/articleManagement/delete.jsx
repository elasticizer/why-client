import { createRouter } from "next-connect";
import connection from '@/handlers/sqlite3';
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router';


const router = createRouter();

router.get(async (req, res) => {
	const { ArticleSN } = req.query;


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
	DELETE FROM Article where AuthorSN=? AND SN=?
	`;
	let [results] = await connection.execute(sql, [User, ArticleSN]); // TODO

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
