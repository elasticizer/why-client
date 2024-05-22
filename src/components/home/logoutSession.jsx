import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

export default function LogoutSession() {
	return (
		<div className="hs-dropdown hs-dropdown-example relative inline-flex flex items-center gap-x-2 font-medium text-gray-500 hover:text-orange-400 md:border-s md:border-gray-300 md:my-6 md:ps-6">
			<button
				id="hs-dropdown-example"
				type="button"
				className="hs-dropdown-toggle inline-flex items-center gap-x-2 text-md font-medium text-gray-500 hover:text-orange-400">
				<svg
					className="flex-shrink-0 size-4"
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round">
					<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
					<circle
						cx="12"
						cy="7"
						r="4"
					/>
				</svg>
				User
			</button>
			<div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2">
				<a
					className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 "
					href="#">
					會員中心
				</a>
				<a
					className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 "
					href="http://localhost:3000/signout">
					登出
				</a>
			</div>
		</div>
	);
}
