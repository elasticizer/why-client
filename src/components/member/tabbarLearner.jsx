
import { useState, useRef, useEffect } from 'react';
import styles from '@/styles/learner.module.css';
import { GoPerson } from "react-icons/go";
import { RiFolderVideoFill } from "react-icons/ri";
import { RiFunctionLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import Link from 'next/link';
import UserList from "./userList";
import { useSession } from '@/contexts/session';



export default function Tabbar({ setWindowNav, windowNav }) {
	const [hidden, setHidden] = useState(true);
	const [Icon, setIcon] = useState("");
	const button = useRef();

	const session = useSession();


	useEffect(() => {
		if (session) {
			setIcon(session.Icon);
		}
	}, [session]);



	useEffect(
		() => {
			const type = 'click';
			const listener = e => button.current.contains(e.target)
				? setHidden(!hidden)
				: !hidden && setHidden(true);

			window.addEventListener(type, listener);

			return () => {
				// 拔除監聽器，因為離開該頁面所監聽的元素消失，但監聽器不會消失，會持續監聽，就會監聽一個空的東西而占用記憶體
				window.removeEventListener(type, listener);
			};
		}
	);
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
				<div className={`${styles.learnerListImage} overflow-hidden`}>
					<img
						src={Icon}
						alt=""
					/>
				</div>
				<div className={`${styles.learnerListIcon} transition-all ${hidden ? '' : '-rotate-180'}`} ref={button}>
					<BsChevronDown size="20px" color="white" />
				</div>
			</div>
			<UserList userList={hidden} option="-top-32" />
		</nav>
	);
}
