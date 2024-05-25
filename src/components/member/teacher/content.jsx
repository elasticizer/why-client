import React from 'react';
import styles from '@/styles/teacher.module.css';
import ContentCard from '@/components/member/teacher/contentCard';


export default function Content({ data}) {


	return (
		<div className={`${styles.content} mt-10`}>
			<div className={`grid grid-cols-1 w-full  gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 md:gap-y-16 mt-10 sm:mt-16 `}>
				{data.map((v) => {
					return (
						<ContentCard
							key={v.SN}
							SN={v.SN}
							Name={v.Name}
							Intros={v.Intro}
							Filename={v.Filename}
							WhenCreated={v.WhenCreated}
						/>
					);
				})}
			</div>
		</div>
	);
}
