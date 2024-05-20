import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Summary({ price, totalQty, totalPrice }) {
	// const [price, setPrice] = useState(1500); // 預設金額
	const [disCount, setDisCount] = useState(100); // 預設折扣金額

	return (
		<>
			<div className="sticky top-0 start-0">
				<div className="group bg-gray-100">
					<h5 className="group-hover:text-gray-600 text-md font-semibold text-gray-800 p-4">
						訂單明細
					</h5>
				</div>
				<div className="space-y-4 p-4">
					{/* 優惠券折抵 */}
					<div className="flex items-center justify-between text-sm">
						<p>優惠折抵</p>
						<p className="underline">-NT${disCount}</p>
					</div>
					{/* 小計 */}
					<div className="flex items-center justify-between text-sm">
						<p>{totalQty} 件小計</p>
						<p>NT${totalPrice}</p>
					</div>

					{/* 總金額 */}
					<div className="flex items-center justify-between text-lg border-t pt-4">
						<p>結帳總金額 :</p>
						<p className="font-bold">NT${totalPrice - disCount}</p>
					</div>
					{/* 結帳按鈕 */}
					<Link href="./cart/checkout">
						<button
							type="button"
							className="py-2 mt-4 w-full inline-flex items-center justify-center gap-x-2 text-md font-bold rounded-lg border border-transparent bg-orange-400 text-white hover:bg-orange-500 disabled:opacity-50 disabled:pointer-events-none">
							前往結帳
						</button>
					</Link>
				</div>
			</div>
		</>
	);
}
