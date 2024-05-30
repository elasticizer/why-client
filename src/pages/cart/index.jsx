import CartLayout from '@/layouts/cart';
import Cart from '@/components/cart';
import 'animate.css';

export default function CartPage() {
	return (
		<>
			<CartLayout>
				<title>購物車</title>
				<div className="animate__animated animate__fadeInLeft">
					<Cart />
				</div>
			</CartLayout>
		</>
	);
}
