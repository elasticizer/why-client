import connection from '@/handlers/sqlite3';

export default async function handler(req, res) {
	const sn = req.query.sn;
	const [results] = await connection.execute(
		'SELECT COUNT(Course.Name) AS TotalCourses FROM Course JOIN User ON Course.TeacherSN = User.SN WHERE User.SN=?',
		[sn]
	);

	return res.status(200).json(results);
}
