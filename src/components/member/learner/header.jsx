import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import styles from '@/styles/learner.module.css';
import UserList from '@/components/member/userList';
import { BsBell } from "react-icons/bs";


export default function Header() {
	const button = useRef();
	const [hidden, setHidden] = useState(true);

	useEffect(
		() => {
			const type = 'click';
			const listener = e => button.current.contains(e.target)
				? setHidden(!hidden)
				: !hidden && setHidden(true);

			window.addEventListener(type, listener);

			return () => {
				window.removeEventListener(type, listener);
			};
		}
	);

	return (
		<div className={`${styles.header} hidden md:flex relative`}>
			<UserList userList={hidden} option={'top-10 -right-3'} />
			<a
				href="#"
				className={`${styles.textStyleBlack16} ${styles.headerA} `}>
				學生模式
			</a>
			<div className={styles.bell}>
				<BsBell />
			</div>
			<button className={styles.user} ref={button}>
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