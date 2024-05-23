import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import Hotcard from '../coursevideo/content';

export default function SecTwo() {
	return (
		<>
			<div className="w-full mx-auto px-4 sm:px-6 ">

				<div className="   ">
					<div className="    sm:py-3 lg:col-span-3">
						<h3 className=" block text-2xl font-bold lg:text-white sm:text-4xl md:text-5xl lg:text-3xl dark:text-white">
							產品設計實戰：用Figma打造絕佳UI/UX
						</h3>
						<p className="pt-3 lg:pt-1 mt-2 text-base lg:text-white dark:text-neutral-400">
							你想要學習
							UI/UX設計嗎？想知道如何打造絕佳產品體驗嗎？一起來學習使用 Figma
							這個火紅全球的介面設計工具
							，跟上全球設計趨勢，成為軟硬實力兼具的產品設計師吧！
						</p>
						
						<div className="mt-2 lg:mt-2">
							<ul className="space-y-2 sm:space-y-4">
								<li className="flex space-x-3">
									<a
										href="#"
										className="text-sm sm:text-base lg:text-white">
										<span className="font-bold">by Ms.Hw．why講師</span>
									</a>
								</li>
								<span className="flex">
									<span className="flex space-x-3">
										<span className="flex space-x-3">
											<span className="mt-0.5 size-5 flex justify-center items-center rounded-full text-yellow-400">
												<FaStar />
											</span>
											<span className="mb-5 text-sm sm:text-base lg:text-white">
												5.0 <span>( 168 )</span>
											</span>
										</span>
										<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-0 text-blue-600">
											<MdPeopleAlt />
										</span>
										<span className="text-sm sm:text-base lg:text-white">
											1,990 <span className="font-bold">學員</span>
										</span>
									</span>
								</span>

								<span className="mb-8 text-3xl  lg:text-4xl font-bold tracking-tight text-[#FF782D] ">
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
