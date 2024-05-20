import Image from 'next/image';
import {useState} from 'react';
import styles from '@/styles/teacher.module.css';
import UserList from '@/components/member/userList';
import { BsBell } from "react-icons/bs";


export default function Header() {
	const [toggle, setToggle] = useState("hidden");
	return (
		<div className={`${styles.header} hidden md:flex relative`}>
		<UserList userList={toggle} option={'top-10 -right-3'} />
			<a
				href="#"
				className={`${styles.textStyleBlack16} ${styles.headerA} `}>
				教師模式
			</a>
			<div className={styles.bell}>
				<BsBell />
			</div>
			<button className={styles.user} onClick={() => {
				setToggle(toggle === 'hidden' ? 'flex' : 'hidden');
			}}>
				<Image
					src="/learner/container.png"
					alt=""
					width={30}
					height={30}
					className={styles.userImg}
				/>
			</button>
		</div>
	);
}
