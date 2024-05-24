
import React from 'react';
import styles from '@/styles/learner.module.css';

export default function ContentCard({ title }) {
	return (
		<div className="flex w-full bg-gray-50 shadow-sm ring-1 ring-gray-300 md:flex-col relative">
			<div className="w-1/3 h-36 md:h-52 md:w-full md:me-0 overflow-hidden">
				<img
					className="hover:scale-125"
					src="/learner/code.jpg"
					alt=""
					style={{ "width": "100%", "height": "100%", "object-fit": "cover" }}
				/>
			</div>
			<div className="flex w-full h-auto justify-between md:flex-col">
				<div className={`${styles.text} flex flex-col justify-center items-start p-2 w-2/3 md:w-full`}>
					<div className="text-sm leading-6 text-wrap line-clamp-2">30天轉職前端工程師</div>
					<div className="text-base font-bold leading-6 text-wrap line-clamp-2">作業：{title}</div>
					<div className="text-xs text-gray-400 leading-6 text-wrap line-clamp-2">第六章 - 前端網頁切板</div>
					<button className='ring-1 ring-orange-500 text-orange-500 px-1 py-1 text-xs font-semibold shadow-sm hover:text-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 hidden md:flex'>#網站設計</button>
				</div>
				<div className="flex items-center md:justify-center">
					<button className=" bg-orange-400 px-2 py-1 md:px-3 md:py-2 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-orange-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 rounded-full me-2 md:me-0 md:mb-3">批改作業</button>
				</div>
				<div className="flex justify-center items-center rounded-full bg-red-500 w-6 h-6 md:w-8 md:h-8 text-center text-white absolute -top-3 -right-2"><div>2</div></div>
			</div>


		</div>
	);
}
