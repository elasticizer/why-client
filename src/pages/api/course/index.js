import connection from '@/handlers/sqlite3';

export default async function handler(req, res) {
	const limit = req.query.limit ?? 6;

	const [results] = await connection.execute(
		'SELECT Course.SN, Course.Identifier, Course.Name, Course.Price, Domain.Name AS DomainName, File.Filename FROM Course LEFT JOIN 	Domain ON Course.DomainSN = Domain.SN JOIN File ON Course.ThumbnailSN = File.SN ORDER BY RANDOM() LIMIT ?',
		[limit]
	);
	res.status(200).json(results);
}
