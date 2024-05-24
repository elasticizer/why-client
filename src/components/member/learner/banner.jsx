import React, { useState, useEffect } from 'react';
import styles from '@/styles/learner.module.css';
import Link from 'next/link';
import { useSession } from '@/contexts/session';

export default function Banner() {
	const [sessionInfor, setSessionInfor] = useState('');

	const session = useSession();
	useEffect(() => {
		if (session) {
			setSessionInfor(session);
			const handleData = async () => {};
			handleData();
		}
	}, [session]);
	return (
		<div
			className={styles.banner}
			style={{ backgroundImage: 'url(/learner/banner.jpg)' }}>
			<div className={styles.bannerDiv1}>歡迎回來,{sessionInfor.Nickname}</div>
			<div className={styles.bannerDiv2}>每天半小時，每天都前進一點</div>
			<div className={styles.bannerDiv}>
				<Link
					href="#"
					className={styles.bannerButtonA}>
					發現更多課程
				</Link>
				<Link
					href="/learner/myCourse"
					className={styles.bannerButtonB}>
					繼續學習課程
				</Link>
			</div>
		</div>
	);
}
