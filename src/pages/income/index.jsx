import CartLayout from '@/layouts/Cart';
import IncomePage from '@/components/income';

export default function InCome() {
	return (
		<>
			<CartLayout>
				<title>講師收益</title>
				<IncomePage />
			</CartLayout>
		</>
	);
}
