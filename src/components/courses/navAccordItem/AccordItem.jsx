import React, { useState, useEffect } from 'react';
import { FcIdea } from 'react-icons/fc';
import { IoMdCheckmarkCircleOutline } from 'react-icons/io';
import { FaPencil } from 'react-icons/fa6';

export default function AccordItem() {


	return (
		<div className="hs-accordion-group border-dotted shadow-lg border-2 border-orange-500 shadow-indigo-200/60 rounded-lg px-3">
			<div className="hs-accordion active  shadow-indigo-200/60 mb-1  border-gray-300 border-b-2" id="hs-basic-with-title-and-arrow-stretched-heading-one">
				<button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg text-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
					你可以學到
					<svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
						<path d="m6 9 6 6 6-6" />
					</svg>
					<svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
						<path d="m18 15-6-6-6 6" />
					</svg>
				</button>
				<div id="hs-basic-with-title-and-arrow-stretched-collapse-one" className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
					<div className="text-gray-800">
						<ol>
							<li className="flex space-x-3">
								<span className="mt-0.5 size-5 flex justify-center items-center">
									<IoMdCheckmarkCircleOutline className="text-red-600/75" />{' '}
								</span>
								<span className="text-gray-800 text-sm sm:text-base">
									了解職涯選擇三步驟，認識職業生涯規劃三元素——價值、興趣、能力
								</span>
							</li>
							<li className="flex space-x-3">
								<span className="mt-0.5 size-5 flex justify-center items-center">
									<IoMdCheckmarkCircleOutline className="text-red-600/75" />{' '}
								</span>
								<span className="text-gray-800 text-sm sm:text-base">
									了解「選工作、轉職評估、斜槓副業」三大實務職涯問題的評估步驟
								</span>
							</li>
							<li className="flex space-x-3">
								<span className="mt-0.5 size-5 flex justify-center items-center">
									<IoMdCheckmarkCircleOutline className="text-red-600/75" />{' '}
								</span>
								<span className="text-gray-800 text-sm sm:text-base">
									有方向地檢視目前的職涯內容是否適合自己
								</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
			<div className="hs-accordion  border-gray-300 border-b-2" id="hs-basic-with-title-and-arrow-stretched-heading-two">
				<button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg text-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two">
					哪些人適合這堂課？
					<svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
						<path d="m6 9 6 6 6-6" />
					</svg>
					<svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
						<path d="m18 15-6-6-6 6" />
					</svg>
				</button>
				<div id="hs-basic-with-title-and-arrow-stretched-collapse-two" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two">
					<div className="text-gray-800">
						<p className="text-gray-800 text-sm">
							這門課程適合所有程度的同學來參與，不管你是沒有經驗、想轉職、或是已經在業界一段時間想要更精進，都會非常適合來參與這門課程，課程內容將由淺入深帶你走過每一個環節！
						</p>
						<br />
						<h3 className="text-lg font-bold">請注意!</h3>
						<p className="text-gray-800 text-sm">
							課程並非提供你客製化的職涯諮詢，如果你想要獲得更深入的職涯諮詢服務，可以參考「人生設計心理諮商所」官網的服務內容。
						</p>
						<div className="text-gray-800">
							這邊我列出以下幾個相對非常適合上這門課的的族群：
							<ol>
								<li className="flex space-x-2">
									<span className="mt-0.5 size-5 flex justify-center items-center">
										<FcIdea />
									</span>
									<span className="text-gray-800 text-sm sm:text-base">
										在職者：想掙脫目前遇到的職涯困境，想要尋求方向指引
									</span>
								</li>
								<li className="flex space-x-2">
									<span className="mt-0.5 size-5 flex justify-center items-center">
										<FcIdea />
									</span>
									<span className="text-gray-800 text-sm sm:text-base">
										教學人員／職涯諮詢師：想要尋找合適的工具與學生進行互動，共同探索人生職涯方向。
									</span>
								</li>
								<li className="flex space-x-2">
									<span className="mt-0.5 size-5 flex justify-center items-center">
										<FcIdea />
									</span>
									<span className="text-gray-800 text-sm sm:text-base">
										學生／求職者：嘗試過各種職涯探索工具，但對於未來要從事的職業仍沒有方向
									</span>
								</li>
							</ol>
						</div>
					</div>
				</div>
			</div>
			<div className="hs-accordion" id="hs-basic-with-title-and-arrow-stretched-heading-three ">
				<button className="hs-accordion-toggle hs-accordion-active:text-blue-600 py-3 inline-flex items-center justify-between gap-x-3 w-full font-semibold text-start text-gray-800 hover:text-gray-500 rounded-lg text-lg disabled:opacity-50 disabled:pointer-events-none" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three  ">
					上課前準備
					<svg className="hs-accordion-active:hidden block size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
						<path d="m6 9 6 6 6-6" />
					</svg>
					<svg className="hs-accordion-active:block hidden size-4" xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
						<path d="m18 15-6-6-6 6" />
					</svg>
				</button>
				<div id="hs-basic-with-title-and-arrow-stretched-collapse-three" className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three">
					<div className="text-gray-800">
						<strong>自我認識及技能盤點</strong>

					</div>
					<div className="text-gray-800">
						<ol>
							<li className="flex space-x-3">
								<span className="mt-0.5 size-5 flex justify-center items-center">
									<FaPencil className="text-green-400" />
								</span>
								<span className="text-gray-800 text-sm sm:text-base">
									評估自己的優勢、劣勢、興趣和職業目標。
								</span>
							</li>
							<li className="flex space-x-3">
								<span className="mt-0.5 size-5 flex justify-center items-center">
									<FaPencil className="text-green-400" />
								</span>
								<span className="text-gray-800 text-sm sm:text-base">
									列出自己具備的技能，並區分技術技能和軟技能。
								</span>
							</li>
							<li className="flex space-x-3">
								<span className="mt-0.5 size-5 flex justify-center items-center">
									<FaPencil className="text-green-400" />
								</span>
								<span className="text-gray-800 text-sm sm:text-base">
									建立積極的求職心態，面對潛在的拒絕和挑戰
								</span>
							</li>
						</ol>
					</div>
					<p className="text-gray-800">
						<strong>需要具備的背景知識</strong>
					</p>
					<div className="text-gray-800">
						<ol>
							<li className="flex space-x-3">
								<span className="mt-0.5 size-5 flex justify-center items-center">
									<FaPencil className="text-green-400" />
								</span>
								<span className="text-gray-800 text-sm sm:text-base">
									瞭解職業生涯規劃的基本概念，包括如何設置職業目標和制定行動計劃
								</span>
							</li>
							<li className="flex space-x-3">
								<span className="mt-0.5 size-5 flex justify-center items-center">
									<FaPencil className="text-green-400" />
								</span>
								<span className="text-gray-800 text-sm sm:text-base">
									熟悉常用的求職網站和LinkedIn等職業社交平台，學會如何使用這些工具進行求職
								</span>
							</li>
						</ol>
					</div>
				</div>
			</div>
		</div>



	);
}
