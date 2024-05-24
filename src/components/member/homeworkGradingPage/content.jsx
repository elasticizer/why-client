import React from 'react';
import styles from '@/styles/teacher.module.css';
import ContentCard from '@/components/member/homeworkGradingPage/contentCard';


export default function Content() {
	return (
		<div className={styles.content}>
			<ContentCard />
		</div>
	);
}
