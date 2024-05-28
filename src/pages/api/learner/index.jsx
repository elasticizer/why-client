import { createRouter } from "next-connect";
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router';
import connection from '@/handlers/sqlite3';


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
	const UserSN = user.SN;

	const [results] = await connection.execute(
		'SELECT Course.SN,Course.Name,Course.Intro,Domain.SN AS DomainSN,Domain.Name AS DomainName,File.Filename,User.Nickname FROM UserCourse JOIN Course ON UserCourse.CourseSN = Course.SN JOIN Domain ON Course.DomainSN =Domain.SN JOIN File ON Course.ThumbnailSN = File.SN JOIN User ON Course.TeacherSN = User.SN WHERE UserCourse.UserSN = ? Limit 6', [UserSN]);

	res.status(200).json({ message: '查詢成功', results: results });
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
