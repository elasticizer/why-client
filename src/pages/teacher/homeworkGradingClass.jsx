import Header from '@/components/member/teacher/header';
import Sidebar from '@/components/member/teacher/sidebar';
import Tabbar from '@/components/member/tabbarTeacher';
import Content from '@/components/member/homeworkGradingClass/content';
import { useState } from "react";
import ChapterSelection from "@/components/member/homeworkGradingClass/chapterSelection";
import React from 'react';
import styles from '@/styles/teacher.module.css';

export default function HomeworkGradingClass() {
	const [windowNav, setWindowNav] = useState("hidden");
	return (
		<>
			<div className={`${styles.container}`}>
				{/* header */}
				<Header />
				<h1 className="text-2xl md:text-3xl font-semibold mt-10">作業批改</h1>

				{/* 分類選擇與搜尋 */}
				<div className='mt-10 md:flex justify-start items-center'>
					<span className="text-base md:text-lg text-gray-600	me-5">
						<span className="font-bold text-base md:text-lg">課程：</span>
						前端網站設計入門
					</span>
					<ChapterSelection />
				</div>


				<Content />
			</div>
			<Tabbar setWindowNav={setWindowNav} windowNav={windowNav} />

			{/* SECTION mobileWindowNavbar */}
			<Sidebar WindowNav={windowNav} setWindowNav={setWindowNav} />
		</>
	);
}
