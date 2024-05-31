import Home from '@/layouts/home';
import CartLayout from '@/layouts/cart';
import Finish from '@/components/checkout/finish';

export default function CheckOut() {
	return (
		<>
			<Home>
				<CartLayout>
					<title>結帳成功</title>
					<Finish />
				</CartLayout>
			</Home>
		</>
	);
}
