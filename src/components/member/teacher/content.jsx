import React from 'react';
import styles from '@/styles/teacher.module.css';
import ContentCard from '@/components/member/teacher/contentCard';


export default function Content() {
	return (
		<div className={`${styles.content} mt-10`}>
			<div className={`grid grid-cols-1 w-full  gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 md:gap-y-16 mt-10 sm:mt-16 `}>
				<ContentCard />
				<ContentCard />
				<ContentCard />
				<ContentCard />
				<ContentCard />
			</div>
		</div>
	);
}
