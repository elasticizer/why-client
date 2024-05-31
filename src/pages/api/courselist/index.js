import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';

import { createRouter } from 'next-connect';

const router = createRouter();

router.get(async (req, res) => {
	const [results] = await connection.execute(
		`SELECT Course.SN, Course.Name, Course.Intro, Course.Price, Domain.Name AS DomainName, File.Filename, User.Nickname 
        FROM Course 
        JOIN User ON Course.TeacherSN = User.SN
        JOIN Domain ON Course.DomainSN = Domain.SN 
        JOIN File ON Course.ThumbnailSN = File.SN`
	);

	res.status(200).json(results);
});

// 使用 next-connect 处理程序来导出 API 路由
export default router.handler({
	onError: (err, req, res) => {
		console.error(err);
		res.status(err.statusCode || 500).json({ error: err.message });
	},
	onNoMatch: (req, res) => {
		res.status(404).json({ error: `路由 ${req.method} ${req.url} 找不到` });
	}
});
