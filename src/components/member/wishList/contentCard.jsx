import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/learner.module.css';

export default function Card({ title, picUrl, price, quantity,teacher,domain }) {
	return (
		<div className="flex w-full shadow-sm ring-1 ring-gray-300 flex-col relative rounded-lg overflow-hidden hover:bg-gray-100">
			<div className="h-36 md:h-52 w-full md:me-0 overflow-hidden">
				<img
					className="hover:scale-125"
					src={picUrl}
					alt=""
					style={{ "width": "100%", "height": "100%", "object-fit": "cover" }}
				/>
			</div>
			<div className="flex w-full h-auto">
				<div className={` flex flex-col justify-between items-start p-2 w-full`}>
					<div className="flex flex-col w-full">
						<div className="text-sm font-bold leading-5  md:text-base text-justify w-full line-clamp-2">{title}</div>
						<div className="text-xs text-gray-400 leading-6 text-wrap text-justify">作者:{teacher}</div>
						<div>
							<button className='ring-1 ring-orange-500 text-orange-500 px-1 py-1 text-xs font-semibold shadow-sm hover:text-orange-300 hover:ring-2 hover:ring-orange-300 md:flex md:mt-2 md:mb-4'>#{domain}</button>
						</div>

					</div>

					<div className="flex justify-between w-full items-center mt-2 md:mt-0">
						<span className='text-base font-black text-red-500 leading-6'>${price}</span>
						<span>已售 {quantity}</span>
					</div>

				</div>
			</div>


		</div>
	);
}
