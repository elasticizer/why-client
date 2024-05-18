import React from 'react';
import styles from '@/styles/learner.module.css';
import { MdAccessTime } from 'react-icons/md';

export default function ContentCard({name}) {
	return (
		<div className="flex w-full bg-gray-50 shadow-sm ring-1 ring-gray-300 md:flex-col relative">
			<div className="w-1/3 h-auto md:w-full md:me-0">
				<img
					src="/learner/code.jpg"
					alt=""
					style={{ "width": "100%", "height": "100%", "object-fit": "cover" }}
				/>
			</div>

			<div className={`${styles.text} p-2 w-2/3 md:w-full`}>
				<div className="text-sm leading-6 text-wrap">學生: {name}</div>
				<div className="text-base font-bold leading-6 text-wrap">html設計切版</div>
				<div className="text-xs text-gray-500 flex content-center	mt-1 sm:text-sm items-center">
					<MdAccessTime />
					創建時間-2024.02.18 02:12
				</div>
			</div>



		</div>
	);
}
