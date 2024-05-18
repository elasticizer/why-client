import Image from 'next/image';
import React from 'react';
import styles from '@/styles/learner.module.css';
import { BsBell } from "react-icons/bs";


export default function Header() {
	return (
		<div className={styles.header}>
			<a
				href="#"
				className={`${styles.textStyleBlack16} ${styles.headerA} `}>
				學生模式
			</a>
			<div className={styles.bell}>
				<BsBell />
			</div>
			<div className={styles.user}>
				<Image
					src="/learner/container.png"
					alt=""
					width={30}
					height={30}
					className={styles.userImg}
				/>
			</div>
		</div>
	);
}
