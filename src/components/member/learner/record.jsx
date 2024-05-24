import React from 'react';
import styles from '@/styles/learner.module.css';

export default function Record() {
	return (
		<div className={styles.record}>
			<div className={styles.recordItem}>
				<div className={styles.textStyleGrey14}>已完成課程</div>
				<div className={styles.textStyleBlack16}>5</div>
			</div>
			<div className={styles.recordItem}>
				<div className={styles.textStyleGrey14}>經歷的時間</div>
				<div className={styles.textStyleBlack16}>20 hours</div>
			</div>
		</div>
	);
}
