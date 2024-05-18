import { useState } from 'react';


export default function Card({ title, picUrl, prise, quantity, button, buttonStyle }) {
	return (
		<div className="flex w-full shadow-sm ring-1 ring-gray-300 flex-col relative overflow-hidden hover:bg-gray-100">
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
						<div className="text-sm leading-6 text-wrap line-clamp-2">30天轉職前端工程師</div>
						<div className="text-base font-bold leading-6 text-wrap line-clamp-2">作業：{title}</div>
						<div className="text-xs text-gray-400 leading-6 text-wrap">第六章 - 前端網頁切板</div>
						<div>
							<button className='ring-1 ring-orange-500 text-orange-500 px-1 py-1 text-xs font-semibold shadow-sm hover:text-orange-300 hover:ring-2 hover:ring-orange-300 md:flex md:mt-2 md:mb-4'>#網站設計</button>
						</div>

					</div>

					<div className="flex justify-center w-full items-center mt-4">
						<button className={buttonStyle} onClick={(e) => {
							e.preventDefault();
						}}>{button}</button>
					</div>

				</div>
			</div>


		</div>
	);
}
