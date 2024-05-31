import Home from '@/layouts/home';
import CartLayout from '@/layouts/cart';
import Finish from '@/components/checkout/finish';
import 'animate.css';

export default function CheckOut() {
	return (
		<>
			<Home>
				<CartLayout>
					<title>結帳成功</title>
					<div className="animate__animated animate__fadeInLeft">
						<Finish />
					</div>
				</CartLayout>
			</Home>
		</>
	);
}
