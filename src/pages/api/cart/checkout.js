import connection from '@/handlers/sqlite3';

export default async function handler(req, res) {
	const limit = req.query.limit ?? 3;
  const domainSN = req.query.domainSN ?? 24;

	const [results] = await connection.execute(
		'SELECT Course.SN, Course.Identifier, Course.Name, Course.Price, Domain.Name as DomainName FROM Course LEFT JOIN Domain ON Course.DomainSN = Domain.SN WHERE Course.DomainSN = ? LIMIT ?',
		[domainSN, limit]
	);
	res.status(200).json(results);
}
