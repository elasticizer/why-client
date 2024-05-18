import Link from 'next/link';
import React from 'react';
import { BsFillPencilFill } from "react-icons/bs";


export default function ProfileCard() {
	return (
		<div className="w-full rounded-lg overflow-hidden flex flex-col mt-10 ring-1 ring-gray-200 shadow sm:flex-row sm:rounded-none sm:ring-0 sm:shadow-none sm:overflow-visible">
			<div className="bg-amber-500 flex flex-col items-center p-5	sm:me-3 md:me-5 sm:rounded-lg sm:ring-1 ring-gray-100 sm:shadow sm:w-1/2 md:py-10">
				<div className="w-16 h-16 rounded-full overflow-hidden  shadow-lg sm:w-28 sm:h-28"><img src="/learner/container.jpg" alt="" /></div>
				<div className="flex items-center mt-2 sm:mt-3 md:mt-5">
					<div className="me-2 text-lg text-white font-semibold">username</div>
					<Link href="#"><BsFillPencilFill color="white" size="15px" />
					</Link>
				</div>
			</div>
			<div className="flex flex-col sm:rounded-lg sm:ring-1 sm:ring-gray-200  sm:shadow sm:sm:w-1/2 sm:h-auto">
				<div className="flex items-center justify-center p-2 sm:h-1/2">
					<div className="flex flex-col items-center me-5 sm:me-10 md:me-16">
						<span className="text-sm text-gray-400 sm:text-base">已參加過</span>
						<span className="font-semibold text-base leading-8 sm:text-lg">0堂課</span>
					</div>
					<div className="flex flex-col items-center">
						<span className="text-sm text-gray-400 sm:text-base">已交作業</span>
						<span className="font-semibold text-base leading-8 sm:text-lg">15/30</span>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center border-t-2 p-2 sm:h-1/2">
					<span className="text-sm text-gray-400 sm:text-base">已完成</span>
					<span className="font-semibold text-base leading-8 sm:text-lg">5堂課</span>
				</div>
			</div>
		</div>
	);
}
