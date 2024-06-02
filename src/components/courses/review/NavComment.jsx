import React from 'react';
import { FaStar } from 'react-icons/fa6';
import ReviewList from './reviewlist';

export default function NavComment() {

	return (
		<>
			{/* 星星評分 */}
			<div className=" px-2 py-2   w-full inline-flex justify-between  items-center space-x-80 ">
				<div className=" text-neutral-800 text-2xl font-semibold font-['Inter'] leading-loose">
					課程評價
				</div>
			</div>
			<div className="mb-5  w-full inline-flex justify-center  items-center space-x-10 ">
				<div className="  w-[150px]">
					<div className=" text-neutral-800 text-[40px] font-semibold font-['Inter'] leading-[46px] flex-col items-center flex gap-2">
						5.0
						<span className="flex  ">
							<FaStar className="  text-[25px]  text-yellow-400 " />
							<FaStar className="  text-[25px]  text-yellow-400 " />
							<FaStar className="  text-[25px]  text-yellow-400 " />
							<FaStar className="  text-[25px]  text-yellow-400 " />
							<FaStar className="  text-[25px]  text-yellow-400 " />
						</span>
						<div className="inline-flex text-zinc-600 text-lg font-semibold font-['Inter']">
							課程總評價
						</div>
					</div>
				</div>

				<div className="  w-[300px]  ">
					<div className="">
						{/* Progress */}
						<div className="flex items-center gap-x-3 whitespace-nowrap">
							5<FaStar className="  text-[20px]  text-yellow-400 " />
							<div
								className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
								role="progressbar"
								aria-valuenow={90}
								aria-valuemin={0}
								aria-valuemax={100}>
								<div
									className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-400 text-xs text-white text-center whitespace-nowrap transition duration-500"
									style={{ width: '90%' }}
								/>
							</div>
							<div className="w-10 text-end">
								<span className="text-sm text-gray-800">90%</span>
							</div>
						</div>

						{/* End Progress */}
						{/* Progress */}
						<div className=" flex items-center gap-x-3 whitespace-nowrap">
							4<FaStar className=" text-[20px]  text-yellow-400 " />
							<div
								className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
								role="progressbar"
								aria-valuenow={6}
								aria-valuemin={0}
								aria-valuemax={100}>
								<div
									className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-400 text-xs text-white text-center whitespace-nowrap transition duration-500"
									style={{ width: '6%' }}
								/>
							</div>
							<div className="w-10 text-end">
								<span className="text-sm text-gray-800">6%</span>
							</div>
						</div>
						{/* End Progress */}
						{/* Progress */}
						<div className="flex items-center gap-x-3 whitespace-nowrap">
							3<FaStar className=" text-[20px]  text-yellow-400 " />
							<div
								className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
								role="progressbar"
								aria-valuenow={3}
								aria-valuemin={0}
								aria-valuemax={100}>
								<div
									className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-400  text-xs text-white text-center whitespace-nowrap transition duration-500"
									style={{ width: '3%' }}
								/>
							</div>
							<div className="w-10 text-end">
								<span className="text-sm text-gray-800">3%</span>
							</div>
						</div>
						{/* End Progress */}
						{/* Progress */}
						<div className="flex items-center gap-x-3 whitespace-nowrap">
							2<FaStar className=" text-[20px]  text-yellow-400 " />
							<div
								className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
								role="progressbar"
								aria-valuenow={1}
								aria-valuemin={0}
								aria-valuemax={100}>
								<div
									className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-400 text-xs text-white text-center whitespace-nowrap transition duration-500"
									style={{ width: '1%' }}
								/>
							</div>
							<div className="w-10 text-end">
								<span className="text-sm text-gray-800">1%</span>
							</div>
						</div>
						{/* End Progress */}
						<div className="flex items-center gap-x-3 whitespace-nowrap">
							1<FaStar className=" text-[20px]  text-yellow-400 " />
							<div
								className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
								role="progressbar"
								aria-valuenow={0}
								aria-valuemin={0}
								aria-valuemax={100}>
								<div
									className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-400 text-xs text-white text-center whitespace-nowrap transition duration-500"
									style={{ width: '0%' }}
								/>
							</div>
							<div className="w-10 text-end">
								<span className="text-sm text-gray-800">0%</span>
							</div>
						</div>
						{/* End Progress */}
					</div>
				</div>
			</div>
			{/* 排序 */}
			<div className="px-2 py-2   w-full inline-flex justify-between  items-center">
				<div className=" text-zinc-600 text-sm font-normal font-['Inter'] leading-snug">
					共 250 則評價
				</div>
				<div className="w-[10rem] ">
					<select
						data-hs-select='{
  "placeholder": "預設排序",
  "toggleTag": "<button type=\"button\"></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 px-3 pe-9 flex text-nowrap w-full cursor-pointer bg-blue-50 border-2 border-blue-600 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400",
  "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-blue-50 border-2 border-blue-600 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
  "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-300 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
  "optionTemplate": "<div class=\"flex justify-between items-center w-full\"><span data-title></span><span class=\"hidden hs-selected:block\"><svg class=\"flex-shrink-0 size-3.5 text-blue-600 dark:text-blue-500\" xmlns=\"http:.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><polyline points=\"20 6 9 17 4 12\"/></svg></span></div>",
  "extraMarkup": "<div class=\"absolute top-1/2 end-3 -translate-y-1/2\"><svg class=\"flex-shrink-0 size-3.5 text-gray-500 dark:text-neutral-500\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"m7 15 5 5 5-5\"/><path d=\"m7 9 5-5 5 5\"/></svg></div>"
}'
						className="hidden">
						<option value="">評價最高</option>
						<option>評價最低</option>
						<option>日期最新</option>
						<option>日期最舊</option>
						<option>按讚最多</option>
					</select>
				</div>
			</div>

			<hr className=" mt-3" />
			<br />

			{/* 留言 */}
			<ReviewList />

		</>
	);
}
