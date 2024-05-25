import CartLayout from '@/layouts/Cart';
import OrderTabs from '@/components/order/orderTabs';

export default function Order() {
	return (
		<>
			<CartLayout>
				<title>訂單</title>
				<OrderTabs />
			</CartLayout>
		</>
	);
}
