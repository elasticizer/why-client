import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { createRouter } from 'next-connect';
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router';
import { StatusCodes } from 'http-status-codes';

const router = createRouter();

const orders = {};

router.get(async (req, res) => {
	const id = req.query.id; // 路由參數: id
	const [results] = await connection.execute(
		'SELECT Cart.UserSN AS id, Course.Name AS name, Course.Price AS amount FROM Cart JOIN Course ON Course.SN = Cart.CourseSN WHERE id = ?',
		[id]
	);
	console.log(id);
	const order = results[id]; // 找對應於 id 的訂單資料
	order.orderId = parseInt(new Date().getTime() / 1000); // 訂單編號
	orders[order.orderId] = order; // 訂單資料添加到 orders 物件中

	console.log('orders:', orders);

	console.log('results:', results);

	res.status(200).json(results);
});

export default router.handler({ onError, onNoMatch });
