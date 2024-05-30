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
				<Link href="/">
					<Image
						src="/learner/why_mini_icon.png"
						alt=""
						width={40}
						height={40}
					/>
				</Link>
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
					<Link href="/teacher" className={`${styles.windowNavItem} hover:ps-2 hover:border-l-4 hover:border-l-red-500`}>
						<div>
							<GoVideo size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont} text-gray-400 hover:text-white`}>我的課程</div>
					</Link>

					{/* 作業批改隱藏掉，家回來只要加 ${styles.windowNavItem} */}
					<Link href="/teacher/homeworkGrading" className={` hover:ps-2 hover:border-l-4 hover:border-l-red-500 hidden`}>
						<div>
							<RiPencilFill size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont} text-gray-400 hover:text-white`}>作業批改</div>
					</Link>
					<Link href="/teacher/articleManagement" className={`${styles.windowNavItem} hover:ps-2 hover:border-l-4 hover:border-l-red-500`}>
						<div>
							<MdArticle size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont} text-gray-400 hover:text-white`}>文章管理</div>
					</Link>

					<Link href="/income" className={`${styles.windowNavItem} hover:ps-2 hover:border-l-4 hover:border-l-red-500 `}>
						<div>
							<MdOutlineAnalytics size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont} text-gray-400 hover:text-white`}>銷售列表</div>
					</Link>
				</div>
				<div className={styles.windowNavcontainerItem}>
					<Link href="/learner" className={`${styles.windowNavItem}  hover:ps-2 hover:border-l-4 hover:border-l-red-500 hidden`}>
						<div>
							<PiStudent size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont} text-gray-400 hover:text-white`}>學生模式</div>
					</Link>
					{/* 提領報酬隱藏掉，加回來只要加 ${styles.windowNavItem} */}
					<Link href="#" className={`hover:ps-2 hover:border-l-4 hover:border-l-red-500 hidden`}>
						<div>
							<GiReceiveMoney size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont} text-gray-400 hover:text-white`}>提領報酬</div>
					</Link>

				</div>
			</div>
		</nav>
	);
}
