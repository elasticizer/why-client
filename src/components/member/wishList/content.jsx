import React from 'react';
import styles from '@/styles/learner.module.css';
import ContentCard from "@/components/member/wishList/contentCard";

export default function Content() {
	return (
		<div className={styles.content}>
			<div className={`grid grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 md:gap-y-16 mt-10 sm:mt-16 `}>
				<ContentCard
					title={"學生能養成學習的習慣，就更能達成目標。運用學習排程器來空出學習時間，並使"}
					picUrl={"/learner/code1.jpg"}
					prise={"1235"}
					quantity={"12515"} />
				<ContentCard
					title={"Python 程式設計入門"}
					picUrl={"/learner/code.jpg"}
					prise={"151"}
					quantity={"220"} />
				<ContentCard title={"JavaScript 前端開發入門"} picUrl={"/learner/code1.jpg"} prise={"535"} quantity={"354"} />
				<ContentCard title={"Java 網路應用程式開發"} picUrl={"/learner/code.jpg"} prise={"1250"} quantity={"15"} />
			</div>
		</div>
	);
}
