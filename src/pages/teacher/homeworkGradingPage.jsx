import Header from '@/components/member/teacher/header';
import Sidebar from '@/components/member/teacher/sidebar';
import Tabbar from '@/components/member/tabbarTeacher';
import Content from '@/components/member/homeworkGradingPage/content';
import { useState } from "react";
import Quill from "@/components/member/uploadCourse/Quill";
import React from 'react';
import styles from '@/styles/teacher.module.css';

export default function HomeworkGradingPage() {
	const [windowNav, setWindowNav] = useState("hidden");
	return (
		<>
			<div className={`${styles.container} `}>
				{/* header */}
				<Header />
				<h1 className="text-2xl md:text-3xl font-semibold mt-10">作業批改</h1>

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
						<div className="font-bold w-24 text-base md:text-lg">學生：</div>
						<div className="text-base text-gray-600 w-3/5 text-wrap text-justify md:text-lg">
							Jackall
						</div>
					</div>
				</div>


				<Content />
				{/* SECTION 作業評語 */}
				<form>
					<div className="col-span-full mt-10">
						<label
							htmlFor="courseDescription"
							className="block text-base font-bold leading-6 text-gray-900 md:text-lg"
						>
							老師評語
						</label>
						<div className="mt-2">
							<Quill />
						</div>
						<p className="mt-1 text-xs leading-6 text-gray-400">
							輸入說明至少達200字元以上</p>
					</div>
					<div className="mt-20 md:mt-30 flex justify-center md:justify-end">
						<button
							type="submit"
							className=" bg-orange-400 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
						>
							送出
						</button>
					</div>

				</form>

			</div>
			<Tabbar setWindowNav={setWindowNav} windowNav={windowNav} />

			{/* SECTION mobileWindowNavbar */}
			<Sidebar WindowNav={windowNav} setWindowNav={setWindowNav} />
		</>
	);
}
