import CartLayout from '@/layouts/cart';
import Finish from '@/components/checkout/finish';

export default function CheckOut() {
	return (
		<>
			<CartLayout>
				<title>結帳成功</title>
				<Finish />
			</CartLayout>
		</>
	);
}
