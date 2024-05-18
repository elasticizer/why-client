import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/learner.module.css';
import { GoVideo } from "react-icons/go";
import { RiPencilFill } from "react-icons/ri";
import { MdArticle, MdOutlineAnalytics } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { PiStudent } from "react-icons/pi";
import Link from 'next/link';
import { BsX } from "react-icons/bs";







export default function Sidebar({ WindowNav, setWindowNav }) {
	const [windowNavFont, setWindowNavFont] = useState("md:hidden");
	return (
		<nav className={`${styles.windowNav} ${WindowNav} transition-all`}
			onMouseOver={() => {
				setWindowNavFont("");
			}}
			onMouseLeave={() => {
				setWindowNavFont("md:hidden");
			}}

		>
			<div className={`${styles.windowNavHead} justify-between md:justify-center`}>
				<div className={styles.logo}>
					<Image
						src="/learner/mobile/logo.png"
						alt=""
						width={40}
						height={40}
					/>
				</div>
				<button
					className={styles.rebeccapurple} onClick={() => {
						setWindowNav(WindowNav ? "" : "hidden");
						setWindowNavFont("md:hidden");
					}}>
					<BsX size="30px" color="white" />
				</button>
			</div>
			<div className={`${styles.windowNavcontainer} md:justify-between`}>
				<div className={styles.windowNavcontainerItem}>
					<Link href="/teacher" className={styles.windowNavItem}>
						<div>
							<GoVideo size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont}`}>我的課程</div>
					</Link>
					<Link href="/teacher/homeworkGrading" className={styles.windowNavItem}>
						<div>
							<RiPencilFill size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont}`}>作業批改</div>
					</Link>
					<Link href="/teacher/articleManagement" className={styles.windowNavItem}>
						<div>
							<MdArticle size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont}`}>文章管理</div>
					</Link>
					<Link href="#" className={styles.windowNavItem}>
						<div>
							<MdOutlineAnalytics size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont}`}>數據分析</div>
					</Link>
				</div>
				<div className={styles.windowNavcontainerItem}>
					<Link href="#" className={styles.windowNavItem}>
						<div>
							<GiReceiveMoney size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont}`}>提領報酬</div>
					</Link>
					<Link href="/learner" className={styles.windowNavItem}>
						<div>
							<PiStudent size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont}`}>學生模式</div>
					</Link>

				</div>
			</div>
		</nav>
	);
}
