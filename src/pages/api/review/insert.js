import { onError, onNoMatch, RouteError } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { createRouter } from 'next-connect';
import Session from '@/helpers/session';
import { StatusCodes } from 'http-status-codes';

const router = createRouter();

// 定义 GET 请求的处理程序
router.post(async (req, res) => {

	try {
		const sessionId = req.cookies.SESSION_ID;
		if (!sessionId) {
			throw new RouteError(
				StatusCodes.FORBIDDEN,
				'没有登入'
			);
		}
		const user = await Session.associate(sessionId);
		if (!user) {
			throw new RouteError(
				StatusCodes.UNAUTHORIZED,
				'不可留言'
			);
		}
		console.log(user);
		const { content } = req.body;
		if (!content) {
			throw new RouteError(
				StatusCodes.BAD_REQUEST,
				'缺少留言內容'
			);
		}
		// 插入数据到 Review 表
		const [[review]] = await connection.execute(
			"INSERT INTO Review (Rate, Content, CourseSN, LearnerSN) VALUES (5, ?, 1, ?) RETURNING CourseSN, LearnerSN",
			[content, user.SN]
		);

		const [[data]] = await connection.execute(
			`SELECT Review.*, User.SN, User.WhenQualified, User.Nickname, User.FirstName FROM Review 
			JOIN User ON User.SN = Review.LearnerSN WHERE CourseSN = ? AND LearnerSN = ?`,
			[review.CourseSN, review.LearnerSN]
		)
		res.status(200).json({ done: true, data });
	} catch (err) {
		// 捕捉所有错误并调用 onError 处理
		onError(err, req, res);
	}
});

// 使用 next-connect 处理程序来导出 API 路由
export default router.handler({
	onError: (err, req, res) => {
		console.error(err);
		res.status(err.statusCode || 500).json({ error: err.message });
	},
	onNoMatch: (req, res) => {
		res.status(404).json({ error: `路由 ${req.method} ${req.url} 找不到` });
	},
});