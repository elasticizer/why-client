export default function PayMethod() {
	return (
		<>
			<div className="border border-gray-300 rounded-lg p-4  mb-4">
				<div className="flex pb-4 mb-4 border-b border-gray-300">
					<p className="text-xl">付款方式</p>
				</div>
				<div
					className="mt-2 bg-blue-100 border border-blue-200 text-md text-blue-800 rounded-lg p-4 dark:bg-blue-800/10 dark:border-blue-900 dark:text-blue-500"
					role="alert">
					<span className="font-bold">你所有的交易資訊皆獲得安全保護</span>
				</div>
				{/* 付款項目列 */}
				<div className="hs-accordion-group mt-4">
					{/* LINE PAY */}
					<div
						className="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl"
						id="hs-active-bordered-heading-one">
						<button
							className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
							aria-controls="hs-basic-active-bordered-collapse-one">
							<div className="flex flex-row justify-center items-center gap-1">
								LINE Pay
							</div>

							<svg
								className="hs-accordion-active:hidden block size-3.5"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="M5 12h14" />
								<path d="M12 5v14" />
							</svg>
							<svg
								className="hs-accordion-active:block hidden size-3.5"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="M5 12h14" />
							</svg>
						</button>
						<div
							id="hs-basic-active-bordered-collapse-one"
							className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
							aria-labelledby="hs-active-bordered-heading-one">
							<div className="pb-4 px-5">
								<p className="text-gray-800 dark:text-neutral-200">
									使用 LINE Pay 付款，你將被導入「LINE
									Pay」付款頁面進行安全結帳。
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
