import React from 'react';
import PayMethod from './payMethod';
import Summary from './summary';
import SummaryOrder from './summaryOrder';
import PrevPageBtn from '../cart/prevPageBtn';
import Link from 'next/link';

export default function Checkout() {
	return (
		<>
			<div className="container mt-8 max-w-[85rem] sm:px-6 lg:px-8 mx-auto my-8">
				<PrevPageBtn
					href="/cart"
					prev="購物車"
				/>
				{/* 結帳畫面 */}
				<div className="grid lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:gap-x-6">
					<div className="lg:col-span-3">
						<Summary />
						<PayMethod />
					</div>
					<SummaryOrder />
				</div>
			</div>
		</>
	);
}
