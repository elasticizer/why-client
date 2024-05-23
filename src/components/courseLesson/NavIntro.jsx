import React, { useState } from 'react';

export function TestIntro() {
	const [expanded, setExpanded] = useState(false);

	const toggleContent = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="content">
			<div className={expanded ? 'hidden' : 'block'}>
				這裡是部分內容...部分內容... 部分內容... 部分內容... 部分內容...
				部分內容... 部分內容...
			</div>
			<p className={expanded ? 'block' : 'hidden'}>
				這裡是部分內容...部分內容... 部分內容... 部分內容... 部分內容...
				部分內容... 部分內容...這裡是全部內容...
			</p>

			<button
				onClick={toggleContent}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				{expanded ? '收起內容' : '全部展開'}
			</button>
		</div>
	);
}

export default function NavIntro() {
	return (
		<>
			<div className=" bg-white p-5">
				<div className=" pl-5 mb-6 left-0 top-[18px]  border-l-4 border-amber-500 justify-start items-center inline-flex">
					<div className=" text-black text-opacity-90 text-lg font-semibold font-['Inter'] leading-loose">
						產品設計實戰：用 Figma 打造絕佳 UI/UX 產品體驗
					</div>
				</div>
				<div className="w-full  text-black text-opacity-60 text-base font-semibold font-['Inter'] leading-7 text-justify">
					你想要學習 UI/UX
					設計嗎？想知道如何打造好看又好用的產品嗎？一起來學習使用 Figma 這個火紅全球的介面設計工具，並學習將
					UX設計思維帶入你的設計中，做出令人驚艷的設計作品吧！這門課程中，你將會掌握扎實的
					UI 設計技巧與 UX 設計思維，並建立正確的設計觀念與學習心態。
				</div>
				<img
					className="my-5 rounded-[15px]"
					src="/img/courseIntro.jpg"
				/>

				<div className="pl-5 my-6 left-0 top-[18px]  border-l-4 border-amber-500 justify-start items-center inline-flex">
					<div className=" text-black text-opacity-90 text-lg font-semibold font-['Inter'] leading-loose">
						產品設計實戰：用 Figma 打造絕佳 UI/UX 產品體驗
					</div>
				</div>
				<div className="w-full nt-3 text-black text-opacity-60 text-base font-semibold font-['Inter'] leading-7 text-justify">
					這門課程中，你將會掌握扎實的 UI 設計技巧與 UX
					設計思維，並建立正確的設計觀念與學習心態。
					並且，透過課程中的作業練習與專案實作，你將會累積理論與實務兼具的的設計經驗，加上課程結束後的持續練習，你將有機會成為軟硬實力兼具的產品
					(UX/UI) 設計師，拿到進入業界的第一把鑰匙！
				</div>
				<img
					className="my-5 rounded-[15px]"
					src="/img/courseIntro01.jpg"
				/>

				<div className="pl-5 my-6 left-0 top-[18px]  border-l-4 border-amber-500 justify-start items-center inline-flex">
					<div className=" text-black text-opacity-90 text-lg font-semibold font-['Inter'] leading-loose">
						想要設計出一個好看又好用的產品，需要有成熟的 UX 設計思維以及靈活的
						UI 設計方法來達成
					</div>
				</div>
				<div className="w-full nt-3 text-black text-opacity-60 text-base font-semibold font-['Inter'] leading-7 text-justify">
					身為一名產品 (UI/UX)
					設計師，我們常常會需要去解決複雜且抽象的問題。要能夠將從使用者研究或數據中得到的洞察轉換成真實的設計解法，往往需要大量的設計經驗、對產品的知識、對使用者的理解才能達成。並且，透過課程中的作業練習與專案實作，而熟悉介面工具的使用以及
					UX/UI 設計方法是幫助我們通往解決方法道路的第一步。
					<blockquote className="text-center p-4 sm:px-7"></blockquote>
					在數位產品設計的世界裡，常常是需要團隊合作的，我們需要清楚知道用什麼樣的介面設計模式來解決什麼樣的問題、如何有效的向團隊溝通你的解決方案，而這堂課程就是要帶你掌握產品
					(UI/UX) 設計師所需要具備的軟硬知識！
					<br />
					<blockquote className="text-center p-4 sm:px-7"></blockquote>
					你將會累積理論與實務兼具的的設計經驗，加上課程結束後的持續練習，你將有機會成為軟硬實力兼具的產品
					(UX/UI) 設計師，拿到進入業界的第一把鑰匙！
				</div>
				<img
					className="my-5 rounded-[15px]"
					src="/img/courseIntro02.jpg"
				/>
			</div>
		</>
	);
}
