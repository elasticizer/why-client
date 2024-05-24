import { useState } from 'react';
import styles from '@/styles/learner.module.css';
import Link from 'next/link';
import 'animate.css';

export default function Card({ picUrl, title, domain,Nickname}) {
	return (
		<Link href='#' className="animate__animated animate__fadeIn">
			<div className="flex w-full h-full  shadow-sm ring-1 ring-gray-300 md:flex-col relative overflow-hidden hover:bg-gray-100">
				<div className="w-1/3 h-36 md:h-52 md:w-full md:me-0 overflow-hidden">
					<img
						className="hover:scale-125"
						src={picUrl}
						alt=""
						style={{ "width": "100%", "height": "100%", "object-fit": "cover" }}
					/>
				</div>
				<div className="flex w-2/3 md:w-full h-auto">
					<div className={`flex flex-col justify-between items-start p-2 w-full`}>
						<div className="w-full">
							<div className="text-sm font-bold leading-5 md:text-base text-justify line-clamp-2">{title}</div>
							<div className="text-xs text-gray-400 leading-6 text-wrap text-justify">作者:{Nickname}</div>
							<button className='ring-1 ring-orange-500 text-orange-500 px-1 py-1 text-xs font-semibold  shadow-sm hover:text-orange-300 hover:ring-2 hover:ring-orange-300  md:mt-2 md:mb-4'>{`#${domain}`}</button>
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
		</Link>

	);
}
