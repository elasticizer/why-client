import React from 'react';

export default function Finish() {
	return (
		<>
			<div className="container">
				<div className="overflow-hidden sm:p-4">
					<div className="max-w-[85rem] mx-auto sm:px-6">
						<div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
							{/* Title */}
							<div className="text-center">
								<h1 className="text-center font-semibold text-3xl pt-2">
									感謝你的購買
								</h1>
							</div>
							{/* End Title */}

							{/* 完成結帳卡片 */}
							<div
								className="bg-white border rounded-xl shadow-sm sm:flex lg:flex-row md:flex-col sm:flex-col"
								dir="ltr">
								<div
									className="flex-shrink-0 relative lg:w-full overflow-hidden lg:pt-[20%] sm:pt-[50%] sm:rounded-t-xl sm:max-w-full 
									md:rounded-t-xl md:max-w-full 
									lg:rounded-s-xl lg:rounded-e-none lg:max-w-xs">
									<img
										className="size-full absolute top-0 start-0 object-cover"
										src="https://images.hahow.in/images/660637d3b38e616560508c46?width=450"
									/>
								</div>
								<div className="w-full">
									<div className="flex flex-col h-full sm:p-7">
										<h3 className="text-lg font-bold text-gray-800">
											本課程已開課，隨時都可以上課唷！
										</h3>
										<h2 className="mt-1 text-md font-bold">
											除了上課看影片學習之外，你還可以……
										</h2>

										<div className="mt-auto flex justify-between items-center">
											<ul className="space-y-3 text-sm mt-5">
												<li className="flex space-x-3">
													<svg
														className="flex-shrink-0 size-4 mt-0.5 text-blue-600"
														xmlns="http://www.w3.org/2000/svg"
														width={24}
														height={24}
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round">
														<polyline points="20 6 9 17 4 12" />
													</svg>
													<span className="text-gray-800">
														留言發問：隨時參與老師同學的討論
													</span>
												</li>
												<li className="flex space-x-3">
													<svg
														className="flex-shrink-0 size-4 mt-0.5 text-blue-600"
														xmlns="http://www.w3.org/2000/svg"
														width={24}
														height={24}
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round">
														<polyline points="20 6 9 17 4 12" />
													</svg>
													<span className="text-gray-800">
														繳交作業：繳交作業驗收你的學習成果
													</span>
												</li>
											</ul>
											<div className="flex flex-col gap-3 mt-5">
												<button
													type="button"
													className="py-0.5 px-2 inline-flex items-center justify-center gap-x-2 font-semibold rounded-lg border border-transparent bg-orange-500 text-white hover:bg-orange-400 disabled:opacity-50 disabled:pointer-events-none">
													開始上課
												</button>
												<button
													type="button"
													className="py-0.5 px-2 inline-flex items-center justify-center gap-x-2 font-semibold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none">
													查看訂單
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* End 完成結帳卡片 */}

							{/* Title */}
							<div className="text-center">
								<h1 className="text-center font-semibold text-3xl pt-2">
									類似課程
								</h1>
							</div>
							{/* End Title */}

							{/* 類似課程 */}
							<div className="flex gap-5">
								<a
									className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition"
									href="#">
									<div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
										<img
											className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
											src="https://images.hahow.in/images/6479757650ac16648e1ead96?width=600"
										/>
									</div>
									<div className="p-4 md:p-5">
										<h3 className="text-lg font-bold text-gray-800">
											玩轉 RPA：使用 UiPath 打造專屬小助理
										</h3>
									</div>
								</a>
								<a
									className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition"
									href="#">
									<div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
										<img
											className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
											src="https://images.hahow.in/images/6479757650ac16648e1ead96?width=600"
										/>
									</div>
									<div className="p-4 md:p-5">
										<h3 className="text-lg font-bold text-gray-800">
											玩轉 RPA：使用 UiPath 打造專屬小助理
										</h3>
									</div>
								</a>
								<a
									className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition"
									href="#">
									<div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
										<img
											className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
											src="https://images.hahow.in/images/6479757650ac16648e1ead96?width=600"
										/>
									</div>
									<div className="p-4 md:p-5">
										<h3 className="text-lg font-bold text-gray-800">
											玩轉 RPA：使用 UiPath 打造專屬小助理
										</h3>
									</div>
								</a>
							</div>
							{/* End 類似課程 */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
