import React, { useEffect, useState } from 'react';
import NavIntro from '../navintro/NavIntro';
import NavCh from '../chapter/NavCh';
import NavAskList from '../navAsk/NavAskList';
import AccordItem from '../navAccordItem/AccordItem';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function SecThird() {
	const [course, setCourse] = useState([]);
	useEffect(() => {
		AOS.init();
	}, []);

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

			import('preline/preline').then(module =>
				module.HSStaticMethods.autoInit()
			);
		};
		fetchdata();
	}, []);

	if (course.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className="mt-[180px] sm:mt-[350px] md:mt-[400px] lg:mt-[700px] xl:mt-[800px] 2xl:mt-[1100px]">
				<div className="w-full mx-2 px-0 lg:px-0">
					<div className="lg:grid lg:grid-cols-[650px_minmax(300px,_1fr)_100px] xl:grid-cols-[850px_minmax(300px,_1fr)_100px] gap-x-10">
						{/* 左邊 */}
						<div className="mr-2">
							<div
								data-aos="fade-right"
								data-aos-duration="1000">
								<img
									src="/images/課程資訊.png"
									height={300}
									width={200}
								/>
								<div className=" border-2 shadow-indigo-200/60 shadow-lg rounded-lg px-3">
									<p className="text-gray-500 font-['Inter'] leading-7 pt-3 lg:pt-1 mt-2 text-base dark:text-neutral-400 text-justify">
										{course[0].Intro}
									</p>
								</div>
							</div>
							<br />
							<div
								data-aos="fade-right"
								data-aos-duration="1000">
								<img
									src="/images/課程特色.png"
									height={300}
									width={200}
								/>
								<AccordItem />
							</div>

							<div
								className="mt-5"
								data-aos="fade-right"
								data-aos-duration="1000">
								<img
									src="/images/課程介紹.png"
									height={300}
									width={200}
								/>
								<div className="border-dotted shadow-lg   shadow-indigo-200/60 ">
									<nav
										className=" relative z-0 flex border rounded-tr-xl rounded-tl-xl overflow-hidden"
										aria-label="Tabs"
										role="tablist">
										<button
											type="button"
											className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1   first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500
									hover:text-gray-700 text-lg font-bold text-center overflow-hidden hover:bg-orange-300 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none active focus:bg-orange-300"
											id="bar-with-underline-item-1"
											data-hs-tab="#bar-with-underline-1"
											aria-controls="bar-with-underline-1"
											role="tab">
											課程內容
										</button>
										<button
											type="button"
											className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1   first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-lg font-bold text-center overflow-hidden hover:bg-orange-300 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 focus:bg-orange-300 disabled:pointer-events-none"
											id="bar-with-underline-item-2"
											data-hs-tab="#bar-with-underline-2"
											aria-controls="bar-with-underline-2"
											role="tab">
											單元與觀賞
										</button>
										<button
											type="button"
											className="hs-tab-active:border-b-blue-600 hs-tab-active:text-gray-900 relative min-w-0 flex-1   first:border-s-0 border-s border-b-2 py-4 px-4 text-gray-500 hover:text-gray-700 text-lg font-bold text-center overflow-hidden hover:bg-orange-300 focus:z-10 focus:outline-none focus:text-blue-600 disabled:opacity-50 focus:bg-orange-300 disabled:pointer-events-none"
											id="bar-with-underline-item-3"
											data-hs-tab="#bar-with-underline-3"
											aria-controls="bar-with-underline-3"
											role="tab">
											課程評論
										</button>
									</nav>
									<div className="mt-3">
										<div
											id="bar-with-underline-1"
											role="tabpanel"
											aria-labelledby="bar-with-underline-item-1">
											<NavIntro />
										</div>
										<div
											id="bar-with-underline-2"
											className="hidden"
											role="tabpanel"
											aria-labelledby="bar-with-underline-item-2">
											<NavCh />
										</div>
										<div
											id="bar-with-underline-3"
											className="hidden"
											role="tabpanel"
											aria-labelledby="bar-with-underline-item-3">
											<div className="text-gray-500">
												<NavAskList />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						{/* 右邊 */}
						<div className="xl:h-full">
							<div
								data-aos="fade-down"
								className="sticky top-28 flex flex-col  shadow-indigo-200/60 shadow-lg rounded-xl">
								<div className="bg-orange-300 border-b rounded-t-xl py-3 px-4 md:py-4 md:px-5">
									<p className="mt-1 font-bold text-lg text-center">
										~購課好康~
									</p>
								</div>
								<div className="p-4 md:p-5">
									<ul className="space-y-2 sm:space-y-4">
										<li className="flex space-x-3">
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
											<span className="text-sm sm:text-base text-gray-800 dark:text-neutral-500 font-bold">
												購課即贈求職工具包
											</span>
										</li>
										<li className="flex space-x-3">
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
											<span className="text-sm sm:text-base text-gray-800 dark:text-neutral-500 font-bold">
												不限觀看次數，終身存取權
											</span>
										</li>
										<li className="flex space-x-3">
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
											<span className="text-sm sm:text-base text-gray-800 dark:text-neutral-500">
												<span className="font-bold">附贈完課證書</span>
											</span>
										</li>
										<li className="flex space-x-3">
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
											<span className="text-sm sm:text-base text-gray-800 dark:text-neutral-500">
												<span className="font-bold">職場專家指導求職策略</span>
											</span>
										</li>
										<li className="flex space-x-3">
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
											<span className="text-sm sm:text-base text-gray-800 dark:text-neutral-500">
												<span className="font-bold">獲得獨家市場就業動態</span>
											</span>
										</li>
									</ul>
									{/* End List */}
									<div className="my-5 text-2xl font-bold tracking-tight text-center  text-[#019fde]">
										單堂課：
										<span className="text-red-500">NT${course[0].Price}</span>
									</div>
									<a
										href="#"
										type="button"
										className="py-3 px-4 mt-3 w-full inline-flex items-center justify-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
										<img
											src="/images/cart.gif"
											className="size-6 items-centerr"
											width={200}
											height={120}
											alt="Cart"
										/>
										立即購買
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
