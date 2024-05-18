import React from 'react';
import styles from '@/styles/learner.module.css';
import ContentCard from "@/components/member/myCourse/contentCard";

export default function Content() {
	return (
		<div className={styles.content}>
			<div className={`grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 md:gap-y-16 mt-10 sm:mt-16`}>
				<ContentCard picUrl={"/learner/code1.jpg"} title={"學生能養成學習的習慣排程器來空出學習時間，並使"} />
				<ContentCard picUrl={"/learner/code.jpg"} title={"學生能養成學習運用學習排程器來空出學習時間，並使"}/>
				<ContentCard picUrl={"/learner/code1.jpg"} title={"學生能養成學習的習慣，就更能達成目標。運用學習排程器來空出學習時間，並使"}/>
				<ContentCard picUrl={"/learner/code.jpg"} title={"學運用學習排程器來空出學習時間，並使"}/>
			</div>
		</div>
	);
}
