import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/learner.module.css';
import { GoPerson } from "react-icons/go";
import { RiFolderVideoFill, RiPencilFill } from "react-icons/ri";
import { BsFillBagHeartFill, BsBookmarkHeart, BsX } from "react-icons/bs";
import { BiSolidCoupon } from "react-icons/bi";
import { FaChalkboardTeacher } from "react-icons/fa";
import Link from 'next/link';



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
						setWindowNavFont("md:hidden")
					}}>
					<BsX size="30px" color="white" />
				</button>
			</div>
			<div className={styles.windowNavcontainer}>
				<div className={styles.windowNavcontainerItem}>
					<Link href="/learner" className={styles.windowNavItem}>
						<div>
							<GoPerson size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont}`}>會員中心</div>
					</Link>
					<Link href="/learner/myCourse" className={styles.windowNavItem}>
						<div>
							<RiFolderVideoFill size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont}`}>我的課程</div>
					</Link>
					<Link href="/learner/wishList" className={styles.windowNavItem}>
						<div>
							<BsFillBagHeartFill size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont}`}>心願清單</div>
					</Link>
					<Link href="/learner/learnerHomework" className={styles.windowNavItem}>
						<div>
							<RiPencilFill size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont}`}>作業總覽</div>
					</Link>
				</div>
				<div className={styles.windowNavcontainerItem}>
					<Link href="#" className={styles.windowNavItem}>
						<div>
							<BiSolidCoupon size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont}`}>優惠票券</div>
					</Link>
					<Link href="/learner/articleBookmarking" className={styles.windowNavItem}>
						<div>
							<BsBookmarkHeart size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont}`}>文章收藏</div>
					</Link>
					<Link href="/teacher" className={styles.windowNavItem}>
						<div>
							<FaChalkboardTeacher size="30px" color="#999999" />
						</div>
						<div className={`${styles.windowNavFont} ${windowNavFont}`}>教師模式</div>
					</Link>
				</div>
			</div>
		</nav>
	);
}
