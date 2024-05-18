import MainLayout from '@/layouts/mainLayout';
import Checkout from '@/components/checkout';
import Finish from '@/components/checkout/finish';

export default function CheckOut() {
	return (
		<>
			<MainLayout>
				<title>結帳頁面</title>
				<Checkout />
				{/* <Finish /> */}
			</MainLayout>
		</>
	);
}
