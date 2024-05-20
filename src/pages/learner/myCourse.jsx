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
	const [domain,setDomain]=useState("")
	const [search,setSearch]=useState("")
	return (
		<>
			<div className={styles.container}>
				{/* header */}
				<Header />
				{/* SECTION ProfileCard */}
				<ProfileCard />


				{/* 分類選擇與搜尋 */}
				<div className='mt-10 hidden md:flex justify-between'>
					<Domain setDomain={setDomain}/>
					<div className="flex items-center md:flex ">
						<Search setSearch={setSearch}/>
					</div>
				</div>
				<div className="md:hidden mt-5">
					<Search setSearch={setSearch}/>
					<Domain setDomain={setDomain}/>
				</div>
				<h1 className="sm:text-2xl text-xl font-semibold text-center mt-10">
					我的課程
				</h1>
				{/* SECTION Content */}
				<Content domain={domain} search={search}/>
			</div>

			{/* SECTION mobileNavbar */}
			<Tabbar setWindowNav={setWindowNav} windowNav={windowNav} />

			{/* SECTION mobileWindowNavbar */}
			<Sidebar WindowNav={windowNav} setWindowNav={setWindowNav} />
		</>
	);
}
