import React from 'react';

export default function OrderItem() {
	return (
		<>
			<div className="container ">
				<div className="border-2 border-dashed rounded-lg p-4 mt-4 mx-auto w-4/5">
					{/* 訂單標頭 */}
					<div className="flex justify-between items-center border-b-2 pb-2">
						<div className="flex flex-col gap-y-1">
							{/* 訂單編號 */}
							<p className="text-xl font-semibold">ADUQ2189H1</p>
							{/* 訂單日期 */}
							<p className="text-sm">2024-03-31</p>
						</div>
						<div className="flex items-center gap-x-1">
							<p className="font-bold">已完成</p>
							<svg
								className="size-4 text-green-500"
								xmlns="http://www.w3.org/2000/svg"
								width={16}
								height={16}
								fill="currentColor"
								viewBox="0 0 16 16">
								<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
							</svg>
						</div>
					</div>
					{/* 訂單內容 */}
					<div className="pt-4 flex justify-between">
						{/* 訂單內容 */}
						<div className="flex gap-3 lg:flex-row sm:flex-col md:flex-col">
							{/* 課程圖片 */}
							<div className="sm:hidden lg:flex rounded-xl relative h-24 w-48  mx-2">
								<img
									className="absolute top-0 start-0 object-cover h-24 w-48 rounded-xl shadow-lg hover:z-10"
									src="https://images.hahow.in/images/660637d3b38e616560508c46"
								/>
								{/* 多課程 課程圖片疊加 */}
								<img
									className="absolute top-5 hover:top-10 start-0 object-cover h-24 w-48 rounded-xl shadow-lg ease-in duration-300"
									src="https://images.hahow.in/images/6479757650ac16648e1ead96"
								/>
							</div>
							{/* 訂單資料 */}
							<div className="flex sm:flex-col md:flex-col lg:flex-row sm:gap-3 md:gap-6 lg:gap-3">
								<div className="flex flex-col gap-3">
									<div className="">
										<p className="font-bold lg:text-lg md:text-base sm:text-base">
											課程名稱
										</p>
										<div className="inline-flex items-center">
											<span className="size-2 inline-block bg-orange-300 rounded-full me-2"></span>
											<span className="text-gray-600 lg:text-base md:text-sm sm:text-sm tracking-wide">
												原創角色設計全攻略｜從風格定位到 IP 經營
											</span>
										</div>
										<div className="inline-flex items-center">
											<span className="size-2 inline-block bg-orange-300 rounded-full me-2"></span>
											<span className="text-gray-600 lg:text-base md:text-sm sm:text-sm tracking-wide">
												玩轉 RPA：使用 UiPath 打造專屬小助理
											</span>
										</div>
										{/* <p className="text-gray-600 lg:text-base md:text-sm sm:text-sm tracking-wide">
									原創角色設計全攻略｜從風格定位到 IP 經營
								</p>
								<p className="text-gray-600 lg:text-base md:text-sm sm:text-sm tracking-wide">
									玩轉 RPA：使用 UiPath 打造專屬小助理
								</p> */}
									</div>
									<div>
										<p className="font-bold lg:text-lg md:text-base sm:text-base">
											付款方式
										</p>
										<p className="text-gray-600 lg:text-base md:text-sm sm:text-sm">
											信用卡付款
										</p>
									</div>
								</div>
								<div className="flex lg:flex-col md:flex-row sm:flex-row gap-x-6 gap-y-3 lg:w-2/4">
									<div>
										<p className="font-bold lg:text-lg md:text-base sm:text-base">
											總額
										</p>
										<p className="text-gray-600 lg:text-base md:text-sm sm:text-sm">
											$1000
										</p>
									</div>
									<div>
										<p className="font-bold lg:text-lg md:text-base sm:text-base">
											折扣
										</p>
										<p className="text-gray-600 lg:text-base md:text-sm sm:text-sm">
											$100
										</p>
									</div>
									<div>
										<p className="font-bold lg:text-lg md:text-base sm:text-base text-nowrap">
											付款金額
										</p>
										<p className="text-gray-600 lg:text-base md:text-sm sm:text-sm">
											NT$900
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* 訂單時間條 */}
						<div className="ms-4">
							{/* Item */}
							<div className="flex gap-x-3">
								{/* Icon */}
								<div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
									<div className="relative z-10 size-7 flex justify-center items-center">
										<div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600" />
									</div>
								</div>
								{/* End Icon */}
								{/* Right Content */}
								<div className="grow pt-0.5 pb-4">
									<h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
										<svg
											className="flex-shrink-0 size-4 mt-1"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
											<polyline points="14 2 14 8 20 8" />
											<line
												x1={16}
												x2={8}
												y1={13}
												y2={13}
											/>
											<line
												x1={16}
												x2={8}
												y1={17}
												y2={17}
											/>
											<line
												x1={10}
												x2={8}
												y1={9}
												y2={9}
											/>
										</svg>
										訂單成立時間
									</h3>
									<p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
										2024-03-30
									</p>
								</div>
								{/* End Right Content */}
							</div>
							{/* End Item */}
							{/* Item */}
							<div className="flex gap-x-3">
								{/* Icon */}
								<div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
									<div className="relative z-10 size-7 flex justify-center items-center">
										<div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600" />
									</div>
								</div>
								{/* End Icon */}
								{/* Right Content */}
								<div className="grow pt-0.5 pb-4">
									<h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
										付款時間
									</h3>
									<p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
										2024-03-31
									</p>
								</div>
								{/* End Right Content */}
							</div>
							{/* End Item */}
							{/* Item */}
							<div className="flex gap-x-3">
								{/* Icon */}
								<div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
									<div className="relative z-10 size-7 flex justify-center items-center">
										<div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600" />
									</div>
								</div>
								{/* End Icon */}
								{/* Right Content */}
								<div className="grow pt-0.5 pb-4">
									<h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
										前往課程頁面
									</h3>
									<a
										href='#'
										className="mt-1 -ms-1 p-1 inline-flex items-center gap-x-2 text-xs rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 text-nowrap cursor-pointer">
										原創角色設計全攻略｜從風格定位到 IP 經營
									</a>
								</div>
								{/* End Right Content */}
							</div>
							{/* End Item */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
