import connection from '@/handlers/sqlite3';

export default async function handler(req, res) {
	const limit = req.query.limit ?? 10;
	const [results] = await connection.execute(
		'SELECT Course.*, User.SN AS UserSN, User."FirstName", User."LastName", User."Nickname" FROM Course JOIN User ON Course.TeacherSN = User.SN WHERE User.SN = 4 LIMIT ?',
		[limit]
	);

	return res.status(200).json(results);
}
