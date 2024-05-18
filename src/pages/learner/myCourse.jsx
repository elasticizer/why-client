import Header from '@/components/member/learner/header';
import Sidebar from '@/components/member/learner/sidebar';
import Tabbar from '@/components/member/tabbarLearner';
import ProfileCard from "@/components/member/profileCard";
import Content from "@/components/member/myCourse/content";
import Domain from '@/components/member/domain';
import Search from "@/components/member/search";
import { BsSearch } from "react-icons/bs";
import { useState } from 'react';
import styles from '@/styles/learner.module.css';

export default function MyCourse() {
	const [windowNav, setWindowNav] = useState("hidden");
	return (
		<>
			<div className={styles.container}>
				{/* header */}
				<Header />
				{/* SECTION ProfileCard */}
				<ProfileCard />
				<div className="flex justify-center mt-10">
					<h1 className="text-2xl md:text-3xl font-semibold">我的課程</h1>
				</div>

				{/* 分類選擇與搜尋 */}
				<div className='mt-10 hidden md:flex justify-between'>
					<Domain />
					<form action="" className="items-center md:flex ">
					<div className="flex">
						<input className="h-auto border  shadow-sm 	rounded-none ps-2" type="text" placeholder='輸入關鍵字' />
						<button className="bg-black	p-2 ps-3 pe-3 h-full"><BsSearch size="20px" color="white" /></button>
					</div>
					</form>
				</div>
				<div className="md:hidden mt-5">
					<Search />
					<Domain />
				</div>

				{/* SECTION Content */}
				<Content />
			</div>

			{/* SECTION mobileNavbar */}
			<Tabbar setWindowNav={setWindowNav} windowNav={windowNav} />

			{/* SECTION mobileWindowNavbar */}
			<Sidebar WindowNav={windowNav} setWindowNav={setWindowNav} />
		</>
	);
}
