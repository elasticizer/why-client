import React from 'react';
import styles from '@/styles/teacher.module.css';
import ContentCard from '@/components/member/teacher/contentCard';


export default function Content() {
	return (
		<div className={`${styles.content} mt-10`}>
			<div className={`${styles.courseCards} ${styles.contentDiv} mt-10 sm:mt-16`}>
				<ContentCard />
				<ContentCard />
				<ContentCard />
				<ContentCard />
				<ContentCard />
			</div>
		</div>
	);
}
