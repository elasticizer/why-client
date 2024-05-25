import CartLayout from '@/layouts/Cart';
import Cart from '@/components/cart';

export default function CartPage() {
	return (
		<>
			<CartLayout>
				<title>購物車</title>
				<Cart />
			</CartLayout>
		</>
	);
}
