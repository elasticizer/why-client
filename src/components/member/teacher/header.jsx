
import { useState, useRef, useEffect } from 'react';
import styles from '@/styles/teacher.module.css';
import UserList from '@/components/member/userList';
import { BsBell } from "react-icons/bs";
import { useSession } from '@/contexts/session';


export default function Header() {
	const button = useRef();
	const [hidden, setHidden] = useState(true);
	const [Icon, setIcon] = useState("");

	const session = useSession();


	useEffect(() => {
		if (session) {
			setIcon(session.Icon);
		}
	}, [session]);




	useEffect(
		() => {
			// 我點擊的目標是有包含我綁定的ref元素，就設定關清單，不包含就設定開
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
				教師模式
			</a>
			<div className={styles.bell}>
				<BsBell />
			</div>
			<button className={styles.user} ref={button}>
				<img
					src={Icon}
					alt=""
					width={30}
					height={30}
					className={styles.userImg}
				/>
			</button>
		</div>
	);
}
