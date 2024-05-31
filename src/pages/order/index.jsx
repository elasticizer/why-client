import Home from '@/layouts/home';
import CartLayout from '@/layouts/cart';
import OrderTabs from '@/components/order/orderTabs';

export default function Order() {
	return (
		<>
			<Home>
				<CartLayout>
					<title>訂單</title>
					<OrderTabs />
				</CartLayout>
			</Home>
		</>
	);
}
