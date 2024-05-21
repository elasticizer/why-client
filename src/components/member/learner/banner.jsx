import React from 'react';
import styles from '@/styles/learner.module.css';
import Link from 'next/link';

export default function Banner() {
	return (
		<div
			className={styles.banner}
			style={{ backgroundImage: 'url(/learner/banner.jpg)' }}>
			<div className={styles.bannerDiv1}>歡迎回來,Jackall</div>
			<div className={styles.bannerDiv2}>每天半小時，每天都前進一點</div>
			<div className={styles.bannerDiv}>
				<Link href="#" className={styles.bannerButtonA}>發現更多課程</Link>
				<Link href="/learner/myCourse" className={styles.bannerButtonB}>繼續學習課程</Link>
			</div>
		</div>
	);
}
