import MainLayout from '@/layouts/mainLayout';
import OrderTabs from '@/components/order/orderTabs';

export default function Order() {
	return (
		<>
			<MainLayout>
				<title>訂單</title>
				<OrderTabs />
			</MainLayout>
		</>
	);
}
