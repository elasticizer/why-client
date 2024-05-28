import { createRef, useEffect, useState } from 'react';
import styles from '@/styles/learner.module.css';
import { GoVideo } from "react-icons/go";
import { RiFunctionLine } from "react-icons/ri";
import { MdArticle} from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";
import UserList from "./userList";
import Link from 'next/link';
import { useSession } from '@/contexts/session';




export default function Tabbar({ setWindowNav, windowNav }) {
	const [iconRotate, setIconRotate] = useState("");
	const [Icon, setIcon] = useState("");
	const [hidden, setHidden] = useState(true);
	const buttonEl = createRef();


	const session = useSession();
	useEffect(() => {
		if (session) {
			setIcon(session.Icon);
		}
	}, [session]);



	useEffect(
		() => {
			const type = 'click';
			const listener = e => buttonEl.current.contains(e.target)
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
		<nav className={`${styles.bottomNav}`}>
			<Link href="/teacher" className={styles.navItem}>
				<div>
					<GoVideo size="30px" color="#999999" />
				</div>
				<div className={styles.nevFont}>我的課程</div>
			</Link>
			<Link href='/teacher/articleManagement' className={styles.navItem}>
				<div>
					<MdArticle size="30px" color="#999999" />
				</div>
				<div className={styles.nevFont}>文章管理</div>
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
				<div className={`${styles.learnerListImage} relative overflow-hidden`}>
					<img
						src={Icon}
						alt=""
					/>
				</div>
				<div className={`${styles.learnerListIcon} transition-all ${hidden?'':'-rotate-180'}`} ref={buttonEl}>
					<BsChevronDown size="20px" color="white" />
				</div>
			</div>
			<UserList userList={hidden} option={'-top-32'} />
		</nav>
	);
}
