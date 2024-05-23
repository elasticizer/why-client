import connection from '@/handlers/sqlite3';

export default async function handler(req, res) {
	const sn = req.query.sn;
	const [results] = await connection.execute(
		'SELECT Course.*, User.SN AS UserSN, User."FirstName", User."LastName", User."Nickname" FROM Course JOIN User ON Course.TeacherSN = User.SN WHERE UserSN=?',
		[sn]
	);

	return res.status(200).json(results[0]);
}
