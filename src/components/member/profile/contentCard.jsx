
import React from 'react';
import styles from '@/styles/learner.module.css';

export default function Card({title}) {
	return (
		<div className="flex w-full bg-gray-50 shadow-sm ring-1 ring-gray-300 md:flex-col relative rounded-lg overflow-hidden hover:bg-gray-100">
			<div className="w-1/3 h-auto md:w-full md:me-0">
				<img
					src="/learner/code.jpg"
					alt=""
					style={{ "width": "100%", "height": "100%", "object-fit": "cover" }}
				/>
			</div>
			<div className="flex w-full justify-between md:flex-col">
				<div className={`${styles.text} flex flex-col justify-center items-start p-2 w-full `}>
					<div className="text-sm leading-5 text-wrap text-justify line-clamp-2">{title}</div>
					<div className="text-base font-bold leading-6 text-wrap mt-1 line-clamp-2">作業：html設計切版</div>
					<div className="text-xs text-gray-400 leading-6 text-wrap">第六章 - 前端網頁切板</div>
					<button className='ring-1 ring-orange-500 text-orange-500 px-1 py-1 text-xs font-semibold text-white shadow-sm hover:text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hidden md:flex'>#網站設計</button>
				</div>
			</div>


		</div>
	);
}
