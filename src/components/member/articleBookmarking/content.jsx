import React from 'react';
import styles from '@/styles/teacher.module.css';
import ContentCard from '@/components/member/articleBookmarking/contentCard';

export default function Content() {
	return (
		<div className={styles.content}>
			<div className={`${styles.courseCards} ${styles.contentDiv}`}>
				<ContentCard />

			</div>
		</div>
	);
}
