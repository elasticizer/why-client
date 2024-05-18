import Link from 'next/link';
import { useState } from 'react';

export default function UserList({userList}) {
	return (
		<div className={`absolute bg-white -top-52 right-2 ${userList} shadow-lg`}>
			<ul>
				<li className="text-center text-base py-2 px-2 ring-1 ring-gray-300"><Link href="/learner/myCourse">我的課程</Link></li>
				<li className="text-center text-base py-2 px-2 ring-1 ring-gray-300"><Link href="#">購物車</Link></li>
				<li className="text-center text-base py-2 px-2 ring-1 ring-gray-300"><Link href="/learner/wishList">心願清單</Link></li>
				<li className="text-center text-base py-2 px-2 ring-1 ring-gray-300"><Link href="#">編輯個人檔案</Link></li>
				<li className="text-center text-base py-2 px-2 ring-1 ring-gray-300"><Link href="#">登出</Link></li>
			</ul>
		</div>
	);
}
