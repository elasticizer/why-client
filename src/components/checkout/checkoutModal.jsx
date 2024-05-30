import { useCart } from '@/contexts/cart';
import { useCoupon } from '@/contexts/coupon';

export default function CheckoutModal({ discount }) {
	const cart = useCart();
	const { selectedCoupon } = useCoupon();
	const initialValue = 0;
	const totalPrice = cart.cartItem.reduce(
		(acc, item) => acc + item.Price * 1,
		initialValue
	);

	const handleCheckout = async e => {
		e.preventDefault();

		const method = 'POST';
		const fd = cart.cartItem.reduce(
			(body, item) => (body.append('courses', item.SN), body),
			new FormData()
		);
		const { data } = await fetch('/api/cart/checkout', {
			method,
			body: new URLSearchParams(fd)
		}).then(r => r.json());

		location.replace(data);
	};
	return (
		<div
			id="hs-basic-modal"
			className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
			<div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
				<div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
					<div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
						<h3 className="font-bold text-gray-800 dark:text-white">結帳</h3>
						<button
							type="button"
							className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
							data-hs-overlay="#hs-basic-modal">
							<span className="sr-only">Close</span>
							<svg
								className="flex-shrink-0 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="M18 6 6 18" />
								<path d="m6 6 12 12" />
							</svg>
						</button>
					</div>
					<div className="p-4 overflow-y-auto">
						<p className="mt-1 text-gray-800 dark:text-neutral-400">
							請確認您的課程、結帳資訊是否正確
						</p>
					</div>
					<div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
						<button
							type="button"
							className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
							data-hs-overlay="#hs-basic-modal">
							取消
						</button>
						<button
							type="submit"
							onClick={handleCheckout}
							className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-400 text-white hover:bg-orange-500 disabled:opacity-50 disabled:pointer-events-none">
							確認結帳
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
