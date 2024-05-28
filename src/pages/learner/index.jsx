import Banner from '@/components/member/learner/banner';
import Header from '@/components/member/learner/header';
import Record from '@/components/member/learner/record';
import Sidebar from '@/components/member/learner/sidebar';
import Tabbar from '@/components/member/tabbarLearner';
import Content from '@/components/member/learner/content';
import {useState } from 'react';
import styles from '@/styles/learner.module.css';
import { useSession } from '@/contexts/session';

export default function Index() {
	const [windowNav, setWindowNav] = useState("hidden");
	const session = useSession();

	return (
		<>
			<div>{session?.firstName}</div>
			<link
				rel="stylesheet"
				href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
			/>
			<link
				rel="preconnect"
				href="https://fonts.googleapis.com"
			/>
			<link
				rel="preconnect"
				href="https://fonts.gstatic.com"
				crossOrigin=""
			/>
			<link
				href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
				rel="stylesheet"
			/>
			<div className={styles.container}>
				{/* header */}
				<Header />
				{/* banner */}
				<Banner />
				{/* record */}
				<Record />
				{/* content */}
				<Content />
			</div>
			{/* SECTION mobileNavbar */}
			<Tabbar setWindowNav={setWindowNav} windowNav={windowNav} />

			{/* SECTION mobileWindowNavbar */}
			<Sidebar WindowNav={windowNav} setWindowNav={setWindowNav} />
		</>
	);
}
