import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import Hotcard from '../video';

export default function SecTwo() {
	return (
		<>
			<div className="w-full mx-auto px-4 sm:px-6 ">
				{/* Grid */}
				<div className="   grid lg:grid-cols-7 lg:gap-x-6 xl:gap-x-6 ">
					{/* End Col */}
					{/* <div className="lg:col-span-4 mt-10 lg:mt-0 ">
						<img
							className="sm:h-64 lg:h-96 w-full rounded-xl"
							src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80"
							alt="Image Description"
						/>
					</div> */}
					<div className="    sm:py-3 lg:col-span-3">
						<h3 className=" block text-2xl font-bold text-white sm:text-4xl md:text-5xl lg:text-3xl dark:text-white">
							產品設計實戰：用Figma打造絕佳UI/UX
						</h3>
						<p className="pt-3 lg:pt-1 mt-2 text-base text-white dark:text-neutral-400">
							你想要學習
							UI/UX設計嗎？想知道如何打造絕佳產品體驗嗎？一起來學習使用 Figma
							這個火紅全球的介面設計工具
							，跟上全球設計趨勢，成為軟硬實力兼具的產品設計師吧！
						</p>
						{/* <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
							<div className="w-full sm:w-auto">
                                <div className=" text-center">
										<button
											type="button"
											className="d-none py-1 px-4 text-center inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400">
											查看更多
										</button>
									</div>
								</div>
							</div> */}
						{/* Brands */}
						<div className="mt-2 lg:mt-2">
							<ul className="space-y-2 sm:space-y-4">
								<li className="flex space-x-3">
									<a
										href="#"
										className="text-sm sm:text-base text-white">
										<span className="font-bold">by Ms.Hw．why講師</span>
									</a>
								</li>
								<span className="flex">
									<span className="flex space-x-3">
										<span className="flex space-x-3">
											<span className="mt-0.5 size-5 flex justify-center items-center rounded-full text-yellow-400">
												<FaStar />
											</span>
											<span className="mb-5 text-sm sm:text-base text-white">
												5.0 <span>( 168 )</span>
											</span>
										</span>
										<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-0 text-blue-600">
											<MdPeopleAlt />
										</span>
										<span className="text-sm sm:text-base text-white">
											1,990 <span className="font-bold">學員</span>
										</span>
									</span>
								</span>

								<span className="mb-8 text-4xl font-bold tracking-tight text-[#FF782D] ">
									NT$1,800
								</span>

								<div className="flex justify-center  gap-20">
									<a
										type="button"
										href="#"
										className="d-none py-1 px-4 text-center inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400">
										加入收藏
									</a>
									<a
										type="button"
										href="#"
										className="d-none py-1 px-4 text-center inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400">
										立即購買
									</a>
								</div>
							</ul>
						</div>
						{/* End Brands */}
					</div>
					{/* End Col */}
				</div>
				{/* End Grid */}
			</div>
			{/* End Hero */}
		</>
	);
}
