import connection from '@/handlers/sqlite3';


export default async function handler(req, res) {
	const sn = req.query.sn;
	const [results] = await connection.execute('SELECT * FROM User');

	res.status(200).json(results[0]);
}
