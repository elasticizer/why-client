import connection from '@/handlers/sqlite3';

export default async function handler(req, res) {
	const limit = req.query.limit ?? 10;

	const [results] = await connection.execute(
		'SELECT Course.SN, Course.Name, Course.Intro,File.FileName, Domain.Name AS DomainName FROM Course JOIN File ON Course.ThumbnailSN = File.SN JOIN Domain ON Course.DomainSN = Domain.SN'
	);

	return res.status(200).json(results);
}