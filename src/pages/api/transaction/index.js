import connection from '@/handlers/sqlite3';
import { createRouter } from 'next-connect';

const router = createRouter();

router.get(async (req, res) => {
	const [results] = await connection.execute(
		'SELECT "Order"."SN", "Order"."WhenCheckedOut", "Order"."WhenPaid", "OrderDetail"."Subtotal", Course.Name, Course.Price, File.Filename FROM "Order" JOIN "OrderDetail" ON "Order"."SN" = "OrderDetail"."OrderSN" JOIN Course ON Course.SN = OrderDetail.CourseSN JOIN File ON Course.ThumbnailSN = File.SN'
	);
	// 'SELECT "Order"."WhenCheckedOut", "Order"."WhenPaid", "OrderDetail"."Subtotal", Course.Name, Course.Price, Coupon.DiscountRate FROM "Order" JOIN "OrderDetail" ON "Order"."SN" = "OrderDetail"."OrderSN" JOIN Course ON Course.SN = OrderDetail.CourseSN JOIN Coupon ON Order.CouponSN = Coupon.CreatorSN'
	res.status(200).json(results);
});

router.post(async (req, res) => {
	const { learner, coupon } = req.body;
	const [results] = await connection.execute(
		'INSERT INTO "Order" (LearnerSN,CouponSN) VALUES (?,?)',
		[learner, coupon]
	);
	res.status(200).json({ done: true, message: '新增訂單成功' });
});

export default router.handler({
	onError(e, req, res) {
		res.status(500).json({ message: '已經有資料' });
	}
});
