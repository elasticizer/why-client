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
							<p className="text-gray-800">
								這門課程總長超過 15
								小時，如果你能夠認真學習完這堂課程所有單元，並扎實的完成課堂作業
							</p>

							<div className="text-gray-800 ">
								你將會：
								<br />
								<ol>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<IoMdCheckmarkCircleOutline className="text-red-600/75" />{' '}
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											掌握介面設計 (UI Design) 與使用者體驗設計 (UX Design)
											的核心知識與觀念。
										</span>
									</li>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<IoMdCheckmarkCircleOutline className="text-red-600/75" />{' '}
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											熟悉業界產品開發、團隊合作流程以及產品(UI/UX)設計師的能力需求與工作細節。
										</span>
									</li>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<IoMdCheckmarkCircleOutline className="text-red-600/75" />{' '}
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											透過 Figma
											做出可供使用者及團隊測試的原型(Prototype)，並且能夠根據反饋調整及改善設計。
										</span>
									</li>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<IoMdCheckmarkCircleOutline className="text-red-600/75" />
										</span>
										<span className=" text-gray-800  text-sm sm:text-base  ">
											學習到如何準備與設計面試與求職作品集，讓自己在其他競爭者中脫穎而出。
										</span>
									</li>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<IoMdCheckmarkCircleOutline className="text-red-600/75" />{' '}
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											建立正確的學習心態與工作觀念，包含在未來的設計和職涯路上都能掌握的原則，幫助你持續自我精進成長。
										</span>
									</li>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<IoMdCheckmarkCircleOutline className="text-red-600/75" />{' '}
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											從概念發想到實際操作，從 0 到 1 完成兩個產品(iOS App & RWD
											網頁)的核心功能設計與原型製作。
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
								這門課程適合所有程度的同學來參與，只要你對 UI/UX
								/產品設計有熱情，不管你是沒有經驗、想轉
								職、或是已經在業界一段時間想要更精進 UI/UX
								設計，都會非常適合來參與這門課程，課程內容將
								由淺入深帶你走過產品設計的每一個環節！
							</p>

							<br />
							<div className="text-gray-800 ">
								這邊我列出以下幾個相對非常適合上這門課的的族群：
								<ol>
									<li className="flex space-x-2">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<FcIdea />
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											你對 UI/UX
											設計完全沒經驗，但對這塊領域充滿好奇與熱情，並且未來想轉職成為UI/UX
											設計師。
										</span>
									</li>
									<li className="flex space-x-2">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<FcIdea />
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											你對 UI/UX
											設計有基本的認識，想要更進一步學習產品設計概念與精進設計工具的操作技巧。
										</span>
									</li>
									<li className="flex space-x-2">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<FcIdea />
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											你是 UX 設計師，想要更精進 UI
											設計能力與美感，讓產出的設計細節更完整，幫助你和 UI /
											視覺設計師的溝通更順暢。
										</span>
									</li>
									<li className="flex space-x-2">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<FcIdea />
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											你已經在在業界工作一段時間，但工作上還是使用其他工具(Photoshop
											/ Sketch / Adobe XD)，未來想轉換到 Figma或想深入了解 Figma
											的操入技巧與協作流程。
										</span>
									</li>
									<li className="flex space-x-2">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<FcIdea />
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											你是使用者研究員、工程師、產品經理，或是團隊任何角色，想要更進一步了解產品設計思維與細節，以及加強與設計師的合作關係。
										</span>
									</li>
									<li className="flex space-x-2">
										<span className="mt-0.5 size-5 flex justify-center items-center ">
											<FcIdea />
										</span>
										<span className=" text-gray-800  text-sm sm:text-base ">
											你是部門的設計主管，想要了解Figma可以如何幫助團隊提高工作效率與合作溝通品質。
										</span>
									</li>
								</ol>
							</div>
						</div>
					</div>
				</div>

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
				</div>
				<br />
			</div>
		</>
	);
}
