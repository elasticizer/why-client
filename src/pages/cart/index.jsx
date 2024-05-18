import MainLayout from '@/layouts/mainLayout';
import Cart from '@/components/cart';

export default function CartPage() {
	return (
		<>
			<MainLayout>
				<title>購物車</title>
				<Cart />
			</MainLayout>
		</>
	);
}
