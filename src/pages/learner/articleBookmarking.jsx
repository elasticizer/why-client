import Header from '@/components/member/teacher/header';
import Sidebar from '@/components/member/learner/sidebar';
import Tabbar from '@/components/member/tabbarLearner';
import Content from '@/components/member/articleBookmarking/content';
import ProfileCard from "@/components/member/profileCard";
import Domain from '@/components/member/domain';
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import Search from "@/components/member/search";
import React from 'react';
import styles from '@/styles/teacher.module.css';

export default function ArticleBookmarking() {
	const [windowNav, setWindowNav] = useState("hidden");
	return (
		<>
			<div className={`${styles.container}`}>
				<Header />
				<ProfileCard />

				{/* 分類選擇與搜尋 */}
				<div className='mt-10 hidden md:flex justify-between'>
					<Domain />
					<form action="" className="items-center hidden md:flex ">
						<div className="hover:ring-orange-300 hover:ring-2 flex">
							<input className="h-auto border  shadow-sm 	rounded-none ps-2 " type="text" placeholder='輸入關鍵字' />
							<button className="bg-black	p-2 ps-3 pe-3 h-full"><BsSearch size="20px" color="white" /></button>
						</div>
					</form>
				</div>
				<div className="md:hidden mt-5">
					<Search />
					<Domain />
				</div>

				<h1 className="sm:text-2xl text-xl font-semibold text-center mt-10">
					收藏文章
				</h1>

				<Content />

			</div>
			<Tabbar setWindowNav={setWindowNav} windowNav={windowNav} />

			{/* SECTION mobileWindowNavbar */}
			<Sidebar WindowNav={windowNav} setWindowNav={setWindowNav} />
		</>
	);
}
