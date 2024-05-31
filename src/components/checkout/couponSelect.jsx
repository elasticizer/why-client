import { useCoupon } from '@/contexts/coupon';
import { useState, useEffect } from 'react';

export default function CouponSelect() {
	const { selectedCoupon, setSelectedCoupon } = useCoupon();

	const [coupons, setCoupons] = useState([]);

	useEffect(() => {
		const getCoupons = async () => {
			const url = '/api/transaction/coupon';
			try {
				const res = await fetch(url);
				const data = await res.json();
				setCoupons(data);
			} catch (e) {
				setCoupons([]);
			}
		};
		getCoupons();
	}, []);
	console.log(coupons);

	return (
		<div className="border border-gray-300 rounded-lg p-4">
			<div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-300">
				<p className="text-xl">選擇優惠券</p>
				<p className="text-sm text-gray-500">
					您已選取
					<strong>
						{selectedCoupon ? `「${selectedCoupon.Name}」` : '未選擇優惠'}
					</strong>
					的優惠
				</p>
			</div>
			<div className="flex gap-3">
				{coupons.map((coupon, i) => (
					<a
						key={i}
						className="max-w-xs flex flex-col border border-t-4 border-t-orange-400 hover:border-t-4 hover:border-t-orange-600 shadow-sm rounded-xl cursor-pointer w-1/4"
						onClick={() => setSelectedCoupon(coupon)}>
						<div className="p-4 md:p-5">
							<h3 className="text-lg text-center font-bold text-gray-800">
								{coupon.Name}
							</h3>
							<p className="mt-2 text-gray-500 text-sm text-center">
								{coupon.Description}
							</p>
						</div>
					</a>
				))}
			</div>
		</div>
	);
}
