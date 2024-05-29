import { useState } from 'react';
import PayMethod from './payMethod';
import Summary from './summary';
import SummaryOrder from './summaryOrder';
import PrevPageBtn from '../cart/prevPageBtn';
import CouponSelect from './couponSelect';

export default function Checkout() {
	const [selectedCoupon, setSelectedCoupon] = useState(null);

	return (
		<div className="container mt-8 max-w-[85rem] sm:px-6 lg:px-8 mx-auto my-8">
			<PrevPageBtn
				href="/cart"
				prev="購物車"
			/>
			<div className="grid lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:gap-x-6">
				<div className="lg:col-span-3">
					<Summary />
					<PayMethod />
					<CouponSelect
						setSelectedCoupon={setSelectedCoupon}
						selectedCoupon={selectedCoupon}
					/>
				</div>
				<SummaryOrder selectedCoupon={selectedCoupon} />
			</div>
		</div>
	);
}
