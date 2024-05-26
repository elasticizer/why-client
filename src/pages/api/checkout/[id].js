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
  const orders = results.map((result) => ({
    id: result.id,
    name: result.name,
    amount: result.amount,
    currency: 'TWD' // 在此處新增 currency: 'TWD'
  }));

  console.log(orders);

  res.status(200).json(orders);
});

console.log(orders);

export default router.handler({ onError, onNoMatch });
