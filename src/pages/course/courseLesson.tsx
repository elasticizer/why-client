/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import SecTwo from '@/components/courseLesson/SecTwo';
import SecThird from '@/components/courseLesson/SecThird';
import Hotcard from '@/components/video';
import Navbar from '@/components/Navbar/navbar';

export default function Course() {
	return (
		<>
			<div className=" bg-[#FFFCF9]">
				
				<Navbar />
				<div className="relative  w-full ">
					<div className="w-full absolute top-200 left-300 -z-1 backdrop-blur-sm">
						<Hotcard />
					</div>
					<div className="w-full absolute top-200 left-500 -z-1">
						<SecTwo />
					</div>
				</div>

				{/* <div className="w-20 h-600 left-0 text-sm border border-y-red-300 bg-green-400 z-50 sticky top-20 ">
					找不到喜歡的課程嗎: 來看看其他領域吧~
				</div> */}
				<div className="container">
					{/* <Video /> */}
					{/* Sec1-麵包屑 */}
					<div>
						<div className="mx-auto mb-3 mt-3  lg:mb-6 lg:mt-6">
							<ol className=" flex items-center whitespace-nowrap">
								<li className=" pl-4 lg:pl-0 inline-flex items-center">
									<a
										className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
										href="#">
										全部領域
									</a>
									<svg
										className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400"
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
								</li>
								<li className="inline-flex items-center">
									<a
										className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
										href="#">
										設計
										<svg
											className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400"
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
									</a>
								</li>
								<li
									className="inline-flex items-center text-sm font-semibold text-gray-800 truncate"
									aria-current="page">
									網頁設計
								</li>
							</ol>
						</div>
					</div>
					{/* sec2 */}
					<div className="z-20">
						<SecTwo />
					</div>
					{/* sec3 */}
					<SecThird />
					{/* sec4 */}

					{/* 不顯示區域 */}
					<div className=" container ">
						<div className="max-w-[75rem] mx-auto px-4 sm:px-6 lg: ">
							<div className=" lg:hidden   flex flex-col bg-white border shadow-sm rounded-xl">
								<div className="bg-gray-100 bg-[var(--)] border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5">
									<p className="mt-1 text-sm text-gray-500">關於課程</p>
								</div>
								<div className="p-4 md:p-5">
									<ul className="space-y-2 sm:space-y-4">
										<li className="flex space-x-3">
											{/* Solid Check */}
											<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
												<svg
													className="flex-shrink-0 size-3.5"
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
											</span>
											{/* End Solid Check */}
											<span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
												課程教學影片時長
												<span className="font-bold">15 時 1 分鐘</span>
											</span>
										</li>
										<li className="flex space-x-3">
											{/* Solid Check */}
											<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
												<svg
													className="flex-shrink-0 size-3.5"
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
											</span>
											{/* End Solid Check */}
											<span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
												單元數共 6 章節 60 單元
											</span>
										</li>
										<li className="flex space-x-3">
											{/* Solid Check */}
											<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
												<svg
													className="flex-shrink-0 size-3.5"
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
											</span>
											{/* End Solid Check */}
											<span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
												5 份編碼練習作業
											</span>
										</li>
										<li className="flex space-x-3">
											{/* Solid Check */}
											<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
												<svg
													className="flex-shrink-0 size-3.5"
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
											</span>
											{/* End Solid Check */}
											<span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
												不限觀看次數，{' '}
												<span className="font-bold">終身存取權 </span>
											</span>
										</li>
										<li className="flex space-x-3">
											{/* Solid Check */}
											<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
												<svg
													className="flex-shrink-0 size-3.5"
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
											</span>
											{/* End Solid Check */}
											<span className="text-sm sm:text-base text-gray-500 dark:text-neutral-500">
												<span className="font-bold">附贈完課證書</span>
											</span>
										</li>
									</ul>
									{/* End List */}

									<a
										className="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
										href="#">
										Card link
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
									</a>
								</div>
							</div>
							<div className="  grid lg:grid-cols-[815px_minmax(300px,_1fr)_100px] lg:gap-x-4 xl:gap-x-4 lg:">
								<div className="sm:order-2 lg:order-none  ">
									<select
										id="tab-select"
										className=" sm:hidden sticky top-0 py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
										aria-label="Tabs">
										<option
											className=""
											value="#hs-tab-to-select-1">
											課程內容
										</option>
										<option value="#hs-tab-to-select-2">單元與試閱</option>
										<option value="#hs-tab-to-select-3">評價</option>
										<option value="#hs-tab-to-select-4">課前問答</option>
									</select>
								</div>
							</div>
						</div>
					</div>
					{/* sec4 */}
					<div className="container"></div>
					{/* sec5 */}
					<div className="container"></div>
				</div>
			</div>
		</>
	);
}
