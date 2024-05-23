import React from 'react';
import { FaStar } from 'react-icons/fa6';
import Image from 'next/image';
import { MdThumbUp } from 'react-icons/md';
export default function NavComment() {
	return (
		<>
			{/* 星星評分 */}
			<div className="  w-full inline-flex justify-between  items-center space-x-80 ">
				<div className=" text-neutral-800 text-2xl font-semibold font-['Inter'] leading-loose">
					課程評價
				</div>
			</div>
			<div className="mb-5  w-full inline-flex justify-center  items-center space-x-10 ">
				<div className="  w-[150px] bg-white ">
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

				<div className="  w-[300px] bg-white ">
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
						<div className="flex items-center gap-x-3 whitespace-nowrap">
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
			<div className="w-full inline-flex justify-between  items-center">
				<div className=" text-zinc-600 text-sm font-normal font-['Inter'] leading-snug">
					共 250 則評價
				</div>
				<div className="w-[10rem]">
					<select
						data-hs-select='{
  "placeholder": "預設排序",
  "toggleTag": "<button type=\"button\"></button>",
  "toggleClasses": "hs-select-disabled:pointer-events-none hs-select-disabled:opacity-50 relative py-2 px-3 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400",
  "dropdownClasses": "mt-2 z-50 w-full max-h-72 p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-900 dark:border-neutral-700",
  "optionClasses": "py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-neutral-900 dark:hover:bg-neutral-800 dark:text-neutral-200 dark:focus:bg-neutral-800",
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

			<hr className="mt-3" />
			<br />
			{/* 留言 */}
			<div className=" mb-3 shadow p-5 border w-full   bg-white rounded ">
				<div className=" inline-flex items-center gap-2">
					<div className=" w-12 h-12  bg-white/opacity-0 rounded-3xl shadow border-black/opacity-5 justify-center items-center inline-flex">
						<img
							className="inline-block size-[46px] rounded-full"
							src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
							alt="Image Description"
						/>
					</div>

					<div className="   flex flex-col items-start gap-1">
						<div className="flex gap-3">
							<div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
								Joyce
							</div>
							<div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
								2023-05-03
							</div>
						</div>
						<span className="flex">
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
						</span>
					</div>
				</div>
				<div className="justify-start items-center my-2 ">
					<div className=" text-zinc-600 text-base font-semibold font-['Inter'] leading-relaxed">
						初學者就買下去吧
					</div>
				</div>
				<div className=" justify-center items-center inline-flex">
					<div className="w-full mb-3 text-neutral-500 text-sm font-normal font-['Inter'] leading-relaxed text-justify tracking-wide ">
						這個 Figma
						課程真的是我參加過的最精彩的設計課程之一！每個章節都充滿了實用的技巧和創意的靈感，讓我在學習的過程中得到了巨大的成長。老師非常耐心地解答了我的問題，讓我感受到了他對學生的真誠關懷。現在，我已經可以自信地應對各種設計挑戰，這個課程絕對是我職業生涯中的一個轉折點！從基礎到進階技巧，每一個環節都讓我受益匪淺。老師們的教學方法生動易懂，讓我能夠輕鬆地掌握設計的精髓。現在我已經能夠自信地運用Figma
						創作出令人驚嘆的作品，感謝這個課程讓我在設計之路上更上一層樓！
					</div>
				</div>

				<hr className="w-full  my-3  " />

				<div className="items-center inline-flex gap-2 justify-start w-full">
					<div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
						Ms.Hw
					</div>
					<div className="px-2 py-0.5 rounded-lg text-blue-500 flex text-center border border-blue-500 text-xs font-semibold font-['Inter'] leading-snug">
						授課老師
					</div>
					<div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
						2023-05-05
					</div>
				</div>

				<div className="w-full my-3 text-neutral-500 text-sm font-normal font-['Inter'] leading-relaxed text-justify tracking-wide line-clamp-3">
					感謝你的回饋與支持！
				</div>
				<div className="w-full items-center gap-2 inline-flex">
					<div className="self-stretch rounded-lg border-2 border-green-100 justify-center items-center gap-1 inline-flex">
						<button className="mx-auto px-2 py-2 active:bg-green-100 flex text-center text-teal-500 text-sm font-semibold font-['Inter'] leading-snug">
							<MdThumbUp className="mr-1" />
							有幫助
						</button>
					</div>
					<div className="text-zinc-600 text-sm font-normal font-['Inter'] leading-snug">
						9 人覺得有幫助
					</div>
				</div>
			</div>
			<div className=" mb-3 shadow p-5 border w-full   bg-white rounded ">
				<div className=" inline-flex items-center gap-2">
					<div className=" w-12 h-12  bg-white/opacity-0 rounded-3xl shadow border-black/opacity-5 justify-center items-center inline-flex">
						<img
							className="inline-block size-[46px] rounded-full"
							src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
							alt="Image Description"
						/>
					</div>

					<div className="   flex flex-col items-start gap-1">
						<div className="flex gap-3">
							<div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
								Joyce
							</div>
							<div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
								2023-05-03
							</div>
						</div>
						<span className="flex">
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
						</span>
					</div>
				</div>
				<div className="justify-start items-center my-2 ">
					<div className=" text-zinc-600 text-base font-semibold font-['Inter'] leading-relaxed">
						初學者就買下去吧
					</div>
				</div>
				<div className=" justify-center items-center inline-flex">
					<div className="w-full mb-3 text-neutral-500 text-sm font-normal font-['Inter'] leading-relaxed text-justify tracking-wide ">
						這個 Figma
						課程真的是我參加過的最精彩的設計課程之一！每個章節都充滿了實用的技巧和創意的靈感，讓我在學習的過程中得到了巨大的成長。老師非常耐心地解答了我的問題，讓我感受到了他對學生的真誠關懷。現在，我已經可以自信地應對各種設計挑戰，這個課程絕對是我職業生涯中的一個轉折點！從基礎到進階技巧，每一個環節都讓我受益匪淺。老師們的教學方法生動易懂，讓我能夠輕鬆地掌握設計的精髓。現在我已經能夠自信地運用Figma
						創作出令人驚嘆的作品，感謝這個課程讓我在設計之路上更上一層樓！
					</div>
				</div>

				<hr className="w-full  my-3  " />

				<div className="items-center inline-flex gap-2 justify-start w-full">
					<div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
						Ms.Hw
					</div>
					<div className="px-2 py-0.5 rounded-lg text-blue-500 flex text-center border border-blue-500 text-xs font-semibold font-['Inter'] leading-snug">
						授課老師
					</div>
					<div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
						2023-05-05
					</div>
				</div>

				<div className="w-full my-3 text-neutral-500 text-sm font-normal font-['Inter'] leading-relaxed text-justify tracking-wide line-clamp-3">
					感謝你的回饋與支持！
				</div>
				<div className="w-full items-center gap-2 inline-flex">
					<div className="self-stretch rounded-lg border-2 border-green-100 justify-center items-center gap-1 inline-flex">
						<button className="mx-auto px-2 py-2 active:bg-green-100 flex text-center text-teal-500 text-sm font-semibold font-['Inter'] leading-snug">
							<MdThumbUp className="mr-1" />
							有幫助
						</button>
					</div>
					<div className="text-zinc-600 text-sm font-normal font-['Inter'] leading-snug">
						9 人覺得有幫助
					</div>
				</div>
			</div>
			<div className=" mb-3 shadow p-5 border w-full   bg-white rounded ">
				<div className=" inline-flex items-center gap-2">
					<div className=" w-12 h-12  bg-white/opacity-0 rounded-3xl shadow border-black/opacity-5 justify-center items-center inline-flex">
						<img
							className="inline-block size-[46px] rounded-full"
							src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
							alt="Image Description"
						/>
					</div>

					<div className="   flex flex-col items-start gap-1">
						<div className="flex gap-3">
							<div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
								Joyce
							</div>
							<div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
								2023-05-03
							</div>
						</div>
						<span className="flex">
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
						</span>
					</div>
				</div>
				<div className="justify-start items-center my-2 ">
					<div className=" text-zinc-600 text-base font-semibold font-['Inter'] leading-relaxed">
						初學者就買下去吧
					</div>
				</div>
				<div className=" justify-center items-center inline-flex">
					<div className="w-full mb-3 text-neutral-500 text-sm font-normal font-['Inter'] leading-relaxed text-justify tracking-wide ">
						這個 Figma
						課程真的是我參加過的最精彩的設計課程之一！每個章節都充滿了實用的技巧和創意的靈感，讓我在學習的過程中得到了巨大的成長。老師非常耐心地解答了我的問題，讓我感受到了他對學生的真誠關懷。現在，我已經可以自信地應對各種設計挑戰，這個課程絕對是我職業生涯中的一個轉折點！從基礎到進階技巧，每一個環節都讓我受益匪淺。老師們的教學方法生動易懂，讓我能夠輕鬆地掌握設計的精髓。現在我已經能夠自信地運用Figma
						創作出令人驚嘆的作品，感謝這個課程讓我在設計之路上更上一層樓！
					</div>
				</div>

				<hr className="w-full  my-3  " />

				<div className="items-center inline-flex gap-2 justify-start w-full">
					<div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
						Ms.Hw
					</div>
					<div className="px-2 py-0.5 rounded-lg text-blue-500 flex text-center border border-blue-500 text-xs font-semibold font-['Inter'] leading-snug">
						授課老師
					</div>
					<div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
						2023-05-05
					</div>
				</div>

				<div className="w-full my-3 text-neutral-500 text-sm font-normal font-['Inter'] leading-relaxed text-justify tracking-wide line-clamp-3">
					感謝你的回饋與支持！
				</div>
				<div className="w-full items-center gap-2 inline-flex">
					<div className="self-stretch rounded-lg border-2 border-green-100 justify-center items-center gap-1 inline-flex">
						<button className="mx-auto px-2 py-2 active:bg-green-100 flex text-center text-teal-500 text-sm font-semibold font-['Inter'] leading-snug">
							<MdThumbUp className="mr-1" />
							有幫助
						</button>
					</div>
					<div className="text-zinc-600 text-sm font-normal font-['Inter'] leading-snug">
						9 人覺得有幫助
					</div>
				</div>
			</div>
			<div className=" mb-3 shadow p-5 border w-full   bg-white rounded ">
				<div className=" inline-flex items-center gap-2">
					<div className=" w-12 h-12  bg-white/opacity-0 rounded-3xl shadow border-black/opacity-5 justify-center items-center inline-flex">
						<img
							className="inline-block size-[46px] rounded-full"
							src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
							alt="Image Description"
						/>
					</div>

					<div className="   flex flex-col items-start gap-1">
						<div className="flex gap-3">
							<div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
								Joyce
							</div>
							<div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
								2023-05-03
							</div>
						</div>
						<span className="flex">
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
						</span>
					</div>
				</div>
				<div className="justify-start items-center my-2 ">
					<div className=" text-zinc-600 text-base font-semibold font-['Inter'] leading-relaxed">
						初學者就買下去吧
					</div>
				</div>
				<div className=" justify-center items-center inline-flex">
					<div className="w-full mb-3 text-neutral-500 text-sm font-normal font-['Inter'] leading-relaxed text-justify tracking-wide ">
						這個 Figma
						課程真的是我參加過的最精彩的設計課程之一！每個章節都充滿了實用的技巧和創意的靈感，讓我在學習的過程中得到了巨大的成長。老師非常耐心地解答了我的問題，讓我感受到了他對學生的真誠關懷。現在，我已經可以自信地應對各種設計挑戰，這個課程絕對是我職業生涯中的一個轉折點！從基礎到進階技巧，每一個環節都讓我受益匪淺。老師們的教學方法生動易懂，讓我能夠輕鬆地掌握設計的精髓。現在我已經能夠自信地運用Figma
						創作出令人驚嘆的作品，感謝這個課程讓我在設計之路上更上一層樓！
					</div>
				</div>

				<hr className="w-full  my-3  " />

				<div className="items-center inline-flex gap-2 justify-start w-full">
					<div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
						Ms.Hw
					</div>
					<div className="px-2 py-0.5 rounded-lg text-blue-500 flex text-center border border-blue-500 text-xs font-semibold font-['Inter'] leading-snug">
						授課老師
					</div>
					<div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
						2023-05-05
					</div>
				</div>

				<div className="w-full my-3 text-neutral-500 text-sm font-normal font-['Inter'] leading-relaxed text-justify tracking-wide line-clamp-3">
					感謝你的回饋與支持！
				</div>
				<div className="w-full items-center gap-2 inline-flex">
					<div className="self-stretch rounded-lg border-2 border-green-100 justify-center items-center gap-1 inline-flex">
						<button className="mx-auto px-2 py-2 active:bg-green-100 flex text-center text-teal-500 text-sm font-semibold font-['Inter'] leading-snug">
							<MdThumbUp className="mr-1" />
							有幫助
						</button>
					</div>
					<div className="text-zinc-600 text-sm font-normal font-['Inter'] leading-snug">
						9 人覺得有幫助
					</div>
				</div>
			</div>
			<div className=" mb-3 shadow p-5 border w-full   bg-white rounded ">
				<div className=" inline-flex items-center gap-2">
					<div className=" w-12 h-12  bg-white/opacity-0 rounded-3xl shadow border-black/opacity-5 justify-center items-center inline-flex">
						<img
							className="inline-block size-[46px] rounded-full"
							src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
							alt="Image Description"
						/>
					</div>

					<div className="   flex flex-col items-start gap-1">
						<div className="flex gap-3">
							<div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
								Joyce
							</div>
							<div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
								2023-05-03
							</div>
						</div>
						<span className="flex">
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
						</span>
					</div>
				</div>
				<div className="justify-start items-center my-2 ">
					<div className=" text-zinc-600 text-base font-semibold font-['Inter'] leading-relaxed">
						初學者就買下去吧
					</div>
				</div>
				<div className=" justify-center items-center inline-flex">
					<div className="w-full mb-3 text-neutral-500 text-sm font-normal font-['Inter'] leading-relaxed text-justify tracking-wide ">
						這個 Figma
						課程真的是我參加過的最精彩的設計課程之一！每個章節都充滿了實用的技巧和創意的靈感，讓我在學習的過程中得到了巨大的成長。老師非常耐心地解答了我的問題，讓我感受到了他對學生的真誠關懷。現在，我已經可以自信地應對各種設計挑戰，這個課程絕對是我職業生涯中的一個轉折點！從基礎到進階技巧，每一個環節都讓我受益匪淺。老師們的教學方法生動易懂，讓我能夠輕鬆地掌握設計的精髓。現在我已經能夠自信地運用Figma
						創作出令人驚嘆的作品，感謝這個課程讓我在設計之路上更上一層樓！
					</div>
				</div>

				<hr className="w-full  my-3  " />

				<div className="items-center inline-flex gap-2 justify-start w-full">
					<div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
						Ms.Hw
					</div>
					<div className="px-2 py-0.5 rounded-lg text-blue-500 flex text-center border border-blue-500 text-xs font-semibold font-['Inter'] leading-snug">
						授課老師
					</div>
					<div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
						2023-05-05
					</div>
				</div>

				<div className="w-full my-3 text-neutral-500 text-sm font-normal font-['Inter'] leading-relaxed text-justify tracking-wide line-clamp-3">
					感謝你的回饋與支持！
				</div>
				<div className="w-full items-center gap-2 inline-flex">
					<div className="self-stretch rounded-lg border-2 border-green-100 justify-center items-center gap-1 inline-flex">
						<button className="mx-auto px-2 py-2 active:bg-green-100 flex text-center text-teal-500 text-sm font-semibold font-['Inter'] leading-snug">
							<MdThumbUp className="mr-1" />
							有幫助
						</button>
					</div>
					<div className="text-zinc-600 text-sm font-normal font-['Inter'] leading-snug">
						9 人覺得有幫助
					</div>
				</div>
			</div>
			<div className=" mb-3 shadow p-5 border w-full   bg-white rounded ">
				<div className=" inline-flex items-center gap-2">
					<div className=" w-12 h-12  bg-white/opacity-0 rounded-3xl shadow border-black/opacity-5 justify-center items-center inline-flex">
						<img
							className="inline-block size-[46px] rounded-full"
							src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
							alt="Image Description"
						/>
					</div>

					<div className="   flex flex-col items-start gap-1">
						<div className="flex gap-3">
							<div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
								Joyce
							</div>
							<div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
								2023-05-03
							</div>
						</div>
						<span className="flex">
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
							<FaStar className="  text-[15px]  text-yellow-300 " />
						</span>
					</div>
				</div>
				<div className="justify-start items-center my-2 ">
					<div className=" text-zinc-600 text-base font-semibold font-['Inter'] leading-relaxed">
						初學者就買下去吧
					</div>
				</div>
				<div className=" justify-center items-center inline-flex">
					<div className="w-full mb-3 text-neutral-500 text-sm font-normal font-['Inter'] leading-relaxed text-justify tracking-wide ">
						這個 Figma
						課程真的是我參加過的最精彩的設計課程之一！每個章節都充滿了實用的技巧和創意的靈感，讓我在學習的過程中得到了巨大的成長。老師非常耐心地解答了我的問題，讓我感受到了他對學生的真誠關懷。現在，我已經可以自信地應對各種設計挑戰，這個課程絕對是我職業生涯中的一個轉折點！從基礎到進階技巧，每一個環節都讓我受益匪淺。老師們的教學方法生動易懂，讓我能夠輕鬆地掌握設計的精髓。現在我已經能夠自信地運用Figma
						創作出令人驚嘆的作品，感謝這個課程讓我在設計之路上更上一層樓！
					</div>
				</div>

				<hr className="w-full  my-3  " />

				<div className="items-center inline-flex gap-2 justify-start w-full">
					<div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
						Ms.Hw
					</div>
					<div className="px-2 py-0.5 rounded-lg text-blue-500 flex text-center border border-blue-500 text-xs font-semibold font-['Inter'] leading-snug">
						授課老師
					</div>
					<div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
						2023-05-05
					</div>
				</div>

				<div className="w-full my-3 text-neutral-500 text-sm font-normal font-['Inter'] leading-relaxed text-justify tracking-wide line-clamp-3">
					感謝你的回饋與支持！
				</div>
				<div className="w-full items-center gap-2 inline-flex">
					<div className="self-stretch rounded-lg border-2 border-green-100 justify-center items-center gap-1 inline-flex">
						<button className="mx-auto px-2 py-2 active:bg-green-100 flex text-center text-teal-500 text-sm font-semibold font-['Inter'] leading-snug">
							<MdThumbUp className="mr-1" />
							有幫助
						</button>
					</div>
					<div className="text-zinc-600 text-sm font-normal font-['Inter'] leading-snug">
						9 人覺得有幫助
					</div>
				</div>
			</div>
		</>
	);
}
