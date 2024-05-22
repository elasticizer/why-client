import React from 'react';

export default function CouponItem() {
	const couponData = [
		{ id: 1, title: '隨機優惠', directions: '隨機優惠券，折扣10%' },
		{ id: 2, title: '畢業生專屬', directions: '畢業生專屬優惠，折扣50%' },
		{ id: 3, title: '端午節優惠', directions: '端午節特別優惠，享受額外30%折扣' }
	];

	return (
		<>
			{couponData.map((v,i) => (
				<a
					key={i}
					className="max-w-xs flex flex-col border border-t-4 border-t-orange-400 hover:border-t-4 hover:border-t-orange-600 shadow-sm rounded-xl cursor-pointer w-1/4">
					<div className="p-4 md:p-5">
						<h3 className="text-lg text-center font-bold text-gray-800">
							{v.title}
						</h3>
						<p className="mt-2 text-gray-500 text-sm text-center">
							{v.directions}
						</p>
					</div>
				</a>
			))}
		</>
	);
}
