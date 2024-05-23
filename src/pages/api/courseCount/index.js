import connection from '@/handlers/sqlite3';

export default async function handler(req, res) {
	const limit = req.query.limit ?? 10;
	const [[results]] = await connection.execute(
		'SELECT COUNT(Course.Name) AS TotalCourses FROM Course JOIN User ON Course.TeacherSN = User.SN'
	);

	return res.status(200).json(results);
}
