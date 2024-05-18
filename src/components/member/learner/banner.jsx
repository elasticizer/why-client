import React from 'react';
import styles from '@/styles/learner.module.css';

export default function Banner() {
	return (
		<div
			className={styles.banner}
			style={{ backgroundImage: 'url(/learner/banner.jpg)' }}>
			<div className={styles.bannerDiv1}>歡迎回來,Jackall</div>
			<div className={styles.bannerDiv2}>每天半小時，每天都前進一點</div>
			<div className={styles.bannerDiv}>
				<button className={styles.bannerButtonA}>發現更多課程</button>
				<button className={styles.bannerButtonB}>繼續學習課程</button>
			</div>
		</div>
	);
}
