import React, { useEffect, useState } from 'react';
import NavIntro from '../intro/NavIntro';
import NavCh from '../chapter/NavCh';
import NavComment from '@/components/Comment/NavComment';
import NavAsk from '@/components/question/NavAsk';
import AccordItem from '@/components/learn/AccordItem';


export default function SecThird() {
	const [course, setCourse] = useState([]);
	useEffect(() => {
		const fetchdata = async () => {
			try {
				const res = await fetch(`/api/coursedetail`);
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				const postdata = await res.json();
				setCourse(postdata);
			} catch (e) {
				console.error(e);
				setCourse([]);
			}
		};
		fetchdata();
	}, []);
	if (course.length === 0) {
		return <div>Loading...</div>;
	}


	return (
		<>
			<div className="mt-[100px] sm:mt-[250px] md:mt-[350px] lg:mt-[550px] xl:mt-[800px]">
				<div className="w-full mx-2 px-0 lg:px-0  ">
					<div className="  lg:grid lg:grid-cols-[650px_minmax(300px,_1fr)_100px] xl:grid-cols-[850px_minmax(300px,_1fr)_100px] gap-x-10 ">
						{/* 左邊 */}
						<div className="mr-2 shadow-lg ">
							<div className=" w-full inline-flex justify-between  items-center  ">
								<div className="flex items-center  ">
									<div className="  text-neutral-800 text-2xl font-semibold font-['Inter'] leading-loose">
										課程資訊
									</div>
								</div>
							</div>
<p className=" text-gray-500 font-['Inter'] leading-7 pt-3 lg:pt-1 mt-2 text-base  dark:text-neutral-400 text-justify ">
									{course[0].Intro}
									
								</p>
							

							<br />
							{/* 手風琴 */}
							{/* <AccordItem /> */}


							<div className=" w-full border-3 shadow-lg lg:sticky lg:z-50 lg:top-[89px] py-0  z-0  ">
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

						<div className=" xl:h-full   ">
							<div className=" sticky top-28   flex flex-col border  border-orange-600 shadow-lg rounded-xl">
								<div className="bg-gray-100 bg-[var(--)] border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5">
								<p className="mt-1 font-bold text-lg text-center text-red-500">~購課好康~</p>
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
											<span className="text-sm sm:text-base text-gray-800 dark:text-neutral-500">
												購課即可領取優惠贈品
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
											<span className="text-sm sm:text-base text-gray-800 dark:text-neutral-500">
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
											<span className="text-sm sm:text-base text-gray-800 dark:text-neutral-500">
												<span className="font-bold">附贈完課證書</span>
											</span>
										</li>
									</ul>
									{/* End List */}
									<a
										href="#"
										type="button"
										className="py-3 px-4 mt-3  w-full  inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
										加入購物車
										<img src='/image/cart.gif' className='size-6 items-centerr'/>
										
									</a>
									{/* <a
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
									</a> */}
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
