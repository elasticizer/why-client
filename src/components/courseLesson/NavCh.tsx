import React from 'react';
import VideoIframe from '../video';

export default function NavCh() {
	return (
		<>
			<div className=" w-full inline-flex justify-between  items-center space-x-80 ">
				<div className="flex items-center bg-white">
					<div className="  text-neutral-800 text-2xl font-semibold font-['Inter'] leading-loose">
						單元一覽
					</div>

					<div className=" pl-5 text-zinc-600 text-base font-normal font-['Inter'] leading-relaxed">
						共 6 章 60 單元｜總時長 901 分鐘
					</div>
				</div>
				<button
					type="button"
					className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-teal-500 hover:bg-teal-100 hover:text-teal-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-teal-800/30 dark:hover:text-teal-400">
					全部展開
				</button>
			</div>
			<div
				className="hs-accordion-group my-3"
				data-hs-accordion-always-open="">
				<div
					className=" hs-accordion  hs-accordion-active:border active border border-transparent rounded-lg "
					id="hs-active-bordered-heading-two">
					<button
						className="relative bg-orange-200/80 rounded-lg  text-neutral-600 text-lg font-semibold font-['Inter'] leading-7 hs-accordion-toggle hs-accordion-active:border-blue-500 inline-flex justify-between items-center gap-x-3 w-full  text-start  py-4 px-5 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none"
						aria-controls="hs-basic-active-bordered-collapse-two">
						<div className="w-6 h-6  mr-10 absolute bg-orange-400 rounded-xl justify-center items-center inline-flex">
							<div className=" text-white text-sm font-semibold font-['Inter'] leading-snug">
								1
							</div>
						</div>
						<div className=" ml-10">
							{' '}
							CH1-產品設計的核心觀念：UX 設計思維與產品開發流程
						</div>

						<svg
							className="hs-accordion-active:hidden block size-4"
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
						<svg
							className="hs-accordion-active:block hidden size-4"
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round">
							<path d="m18 15-6-6-6 6" />
						</svg>
					</button>
					<div
						id="hs-basic-active-bordered-collapse-two"
						className=" hs-accordion-content w-full overflow-hidden transition-[height] duration-300 justify-start "
						aria-labelledby="hs-active-bordered-heading-two">
						<div className="w-full  hover:bg-gray-300/55  pl-[26.20px] pr-6 pt-[7.50px] pb-2 bg-white justify-center items-start gap-[7.80px] inline-flex">
							<div className="pl-3 text-orange-300 text-base font-semibold font-['Inter'] leading-relaxed">
								01
							</div>
							<div className="w-full text-black/opacity-60 text-base font-normal font-['Inter'] leading-relaxed">
								【2024更新】課前學習手冊：如何最有效的學習此課程
							</div>
							<div className="w-8 self-stretch  inline-flex ">
								<div className=" content-center w-[30.26px] h-[26px] text-right text-neutral-400 text-xs font-normal font-['Inter'] leading-relaxed">
									21:34
								</div>
							</div>
						</div>
						<div className="w-full  hover:bg-gray-300/55  pl-[26.20px] pr-6 pt-[7.50px] pb-2 bg-white justify-center items-start gap-[7.80px] inline-flex">
							<div className="pl-3 text-orange-300 text-base font-semibold font-['Inter'] leading-relaxed">
								02
							</div>
							<div className="w-full text-black/opacity-60 text-base font-normal font-['Inter'] leading-relaxed">
								UI/UX 設計簡介與核心觀念
							</div>
							<div className="w-8 self-stretch  inline-flex ">
								<div className=" content-center w-[30.26px] h-[26px] text-right text-neutral-400 text-xs font-normal font-['Inter'] leading-relaxed">
									10:47
								</div>
							</div>
						</div>
						<div className="w-full  hover:bg-gray-300/55  pl-[26.20px] pr-6 pt-[7.50px] pb-2 bg-white justify-center items-start gap-[7.80px] inline-flex">
							<div className="pl-3 text-orange-300 text-base font-semibold font-['Inter'] leading-relaxed">
								03
							</div>
							<div className="w-full text-black/opacity-60 text-base font-normal font-['Inter'] leading-relaxed">
								熟悉常見的產品開發流程
							</div>
							<div className="w-8 self-stretch  inline-flex ">
								<div className=" content-center w-[30.26px] h-[26px] text-right text-neutral-400 text-xs font-normal font-['Inter'] leading-relaxed">
									12:14
								</div>
							</div>
						</div>
						<div className="w-full  hover:bg-gray-300/55  pl-[26.20px] pr-6 pt-[7.50px] pb-2 bg-white justify-center items-start gap-[7.80px] inline-flex">
							<div className="pl-3 text-orange-300 text-base font-semibold font-['Inter'] leading-relaxed">
								04
							</div>
							<div className="w-full text-black/opacity-60 text-base font-normal font-['Inter'] leading-relaxed">
								產品(UI/UX)設計師需要具備的能力
							</div>
							{/* <button>我要試閱</button> */}
							<div className=" w-40 rounded-sm justify-center inline-flex">
								<button className="py-1 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-100 text-red-600 hover:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-900 dark:text-red-500 dark:hover:text-red-400">
									免費預覽
								</button>

								{/* <button
									type="button"
									className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-100 text-blue-800 hover:bg-blue-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-blue-900 dark:text-blue-400">
									試看單元
								</button> */}
							</div>

							<div className="w-8 self-stretch  inline-flex ">
								<div className=" content-center w-[30.26px] h-[26px] text-right text-neutral-400 text-xs font-normal font-['Inter'] leading-relaxed">
									25:30
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hs-accordion-group my-3">
				<div
					className=" hs-accordion  hs-accordion-active:border active border border-transparent rounded-lg "
					id="hs-active-bordered-heading-two">
					<button
						className="relative bg-orange-200/80 rounded-lg  text-neutral-600 text-lg font-semibold font-['Inter'] leading-7 hs-accordion-toggle hs-accordion-active:border-blue-500 inline-flex justify-between items-center gap-x-3 w-full  text-start  py-4 px-5 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none"
						aria-controls="hs-basic-active-bordered-collapse-two">
						<div className="w-6 h-6  mr-10 absolute bg-orange-400 rounded-xl justify-center items-center inline-flex">
							<div className=" text-white text-sm font-semibold font-['Inter'] leading-snug">
								2
							</div>
						</div>
						<div className=" ml-10"> Figma 快速上手：核心操作基礎</div>

						<svg
							className="hs-accordion-active:hidden block size-4"
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
						<svg
							className="hs-accordion-active:block hidden size-4"
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round">
							<path d="m18 15-6-6-6 6" />
						</svg>
					</button>
					<div
						id="hs-basic-active-bordered-collapse-two"
						className=" hs-accordion-content w-full overflow-hidden transition-[height] duration-300 justify-start "
						aria-labelledby="hs-active-bordered-heading-two">
						<div className="w-full  hover:bg-gray-300/55  pl-[26.20px] pr-6 pt-[7.50px] pb-2 bg-white justify-center items-start gap-[7.80px] inline-flex">
							<div className="pl-3 text-orange-300 text-base font-semibold font-['Inter'] leading-relaxed">
								01
							</div>
							<div className="w-full text-black/opacity-60 text-base font-normal font-['Inter'] leading-relaxed">
								課程概覽：開始第一個 Figma 專案
							</div>
							<div className="w-8 self-stretch  inline-flex ">
								<div className=" content-center w-[30.26px] h-[26px] text-right text-neutral-400 text-xs font-normal font-['Inter'] leading-relaxed">
									14:14
								</div>
							</div>
						</div>
						<div className="w-full  hover:bg-gray-300/55  pl-[26.20px] pr-6 pt-[7.50px] pb-2 bg-white justify-center items-start gap-[7.80px] inline-flex">
							<div className="pl-3 text-orange-300 text-base font-semibold font-['Inter'] leading-relaxed">
								02
							</div>
							<div className="w-full text-black/opacity-60 text-base font-normal font-['Inter'] leading-relaxed">
								熟悉 Figma 工作區域與畫板
							</div>
							<div className="w-8 self-stretch  inline-flex ">
								<div className=" content-center w-[30.26px] h-[26px] text-right text-neutral-400 text-xs font-normal font-['Inter'] leading-relaxed">
									20:17
								</div>
							</div>
						</div>
						<div className="w-full  hover:bg-gray-300/55  pl-[26.20px] pr-6 pt-[7.50px] pb-2 bg-white justify-center items-start gap-[7.80px] inline-flex">
							<div className="pl-3 text-orange-300 text-base font-semibold font-['Inter'] leading-relaxed">
								03
							</div>
							<div className="w-full text-black/opacity-60 text-base font-normal font-['Inter'] leading-relaxed">
								了解框架(Frame)與群組的差別與用法
							</div>
							<div className="w-8 self-stretch  inline-flex ">
								<div className=" content-center w-[30.26px] h-[26px] text-right text-neutral-400 text-xs font-normal font-['Inter'] leading-relaxed">
									09:12
								</div>
							</div>
						</div>
						<div className="w-full  hover:bg-gray-300/55  pl-[26.20px] pr-6 pt-[7.50px] pb-2 bg-white justify-center items-start gap-[7.80px] inline-flex">
							<div className="pl-3 text-orange-300 text-base font-semibold font-['Inter'] leading-relaxed">
								04
							</div>
							<div className="w-full text-black/opacity-60 text-base font-normal font-['Inter'] leading-relaxed">
								了解形狀、布林群組與鋼筆工具
							</div>

							<div className=" w-40 rounded-sm justify-center inline-flex">
								<button className="py-1 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-100 text-red-600 hover:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-900 dark:text-red-500 dark:hover:text-red-400">
									免費預覽
								</button>
							</div>

							<div className="w-8 self-stretch  inline-flex ">
								<div className=" content-center w-[30.26px] h-[26px] text-right text-neutral-400 text-xs font-normal font-['Inter'] leading-relaxed">
									20:37
								</div>
							</div>
						</div>
						<div className="w-full  hover:bg-gray-300/55  pl-[26.20px] pr-6 pt-[7.50px] pb-2 bg-white justify-center items-start gap-[7.80px] inline-flex">
							<div className="pl-3 text-orange-300 text-base font-semibold font-['Inter'] leading-relaxed">
								05
							</div>
							<div className="w-full text-black/opacity-60 text-base font-normal font-['Inter'] leading-relaxed">
								掌握文字的各種設定與操作技巧
							</div>

							<div className=" w-40 rounded-sm justify-center inline-flex">
								<button className="py-1 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-red-100 text-red-600 hover:bg-red-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-red-900 dark:text-red-500 dark:hover:text-red-400">
									免費預覽
								</button>
							</div>

							<div className="w-8 self-stretch  inline-flex ">
								<div className=" content-center w-[30.26px] h-[26px] text-right text-neutral-400 text-xs font-normal font-['Inter'] leading-relaxed">
									06:35
								</div>
							</div>
						</div>
						<div className="w-full  hover:bg-gray-300/55  pl-[26.20px] pr-6 pt-[7.50px] pb-2 bg-white justify-center items-start gap-[7.80px] inline-flex">
							<div className="pl-3 text-orange-300 text-base font-semibold font-['Inter'] leading-relaxed">
								06
							</div>
							<div className="w-full text-black/opacity-60 text-base font-normal font-['Inter'] leading-relaxed">
								快速置入圖片、調整與編輯屬性
							</div>

							<div className="w-8 self-stretch  inline-flex ">
								<div className=" content-center w-[30.26px] h-[26px] text-right text-neutral-400 text-xs font-normal font-['Inter'] leading-relaxed">
									08:06
								</div>
							</div>
						</div>
						<div className="w-full  hover:bg-gray-300/55  pl-[26.20px] pr-6 pt-[7.50px] pb-2 bg-white justify-center items-start gap-[7.80px] inline-flex">
							<div className="pl-3 text-orange-300 text-base font-semibold font-['Inter'] leading-relaxed">
								07
							</div>
							<div className="w-full text-black/opacity-60 text-base font-normal font-['Inter'] leading-relaxed">
								管理顏色樣式與套用各種效果
							</div>

							<div className="w-8 self-stretch  inline-flex ">
								<div className=" content-center w-[30.26px] h-[26px] text-right text-neutral-400 text-xs font-normal font-['Inter'] leading-relaxed">
									09:40
								</div>
							</div>
						</div>
						<div className="w-full  hover:bg-gray-300/55  pl-[26.20px] pr-6 pt-[7.50px] pb-2 bg-white justify-center items-start gap-[7.80px] inline-flex">
							<div className="pl-3 text-orange-300 text-base font-semibold font-['Inter'] leading-relaxed">
								08
							</div>
							<div className="w-full text-black/opacity-60 text-base font-normal font-['Inter'] leading-relaxed">
								不可不知的響應式設計：Constraint 介紹
							</div>

							<div className="w-8 self-stretch  inline-flex ">
								<div className=" content-center w-[30.26px] h-[26px] text-right text-neutral-400 text-xs font-normal font-['Inter'] leading-relaxed">
									05:00
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className=" w-full inline-flex justify-between  items-center space-x-80 ">
				<div className="flex items-center bg-white">
					<div className="  text-neutral-800 text-2xl font-semibold font-['Inter'] leading-loose">
						試看單元
					</div>
				</div>
				<button
					type="button"
					className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-teal-500 hover:bg-teal-100 hover:text-teal-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-teal-800/30 dark:hover:text-teal-400">
					全部展開
				</button>
			</div>

			<div
				data-hs-carousel='{"loadingClasses": "opacity-0"}'
				className="relative">
				<div className="hs-carousel relative overflow-hidden min-h-96 bg-white rounded-lg">
					<div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
						<div className="hs-carousel-slide">
							
							<div className="pl-30 flex justify-start   h-full bg-gray-100 ">
							
								<span className="self-center text-4xl text-gray-800 transition duration-700">
										<VideoIframe />
									</span>
							</div>
						</div>
						<div className="hs-carousel-slide">
							<div className="flex justify-center h-full bg-gray-200 p-6">
								<span className="self-center text-4xl text-gray-800 transition duration-700"></span>
							</div>
						</div>
						<div className="hs-carousel-slide">
							<div className="flex justify-center h-full bg-gray-300 p-6">
								<span className="self-center text-4xl text-gray-800 transition duration-700"></span>
							</div>
						</div>
					</div>
				</div>
				<button
					type="button"
					className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg">
					<span
						className="text-2xl"
						aria-hidden="true">
						<svg
							className="flex-shrink-0 size-5"
							xmlns="http://www.w3.org/2000/svg"
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth={2}
							strokeLinecap="round"
							strokeLinejoin="round">
							<path d="m15 18-6-6 6-6" />
						</svg>
					</span>
					<span className="sr-only">Previous</span>
				</button>
				<button
					type="button"
					className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg">
					<span className="sr-only">Next</span>
					<span
						className="text-2xl"
						aria-hidden="true">
						<svg
							className="flex-shrink-0 size-5"
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
					</span>
				</button>
				<div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
					<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer" />
					<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer" />
					<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer" />
				</div>
			</div>
		</>
	);
}
