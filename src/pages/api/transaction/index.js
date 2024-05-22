import connection from '@/handlers/sqlite3';
import { createRouter } from 'next-connect';

const router = createRouter();

router.get(async (req, res) => {
	const [results] = await connection.execute(
		'SELECT Course.SN, Course.Identifier, Course.Name, Course.Price, Domain.Name AS DomainName, Cart.CourseSN FROM Course LEFT JOIN	Domain ON Course.DomainSN = Domain.SN JOIN Cart ON Course.SN = Cart.CourseSN'
	);
	res.status(200).json(results);
});

export default router.handler({
	onError(e, req, res) {
		res.status(500).json({ message: '已經有資料' });
	}
});
