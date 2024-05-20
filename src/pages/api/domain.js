import { createRouter } from "next-connect";
import connection from '@/handlers/sqlite3';

const router = createRouter();


router.get(async (req, res) => {
	const [results] = await connection.execute('SELECT * FROM Domain');
	res.json(results);
});

export default router.handler({
	onError: (err, req, res) => {
		console.log(err);
		res.status(err.statusCode || 500).json({ error: err.message });
	},
	onNoMatch: (req, res) => {
		res.status(404).json({ error: `路由 ${req.method} ${req.url} 找不到` });
	}
});
