import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/learner.module.css';
import { GoPerson } from "react-icons/go";
import { RiFolderVideoFill } from "react-icons/ri";
import { RiFunctionLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import Link from 'next/link';
import UserList from "./userList";



export default function Tabbar({ setWindowNav, windowNav }) {
	const [iconRotate, setIconRotate] = useState("");
	const [userList, setUserList] = useState("hidden");
	return (
		<nav className={styles.bottomNav}>
			<Link href="/learner" className={styles.navItem}>
				<div>
					<GoPerson size="30px" color="#999999" />
				</div>
				<div className={styles.nevFont}>會員中心</div>
			</Link>
			<Link href='/learner/myCourse' className={styles.navItem}>
				<div>
					<RiFolderVideoFill size="30px" color="#999999" />
				</div>
				<div className={styles.nevFont}>我的課程</div>
			</Link>
			<div className={styles.navItem} onClick={() => {
				setWindowNav(windowNav ? "" : "hidden");

			}}>
				<div>
					<RiFunctionLine size="30px" color="#999999" />
				</div>
				<div className={styles.nevFont}>服務總覽</div>
			</div>
			<div className={styles.learnerList}>
				<div className={styles.learnerListImage}>
					<Image
						src="/learner/learner-Icon.png"
						alt=""
						width={20}
						height={20}
					/>
				</div>
				<div className={`${styles.learnerListIcon} transition-all ${iconRotate}`} onClick={() => {
					if (iconRotate) {
						setIconRotate("");
						setUserList("hidden");
					} else {
						setIconRotate("-rotate-180");
						setUserList("");
					}
				}}>
					<BsChevronDown size="20px" color="white" />
				</div>
			</div>
			<UserList userList={userList} option={'-top-52'}/>
		</nav>
	);
}
