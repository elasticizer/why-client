import Header from '@/components/member/learner/header';
import Sidebar from '@/components/member/learner/sidebar';
import Tabbar from '@/components/member/tabbarLearner';
import ProfileCard from "@/components/member/profile/profileCard";
import Content from "@/components/member/profile/content";
import { useState } from 'react';
import styles from '@/styles/learner.module.css';

export default function Profile() {
	const [windowNav, setWindowNav] = useState("hidden");
	return (
		<>
			<div className={styles.container}>
				{/* header */}
				<Header />
				{/* SECTION ProfileCard */}
				<ProfileCard />
				<div className="flex justify-center mt-10">
					<h1 className="text-2xl sm:text-3xl font-semibold">作品集</h1>
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
