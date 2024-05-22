import React from 'react';
import styles from '@/styles/background.module.css';

export default function WaveBackground() {
	return (
		<div className={styles.ocean}>
			<div className={styles.wave}></div>
			<div className={styles.wave}></div>
		</div>
	);
}
