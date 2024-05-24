import React from 'react';
import { FiUser } from 'react-icons/fi';
import { useSession } from '@/contexts/session';
import Link from 'next/link';

export default function LogoutSession() {
    const session = useSession();

	return (
		<div className="hs-dropdown hs-dropdown-example relative inline-flex flex items-center gap-x-2 font-medium text-gray-500 hover:text-orange-400 md:border-s md:border-gray-300 md:my-6 md:ps-6">
			<button
				id="hs-dropdown-example"
				type="button"
				className="hs-dropdown-toggle inline-flex items-center gap-x-2 text-md font-medium text-gray-500 hover:text-orange-400">
				<img
					className="rounded-full h-10"
					src={session.Icon}
					alt=""
				/>
				{session.Nickname || session.FirstName}
			</button>
			<div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2">
				<a
					className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 "
					href="#">
					我的帳戶
				</a>
				<Link
					className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 "
					href="/teacher">
					會員中心
				</Link>
				<Link
					className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 "
					href="/signout">
					登出
				</Link>
			</div>
		</div>
	);
}
