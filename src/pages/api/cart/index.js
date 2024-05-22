import connection from '@/handlers/sqlite3';
import { createRouter } from 'next-connect';

const router = createRouter();

router.get(async (req, res) => {
	const [results] = await connection.execute(
		'SELECT Course.SN, Course.Identifier, Course.Name, Course.Price, Domain.Name AS DomainName, File.Filename FROM Course LEFT JOIN	Domain ON Course.DomainSN = Domain.SN JOIN File ON Course.ThumbnailSN = File.SN LIMIT 3'
	);
	res.status(200).json(results);
});

router.post(async (req, res) => {
	const { user, course } = req.body;

	if (!user || !course) {
		return res.status(400).json({ message: '缺少必要欄位' }); // TODO:資料傳遞未成功，會回傳此行
	}

	const [results] = await connection.execute(
		'INSERT INTO Cart (UserSN, CourseSN) VALUES (?, ?)',
		[user, course]
	);
	res.status(200).json({ message: '新增課程成功' });
});

router.delete(async (req, res) => {
	const { user, course } = req.body;

	if (!user || !course) {
		return res.status(400).json({ message: '缺少必要欄位' });
	}
	const [results] = await connection.execute(
		'DELETE FROM Cart WHERE UserSN = ? AND CourseSN = ?',
		[user, course]
	);
	res.status(204).json({});
});

export default router.handler({
	onError(e, req, res) {
		res.status(500).json({ message: '已經有資料' });
	}
});
