import CartLayout from '@/layouts/cart';
import Checkout from '@/components/checkout';

export default function CheckOut() {
	return (
		<>
			<CartLayout>
				<title>結帳頁面</title>
				<Checkout />
			</CartLayout>
		</>
	);
}
