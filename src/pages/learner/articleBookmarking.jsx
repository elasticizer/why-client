import Header from '@/components/member/learner/header';
import Sidebar from '@/components/member/learner/sidebar';
import Tabbar from '@/components/member/tabbarLearner';
import Content from '@/components/member/articleBookmarking/content';
import ProfileCard from "@/components/member/profileCard";
import Domain from '@/components/member/domain';
import { useState } from "react";
import Search from "@/components/member/search";
import React from 'react';
import styles from '@/styles/teacher.module.css';

export default function ArticleBookmarking() {
	const [windowNav, setWindowNav] = useState("hidden");
	const [domain, setDomain] = useState("");
	const [search, setSearch] = useState("");
	return (
		<>
			<div className={`${styles.container}`}>
				<Header />
				<ProfileCard />

				{/* 分類選擇與搜尋 */}
				<div className='mt-10 hidden md:flex justify-between'>
					<Domain setDomain={setDomain} />
					<div className="flex items-center md:flex ">
						<Search setSearch={setSearch} />
					</div>
				</div>
				<div className="md:hidden mt-5">
					<Search setSearch={setSearch} />
					<Domain setDomain={setDomain} />
				</div>

				<h1 className="sm:text-2xl text-xl font-semibold text-center mt-10">
					收藏文章
				</h1>

				<Content domain={domain} search={search} />

			</div>
			<Tabbar setWindowNav={setWindowNav} windowNav={windowNav} />

			{/* SECTION mobileWindowNavbar */}
			<Sidebar WindowNav={windowNav} setWindowNav={setWindowNav} />
		</>
	);
}
