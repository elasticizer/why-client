import React from 'react'
import { FcIdea } from 'react-icons/fc';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaPencil } from 'react-icons/fa6';


export default function AccordItem() {
	

	return (
		<>
			<div
				className="hs-accordion-group "
				data-hs-accordion-always-open="">
				<div
					className=" bg-blue-200  hs-accordion  hs-accordion-active:shadow-gray-500 active border border-transparent rounded-lg mb-1"
					id="hs-active-bordered-heading-two">
					<button
						className="text-neutral-800 text-lg font-semibold font-['Inter'] leading-7 hs-accordion-toggle  inline-flex justify-between items-center gap-x-3 w-full  text-start  py-4 px-5 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none"
						aria-controls="hs-basic-active-bordered-collapse-two">
						你可以學到
						<svg
							className="hs-accordion-active:hidden block size-5"
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
							className="hs-accordion-active:block hidden size-5"
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
						className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
						aria-labelledby="hs-active-bordered-heading-two">
					<div className="pb-4 px-5">
						<div className="text-gray-800 ">
							
								<ol>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<IoMdCheckmarkCircleOutline className="text-red-600/75" />{' '}
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											了解職涯選擇三步驟，認識職業生涯規劃三元素——價值、興趣、能力
										</span>
									</li>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<IoMdCheckmarkCircleOutline className="text-red-600/75" />{' '}
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											了解「選工作、轉職評估、斜槓副業」三大實務職涯問題的評估步驟
										</span>
									</li>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<IoMdCheckmarkCircleOutline className="text-red-600/75" />{' '}
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											有方向地檢視目前的職涯內容是否適合自己
										</span>
									</li>
									
								</ol>
							</div>
						</div>
					</div>
				</div>

				<div
					className=" bg-blue-200 hs-accordion hs-accordion-active:shadow-gray-500 border border-transparent rounded-xl mb-1"
					id="hs-active-bordered-heading-one">
					<button
						className="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full  text-lg font-semibold font-['Inter'] leading-7 text-start text-neutral-800 py-4 px-5 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none"
						aria-controls="hs-basic-active-bordered-collapse-one">
						哪些人適合這堂課？
						<svg
							className="hs-accordion-active:hidden block size-5"
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
							className="hs-accordion-active:block hidden size-5"
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
						id="hs-basic-active-bordered-collapse-one"
						className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
						aria-labelledby="hs-active-bordered-heading-one">
						<div className="pb-4 px-5 ">
							<p className="text-gray-800 text-sm">
								這門課程適合所有程度的同學來參與，不管你是沒有經驗、想轉
								職、或是已經在業界一段時間想要更精進，都會非常適合來參與這門課程，課程內容將由淺入深帶你走過每一個環節！
							</p>

							<br />
							<h3 className="text-lg font-bold">請注意!</h3>
							<p className="text-gray-800 text-sm">
								課程並非提供你客製化的職涯諮詢，如果你想要獲得更深入的職涯諮詢服務，可以參考「人生設計心理諮商所」官網的服務內容。
							</p>
							<div className="text-gray-800 ">
								這邊我列出以下幾個相對非常適合上這門課的的族群：
								<ol>
									<li className="flex space-x-2">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<FcIdea />
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											在職者：想掙脫目前遇到的職涯困境，想要尋求方向指引
										</span>
									</li>
									<li className="flex space-x-2">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<FcIdea />
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											教學人員／職涯諮詢師：想要尋找合適的工具與學生進行互動，共同探索人生職涯方向。
										</span>
									</li>
									<li className="flex space-x-2">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<FcIdea />
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											學生／求職者：嘗試過各種職涯探索工具，但對於未來要從事的職業仍沒有方向

										</span>
									</li>
								
								</ol>
							</div>
						</div>
					</div>
				</div>
{/* 
				<div
					className=" bg-blue-200 hs-accordion hs-accordion-active:shadow-gray-500  border border-transparent rounded-xl"
					id="hs-active-bordered-heading-three">
					<button
						className=" text-neutral-800 text-lg font-semibold font-['Inter'] leading-7 hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full  text-start  py-4 px-5 hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none"
						aria-controls="hs-basic-active-bordered-collapse-three">
						上課前準備
						<svg
							className="hs-accordion-active:hidden block size-5"
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
							className="hs-accordion-active:block hidden size-5"
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
						id="hs-basic-active-bordered-collapse-three"
						className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
						aria-labelledby="hs-active-bordered-heading-three">
						<div className="pb-4 px-5">
							<p className="text-gray-800">
								<strong>需要準備的工具 / 軟體</strong>{' '}
								（若購買課程前不清楚版本是否支援，請先留言與老師確認。）
							</p>
							<div className="text-gray-800 ">
								<ol>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<FaPencil className="text-green-400" />{' '}
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											只需要一台可以上網並且可以打開瀏覽器的電腦，不限作業系統。(沒錯，就只有這樣！)
										</span>
									</li>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<FaPencil className="text-green-400" />{' '}
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											老師會使用 MacOS 作業系統教學，但使用 Windows
											的同學也不用擔心，會在講義中附上快捷鍵對應表。
										</span>
									</li>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<FaPencil className="text-green-400" />{' '}
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											(非必要)
											準備紙筆或筆記本，可以隨時記錄產品設計上的想法與靈感。
										</span>
									</li>
								</ol>
							</div>
							<p className="text-gray-800">
								<strong>需要具備的背景知識</strong>{' '}
							</p>
							<div className="text-gray-800 ">
								<ol>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<FaPencil className="text-green-400" />{' '}
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											學習這門課程不需要有特別先備知識，但建議先閱讀一些設計的相關文章對於
											UI/ UX 設計概念有個輪廓即可。歡迎到 AAPD 的 Medium
											閱讀相關文章：https://medium.com/as-a-product-designer
										</span>
									</li>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<FaPencil className="text-green-400" />{' '}
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											有設計軟體相關經驗的同學會更好的上手這堂課程所教授的操作，不過沒經驗的同學也完全不用擔心，課程中我會將整個操作的細節與技巧講解得非常清楚。
										</span>
									</li>
								</ol>
							</div>
						</div>
					</div>
				</div> */}
				<br />
			</div>
		</>
	);
}
