import React from 'react';
import { FiUser } from 'react-icons/fi';
import { useSession } from '@/contexts/session';

export default function LogoutSession() {
	const session = useSession();

	return (
		<div className="hs-dropdown hs-dropdown-example relative inline-flex flex items-center gap-x-2 font-medium text-gray-500 hover:text-orange-400 md:border-s md:border-gray-300 md:my-6 md:ps-6">
			<button
				id="hs-dropdown-example"
				type="button"
				className="hs-dropdown-toggle inline-flex items-center gap-x-2 text-md font-medium text-gray-500 hover:text-orange-400">
				<FiUser />
				{session.FirstName}
			</button>
			<div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2">
				<a
					className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 "
					href="#">
					個人資料
				</a>
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
