// SummaryOrder.js
import CheckoutModal from './checkoutModal';
import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/cart';

export default function SummaryOrder({ selectedCoupon }) {
	const [discount, setDiscount] = useState(0); // 預設折扣金額
	const { totalPrice, totalQty } = useCart();

	useEffect(() => {
		if (selectedCoupon) {
			setDiscount(Math.round(totalPrice * selectedCoupon.discountRate));
		} else {
			setDiscount(0);
		}
	}, [totalPrice, selectedCoupon]);

	return (
		<>
			{/* 送出結帳確認提示框 */}
			<CheckoutModal />
			<div className="lg:col-span-1 lg:w-full lg:h-fit lg:via-transparent lg:to-transparent border border-gray-300 rounded-lg">
				<div className="sticky top-0 start-0">
					<div className="group flex items-center gap-x-3 dark:border-neutral-700 bg-gray-100">
						<h5 className="group-hover:text-gray-600 text-md font-semibold text-gray-800 p-4">
							訂單明細
						</h5>
					</div>
					<div className="space-y-4 p-4">
						{/* 優惠券折抵 */}
						<div className="flex items-center justify-between text-sm hs-tooltip">
							<p>優惠折抵</p>
							<p className="underline hs-tooltip-toggle">-NT${discount}</p>
							{/* 優惠券工具提示 */}
							<span
								className="hs-tooltip-content hs-tooltip-shown:opacity-50 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-600 text-white text-xs rounded-lg"
								role="tooltip">
								{selectedCoupon ? selectedCoupon.name : '無優惠券'}
							</span>
						</div>
						{/* 小計 */}
						<div className="flex items-center justify-between text-sm">
							<p>{totalQty} 件小計</p>
							<p>NT${totalPrice}</p>
						</div>
						{/* 總金額 */}
						<div className="flex items-center justify-between text-lg border-t pt-4">
							<p>結帳總金額 :</p>
							<p className="font-bold">NT${totalPrice - discount}</p>
						</div>
						{/* 結帳按鈕 */}
						<button
							type="button"
							className="py-2 w-full inline-flex items-center justify-center gap-x-2 text-md font-bold rounded-lg border border-transparent bg-orange-400 text-white hover:bg-orange-500 disabled:opacity-50 disabled:pointer-events-none"
							data-hs-overlay="#hs-basic-modal">
							送出結帳
						</button>
						{/* 同意條款 */}
						<div className="flex w-full justify-center text-xs ">
							<a href="#">
								<span className="text-xs font-bold text-gray-500 hover:text-gray-400">
									我已詳閱並同意〈服務契約〉及服務內容
								</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
