import React from 'react';
import NavIntro from '@/components/courseLesson/NavIntro';
import NavCh from './unit/NavCh';
import NavComment from '@/components/courseLesson/NavComment';
import NavAsk from '@/components/courseLesson/NavAsk';
import AccordItem from '@/components/courseLesson/AccordItem';

export default function SecThird() {
	return (
		<>
			<div className="lg:mt-[500px] xl:mt-[700px]">
				<div className="mt-8 w-full mx-2 px-0 lg:px-0 ">
					<div className="  lg:grid lg:grid-cols-[650px_minmax(300px,_1fr)_100px] xl:grid-cols-[850px_minmax(300px,_1fr)_100px] gap-x-10 ">
						{/* 左邊 */}
						<div className="pr-2">
							<div className=" w-full inline-flex justify-between  items-center  ">
								<div className="flex items-center  ">
									<div className="  text-neutral-800 text-2xl font-semibold font-['Inter'] leading-loose">
										課程資訊
									</div>
								</div>
							</div>
							
							<div className="">
								<p className=" text-gray-500 font-['Inter'] leading-7 pt-3 lg:pt-1 mt-2 text-base  dark:text-neutral-400 text-justify ">
									探索
									Figma，這個設計師必備的全能利器！本課程不僅僅是一場學習，更是一場啟發，一場對創意的探索之旅！從
									UI/UX 設計的基礎到進階技巧，我們將帶你徹底掌握設計的精髓。透過
									Figma，你將不再受限於創意的表現，而是能夠將你的想像力轉化為真實的產品體驗。無論你是剛起步還是已經有一定經驗，這個課程都將為你打開新的視野，讓你在
								</p>
								<div
									id="hs-show-hide-collapse-heading"
									className="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300"
									aria-labelledby="hs-show-hide-collapse">
									<p className=" text-gray-500 font-['Inter'] leading-7  lg:pt-0  text-base  dark:text-neutral-400 	">
										設計的道路上更上一層樓！趕快加入我們，成為軟硬實力兼具的產品設計師，並跟上全球最前沿的設計趨勢！
									</p>
								</div>
								<p className="mt-2">
									<button
										type="button"
										className="hs-collapse-toggle inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none"
										id="hs-show-hide-collapse"
										data-hs-collapse="#hs-show-hide-collapse-heading">
										<span className="hs-collapse-open:hidden  border-blue-400">
											查看全部
										</span>
										<span className="hs-collapse-open:block hidden">
											收合內容
										</span>
										<svg
											className="hs-collapse-open:rotate-180 flex-shrink-0 size-4"
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
								</p>
							</div>

							<br />
							{/* 手風琴 */}
							<AccordItem />
							
				
							<div className=" w-full   lg:sticky lg:z-50 lg:top-[69px] py-0  z-0  ">
								<nav
									className=" bg-gray-200 flex space-x-0 "
									aria-label="Tabs"
									role="tablist"
									hs-data-tab-select="#tab-select">
									<button
										type="button"
										className="rounded-x2  hs-tab-active:border-b-blue-600 hs-tab-active:text-blue-600 relative min-w-0 flex-1   first:border-s-0  border-b-[3px] py-4 px-4 text-gray-500 hover:text-gray-700 text-base font-semibold text-center overflow-hidden hover:bg-gray-200 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active"
										id="hs-tab-to-select-item-1"
										data-hs-tab="#hs-tab-to-select-1"
										aria-controls="hs-tab-to-select-1"
										role="tab">
										課程內容
									</button>
									<button
										type="button"
										className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1   first:border-s-0  border-b-[3px] py-4 px-4 text-gray-500 hover:text-gray-700 text-base font-semibold text-center overflow-hidden hover:bg-gray-200 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
										id="hs-tab-to-select-item-2"
										data-hs-tab="#hs-tab-to-select-2"
										aria-controls="hs-tab-to-select-2"
										role="tab">
										單元與試閱
									</button>
									<button
										type="button"
										className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1   first:border-s-0  border-b-[3px] py-4 px-4 text-gray-500 hover:text-gray-700 text-base font-semibold text-center overflow-hidden hover:bg-gray-200 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
										id="hs-tab-to-select-item-3"
										data-hs-tab="#hs-tab-to-select-3"
										aria-controls="hs-tab-to-select-3"
										role="tab">
										評價
									</button>
									<button
										type="button"
										className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1   first:border-s-0  border-b-[3px] py-4 px-4 text-gray-500 hover:text-gray-700 text-base font-semibold text-center overflow-hidden hover:bg-gray-200 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none"
										id="hs-tab-to-select-item-4"
										data-hs-tab="#hs-tab-to-select-4"
										aria-controls="hs-tab-to-select-4"
										role="tab">
										課前問答
									</button>
								</nav>
							</div>

							<div className="mt-3 ">
								<div
									id="hs-tab-to-select-1"
									role="tabpanel"
									aria-labelledby="hs-tab-to-select-item-1">
									<div className=" sm:p-0 ">
										<NavIntro />
									</div>
								</div>
								<div
									id="hs-tab-to-select-2"
									className="hidden"
									role="tabpanel"
									aria-labelledby="hs-tab-to-select-item-2">
									<div className="p-3 sm:p-0 ">
										<NavCh />
									</div>
								</div>
								<div
									id="hs-tab-to-select-3"
									className="hidden"
									role="tabpanel"
									aria-labelledby="hs-tab-to-select-item-3">
									<div className="p-3 sm:p-0">
										<NavComment />
									</div>
								</div>
								<div
									id="hs-tab-to-select-4"
									className="hidden"
									role="tabpanel"
									aria-labelledby="hs-tab-to-select-item-4">
									<div className="p-3 sm:p-0">
										<div className="text-gray-500">
											<NavAsk />
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* 右邊 */}

						<div className=" xl:h-[5000px]   ">
							<div className=" sticky top-28   flex flex-col   border shadow-sm rounded-xl">
								<div className="bg-gray-100 bg-[var(--)] border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5">
									<p className="mt-1 text-base text-gray-800">關於課程</p>
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
										href="#"
										type="button"
										className="py-3 px-4 mt-3    inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
										加入購物車
										<svg
											className="flex-shrink-0 size-4"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round">
											<path d="m5 11 4-7"></path>
											<path d="m19 11-4-7"></path>
											<path d="M2 11h20"></path>
											<path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4"></path>
											<path d="m9 11 1 9"></path>
											<path d="M4.5 15.5h15"></path>
											<path d="m15 11-1 9"></path>
										</svg>
									</a>
									<a
										type="button"
										className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
										立即購買
										<svg
											className="flex-shrink-0 size-4"
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round">
											<path d="M5 12h14"></path>
											<path d="m12 5 7 7-7 7"></path>
										</svg>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
