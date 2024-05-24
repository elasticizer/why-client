import React from 'react';
import styles from '@/styles/teacher.module.css';
import ContentCard from '@/components/member/homeworkGrading/contentCard';

export default function Content() {
	return (
		<div className={styles.content}>
			<div className={`grid grid-cols-1 w-full md:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-16 mt-10 sm:mt-16`}>
				<ContentCard title={"學生能養成學習的4出學習時間，並使"}/>
				<ContentCard title={"學生能養成學習的習慣排程器來空出學習時間，並使"}/>
				<ContentCard title={"學生能養成程器來空出學習時間，並使"}/>
				<ContentCard title={"學生能養成學習的習慣排程器來空出學習間，並使"}/>
				<ContentCard title={"學，並使"}/>
			</div>
		</div>
	);
}
