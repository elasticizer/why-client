import Header from '@/components/member/learner/header';
import Sidebar from '@/components/member/learner/sidebar';
import Tabbar from '@/components/member/tabbarLearner';
import Content from '@/components/member/uploadHomework/content';
import { useState } from "react";
import React from 'react';
import styles from '@/styles/learner.module.css';


export default function HomeworkGrading() {
	const [windowNav, setWindowNav] = useState("hidden");
	return (
		<>
			<div className={`${styles.container} `}>
				{/* header */}
				<Header />
				<h1 className="text-2xl md:text-3xl font-semibold text-center mt-10">繳交作業</h1>
				<h2 className="sm:text-2xl text-xl font-semibold text-center mt-10">
					完成每次的課程都是對自己的一次認可
				</h2>
				<Content />
			</div>
			<Tabbar setWindowNav={setWindowNav} windowNav={windowNav} />

			{/* SECTION mobileWindowNavbar */}
			<Sidebar WindowNav={windowNav} setWindowNav={setWindowNav} />
		</>
	);
}
