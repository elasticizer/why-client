import React from 'react';
import styles from '@/styles/learner.module.css';
import Card from '@/components/member/learner/card';
import Link from 'next/link';

export default function Content() {
	return (
		<div className={styles.content}>
			<div className={`${styles.textStyleTitle} ${styles.contentDiv}`}>
				正在進行的課程
			</div>
			<div className={`${styles.textStyleTitle} ${styles.contentDiv}`}>
				接下去的課程更精彩，快來完成他吧
			</div>
			<div className={`grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 md:gap-y-16 mt-10 sm:mt-16`}>
				<Card title={"每天學習一點點，就能積沙成塔。研究顯示，若學生能養成學習的習慣，就更能達成目標。"} />
				<Card title={"每天學習一點點，就能積沙成塔。"} />
				<Card title={"每點，就能積沙成塔。"} />
			</div>
			<Link href="/learner/myCourse">
				<button className={styles.contentButton}>查看更多</button>
			</Link>

		</div>
	);
}
