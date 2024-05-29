import { useCoupon } from '@/contexts/coupon';

export default function CouponSelect() {
	const { selectedCoupon, setSelectedCoupon } = useCoupon();
	const couponData = [
		{
			SN: 1,
			name: '隨機優惠',
			directions: '隨機優惠券，折扣90%',
			discountRate: 0.1
		},
		{
			SN: 2,
			name: '畢業生專屬',
			directions: '畢業生專屬優惠，折扣50%',
			discountRate: 0.5
		},
		{
			SN: 3,
			name: '端午節優惠',
			directions: '端午節特別優惠，享受額外75%折扣',
			discountRate: 0.25
		},
		{
			SN: 4,
			name: '會員專屬',
			directions: '會員享85%折扣',
			discountRate: 0.15
		},
		{
			SN: 5,
			name: '夏季優惠',
			directions: '夏天專屬優惠，折扣89%',
			discountRate: 0.11
		}
	];

	return (
		<>
			<div className="border border-gray-300 rounded-lg p-4">
				<div className="flex justify-between items-center pb-4 mb-4 border-b border-gray-300">
					<p className="text-xl">選擇優惠券</p>
					<p className="text-sm text-gray-500">
						您已選取
						<strong>
							{selectedCoupon ? `「${selectedCoupon.name}」` : '未選擇優惠'}
						</strong>
						的優惠
					</p>
				</div>
				<div className="flex gap-3">
					{couponData.map((coupon, i) => (
						<a
							key={i}
							className="max-w-xs flex flex-col border border-t-4 border-t-orange-400 hover:border-t-4 hover:border-t-orange-600 shadow-sm rounded-xl cursor-pointer w-1/4"
							onClick={() => setSelectedCoupon(coupon)}>
							<div className="p-4 md:p-5">
								<h3 className="text-lg text-center font-bold text-gray-800">
									{coupon.name}
								</h3>
								<p className="mt-2 text-gray-500 text-sm text-center">
									{coupon.directions}
								</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</>
	);
}
