import React from 'react';
import CouponItem from './couponItem';

export default function CouponModal() {
	return (
		<>
			<div className="flex justify-between p-4 border-t border-gray-300">
				<div>
					<button
						type="button"
						className="inline-flex items-center gap-x-1 text-sm font-semibold text-orange-500 hover:text-orange-400 rounded-lg border border-transparent disabled:opacity-50 disabled:pointer-events-none"
						data-hs-overlay="#hs-medium-modal">
						使用優惠券
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
							<path d="m9 18 6-6-6-6" />
						</svg>
					</button>

					<div>
						<div
							id="hs-medium-modal"
							className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
							<div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
								<div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
									<div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
										<h3 className="font-bold text-gray-800 dark:text-white">
											優惠券
										</h3>
										<button
											type="button"
											className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
											data-hs-overlay="#hs-medium-modal">
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
									<div className="p-4 overflow-y-auto flex gap-3 flex-wrap justify-center">
										<CouponItem />
									</div>
									<div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
										<button
											type="button"
											className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
											data-hs-overlay="#hs-medium-modal">
											取消
										</button>
										<button
											type="button"
											className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-400 text-white hover:bg-orange-500 disabled:opacity-50 disabled:pointer-events-none"
											data-hs-overlay="#hs-medium-modal">
											確定
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<p className='text-sm text-gray-500'>您已選取<strong>「全館享9折優惠」</strong>的優惠</p>
			</div>
		</>
	);
}
