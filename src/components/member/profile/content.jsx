import React from 'react';
import styles from '@/styles/learner.module.css';
import ContentCard from "@/components/member/profile/contentCard";

export default function Content() {
	return (
		<div className={styles.content}>
			<div className={`grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8 md:gap-y-16 mt-10 sm:mt-16`}>
				<ContentCard title={"每天學習一點點，就能積沙成塔。研究顯示，若學生能養成學習的習慣，就更能達成目標。"}/>
				<ContentCard title={"每天學習一點點，就能積沙成，就更能達成目標。"}/>
				<ContentCard title={"每研究顯示習慣，就更能達成目標。"}/>
				<ContentCard title={"，就更能達成目標。"}/>
			</div>
		</div>
	);
}
