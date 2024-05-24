import React from 'react';
import { MdAccessTime } from 'react-icons/md';
import { BsDownload } from "react-icons/bs";


export default function Card() {
	return (

		<a href={"/learner/banner.jpg"} download>
			<div className="flex w-full bg-gray-50 shadow-sm ring-1 ring-gray-300">
				<div className="w-1/3 max-h-40 md:me-0">
					<img
						src="/learner/code.jpg"
						alt=""
						style={{ "width": "100%", "height": "100%", "object-fit": "cover" }}
					/>
				</div>

				<div className="flex w-full justify-between">
					<div className={` p-2 w-4/5 flex flex-col justify-center`}>
						<div className="text-sm leading-6 text-wrap md:text-base md:leading-8">學生: Jackall</div>
						<div className="text-base font-bold leading-6 text-wrap md:text-lg md:leading-8 line-clamp-2 text-justify">html設計切版</div>
						<div className="text-xs text-gray-500 flex content-center	mt-1  items-center md:text-sm md:leading-8">
							<MdAccessTime />
							創建時間-2024.02.18 02:12
						</div>
					</div>
					<div className="flex items-center md:justify-center">
						<button className="pe-4 md:pe-6">
							<div className="md:hidden">
								<BsDownload size="25px" />
							</div>
							<div className="hidden md:block">
								<BsDownload size="40px" />
							</div>

						</button>
					</div>
				</div>
			</div>
		</a>



	);
}
