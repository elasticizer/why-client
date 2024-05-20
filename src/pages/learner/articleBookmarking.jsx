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
	const [domain, setDomain] = useState("");
	return (
		<>
			<div className={`${styles.container}`}>
				<Header />
				<ProfileCard />

				{/* 分類選擇與搜尋 */}
				<div className='mt-10 hidden md:flex justify-between'>
					<Domain setDomain={setDomain} />
					<div className="flex items-center md:flex ">
						<Search />
					</div>
				</div>
				<div className="md:hidden mt-5">
					<Search />
					<Domain setDomain={setDomain} />
				</div>

				<h1 className="sm:text-2xl text-xl font-semibold text-center mt-10">
					收藏文章
				</h1>

				<Content domain={domain} />

			</div>
			<Tabbar setWindowNav={setWindowNav} windowNav={windowNav} />

			{/* SECTION mobileWindowNavbar */}
			<Sidebar WindowNav={windowNav} setWindowNav={setWindowNav} />
		</>
	);
}
