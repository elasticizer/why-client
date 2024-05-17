import React from 'react';

export default function DropDownList() {
	return (
		<>
			<div className="flex justify-between">
				{/* dropdown */}
				<div className="flex gap-3">
					{/* Dropdown1 */}
					<div className="hs-dropdown relative inline-flex mb-4">
						<button
							id="hs-dropdown-default"
							type="button"
							className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
							選擇月份
							<svg
								className="hs-dropdown-open:rotate-180 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="m6 9 6 6 6-6" />
							</svg>
						</button>
						<div
							className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
							aria-labelledby="hs-dropdown-default">
							<a
								className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
								href="#">
								2024/04
							</a>
							<a
								className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
								href="#">
								2024/03
							</a>
						</div>
					</div>
					{/* Dropdown2 */}
					<div className="hs-dropdown relative inline-flex mb-4">
						<button
							id="hs-dropdown-default"
							type="button"
							className="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
							目前狀態
							<svg
								className="hs-dropdown-open:rotate-180 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width={24}
								height={24}
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth={2}
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="m6 9 6 6 6-6" />
							</svg>
						</button>
						<div
							className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 hidden min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full"
							aria-labelledby="hs-dropdown-default">
							<a
								className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
								href="#">
								已領取
							</a>
							<a
								className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
								href="#">
								未領取
							</a>
						</div>
					</div>
				</div>
				{/* end dropdown */}
				{/* 領取按鈕 */}
				<div className='flex flex-col gap-2'>
					<button
						type="button"
						className="px-2 inline-flex items-center gap-x-2 text-sm rounded-lg border text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
						data-hs-overlay="#hs-basic-modal-1">
						單筆領取
					</button>
					<button
						type="button"
						className="px-2 inline-flex items-center gap-x-2 text-sm rounded-lg border text-gray-500 hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
						data-hs-overlay="#hs-basic-modal-1">
						全部領取
					</button>
					<div
						id="hs-basic-modal-1"
						className="hs-overlay hs-overlay-open:opacity-100 hs-overlay-open:duration-500 hidden size-full fixed top-0 start-0 z-[80] opacity-0 overflow-x-hidden transition-all overflow-y-auto pointer-events-none">
						<div className="sm:max-w-lg sm:w-full m-3 sm:mx-auto">
							<div className="flex flex-col bg-orange-50 border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
								<div className="flex justify-between items-center py-3 px-4 dark:border-neutral-700">
									<h3 className="font-bold text-orange-500 dark:text-white">
										領取成功！
									</h3>
									<button
										type="button"
										className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
										data-hs-overlay="#hs-basic-modal-1">
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
