import Header from '@/components/member/learner/header';
import Sidebar from '@/components/member/learner/sidebar';
import Tabbar from '@/components/member/tabbarLearner';
import Content from '@/components/member/viewHomework/content';
import { useState } from "react";
import React from 'react';
import styles from '@/styles/teacher.module.css';
import Link from 'next/link';


export default function HomeworkGradingPage() {
	const [windowNav, setWindowNav] = useState("hidden");
	return (
		<>
			<div className={`${styles.container}`}>
				<Header />
				<h1 className="text-2xl md:text-3xl font-semibold mt-10">檢視作業</h1>

				{/* 作業資訊 */}
				<div className='mt-10 flex flex-col justify-start'>
					<div className="flex justify-center">
						<div className="font-bold w-24 text-base md:text-lg">課程名稱：</div>
						<div className="text-base text-gray-600 w-3/5 text-wrap text-justify md:text-lg">
							前端網站設計入門  第六章 - 切版設計
						</div>
					</div>
					<div className="flex justify-center mt-2">
						<div className="font-bold w-24 text-base md:text-lg">作業名稱：</div>
						<div className="text-base text-gray-600 w-3/5 text-wrap text-justify md:text-lg">
							前端網頁切版練習
						</div>
					</div>
					<div className="flex justify-center mt-2">
						<div className="font-bold w-24 text-base md:text-lg">作業狀態：</div>
						<div className="text-base text-gray-600 w-3/5 text-wrap text-justify md:text-lg">
							待批改...
						</div>
					</div>
					<div className="flex justify-center mt-2">
						<div className="font-bold w-24 text-base md:text-lg">老師評語：</div>
						<div className="text-base text-gray-600 w-3/5 text-wrap text-justify md:text-lg">
							這份作業展示了學生對網頁切版的理解和應用。整體而言，學生做得相當出色，展現了良好的設計能力和技術水準。以下是對學生作業的具體評價：
							設計和排版： 學生的網頁設計風格清晰、簡潔，並且有吸引人的視覺效果。排版合理，使得內容易於閱讀和導航，整體佈局也符合响应式設計的要求。
							技術實現： 學生運用 HTML、CSS 和可能的 JavaScript 技術，實現了網頁的响应式設計。學生理解並運用了媒體查詢、彈性佈局等技術，使得網頁能夠在不同設備上良好地適應和顯示。
							使用框架： 學生有意識地選擇使用 CSS 框架來加速開發，這展示了良好的技術選擇和學習能力。然而，建議學生在使用框架時理解其工作原理，以更好地掌握基本的 HTML 和 CSS 技能。
							挑戰和解決方案： 學生在作業中遇到了一些挑戰，例如在不同設備上的測試和排錯，以及某些布局問題。然而，學生展現了解決問題的能力，通過閱讀文檔、搜索解決方案和不斷嘗試，最終克服了這些困難。
							總的來說，這份作業展示了學生優秀的技術能力、設計理解和解決問題的能力。希望學生能夠繼續保持這種積極的學習態度，不斷提升自己在網頁開發領域的技能和水準。
						</div>
					</div>
					<div className="flex justify-center mt-2">
						<div className="font-bold w-24 text-base md:text-lg">列為作品：</div>
						<div className="text-base text-gray-600 w-3/5 text-wrap text-justify md:text-lg">
							<input type="checkbox" className="me-2" />
							<label htmlFor="">選為作品</label>
						</div>
					</div>
				</div>

				<a href="" download>
					<Content />
				</a>

				<div className="mt-20 flex justify-center md:justify-end">
					<Link href="/learner/uploadHomework">
						<button
							className=" ring-1 ring-orange-500 text-orange-500 px-3 py-2 text-sm font-semibold shadow-sm hover:text-orange-300  hover:ring-orange-300 me-5"
						>
							重新上傳
						</button>
					</Link>

					<Link href="/learner/learnerHomework">
						<button
							type="submit"
							className=" bg-orange-400 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300"
						>
							儲存
						</button>
					</Link>

				</div>

			</div>
			<Tabbar setWindowNav={setWindowNav} windowNav={windowNav} />

			{/* SECTION mobileWindowNavbar */}
			<Sidebar WindowNav={windowNav} setWindowNav={setWindowNav} />
		</>
	);
}
