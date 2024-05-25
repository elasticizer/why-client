import CartLayout from '@/layouts/Cart';
import Checkout from '@/components/checkout';
import Finish from '@/components/checkout/finish';

export default function CheckOut() {
	return (
		<>
			<CartLayout>
				<title>結帳頁面</title>
				<Checkout />
				{/* <Finish /> */}
			</CartLayout>
		</>
	);
}
