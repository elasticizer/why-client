import React from 'react';
import styles from '@/styles/teacher.module.css';
import ContentCard from '@/components/member/homeworkGradingClass/contentCard';


export default function Content() {
	return (
		<div className={styles.content}>
			<div className={`grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4  md:gap-x-8 md:gap-y-8 md:gap-y-16 mt-10 sm:mt-16`}>
				<ContentCard name={"jackall"} />
				<ContentCard name={"allice"} />
				<ContentCard name={"dfsdf2662"} />
				<ContentCard name={"ewrcf1518181"} />
				<ContentCard name={"ewewf155"} />
			</div>
		</div>
	);
}
