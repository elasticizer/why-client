import React from 'react';

export default function CouponItem() {
	return (
		<>
			<a className="max-w-xs flex flex-col border border-t-4 border-t-orange-400 hover:border-t-4 hover:border-t-orange-600 shadow-sm rounded-xl cursor-pointer">
				<div className="p-4 md:p-5">
					<h3 className="text-lg font-bold text-gray-800 dark:text-white">
						全館享9折優惠
					</h3>
					<p className="mt-2 text-gray-500 dark:text-neutral-400">
						1000元變成900元
					</p>
				</div>
			</a>
		</>
	);
}
