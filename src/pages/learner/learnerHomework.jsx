import Header from '@/components/member/learner/header';
import Sidebar from '@/components/member/learner/sidebar';
import Tabbar from '@/components/member/tabbarLearner';
import ProfileCard from "@/components/member/profileCard";
import Content from "@/components/member/learnerHomework/content";
import Domain from '@/components/member/domain';
import Search from "@/components/member/search";
import { BsSearch } from "react-icons/bs";
import { useState } from 'react';
import styles from '@/styles/learner.module.css';

export default function LearnerHomework() {
	const [windowNav, setWindowNav] = useState("hidden");
	const [domain, setDomain] = useState("");
	return (
		<>
			<div className={styles.container}>
				{/* header */}
				<Header />
				{/* SECTION ProfileCard */}
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
					作業總覽
				</h1>
				{/* SECTION Content */}
				<Content domain={domain} />
			</div>

			{/* SECTION mobileNavbar */}
			<Tabbar setWindowNav={setWindowNav} windowNav={windowNav} />

			{/* SECTION mobileWindowNavbar */}
			<Sidebar WindowNav={windowNav} setWindowNav={setWindowNav} />
		</>
	);
}
