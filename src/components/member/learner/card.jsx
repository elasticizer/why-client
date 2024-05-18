import Image from 'next/image';
import React from 'react';
import styles from '@/styles/learner.module.css';

export default function Card({ title }) {
	return (

		<div className="flex w-full  shadow-sm ring-1 ring-gray-300 md:flex-col relative overflow-hidden hover:bg-gray-100">
			<div className="w-1/3 h-36 md:h-52 md:w-full md:me-0 overflow-hidden">
				<img
				className="hover:scale-125"
					src="/learner/code.jpg"
					alt=""
					style={{ "width": "100%", "height": "100%", "object-fit": "cover" }}
				/>
			</div>
			<div className="flex w-2/3 md:w-full h-auto">
				<div className={`${styles.text} flex flex-col justify-between items-start p-2 w-full`}>
					<div className="w-full">
						<div className="text-sm font-bold leading-5 md:text-base text-justify line-clamp-2">{title}</div>
						<div className="text-xs text-gray-400 leading-6 text-wrap text-justify">作者:JACKALL</div>
						<button className='ring-1 ring-orange-500 text-orange-500 px-1 py-1 text-xs font-semibold  shadow-sm hover:text-orange-300 hover:ring-2 hover:ring-orange-300 hidden md:flex md:mt-2 md:mb-4'>#網站設計</button>
					</div>
					<div className="w-full">
						<div className="w-full h-1 bg-gray-200 rounded-full ">
							<div className="w-12 h-1 bg-orange-400 rounded-full"></div>
						</div>
						<span className='text-xs text-gray-400 leading-6'>23%完成</span>
					</div>


				</div>
			</div>


		</div>
	);
}
