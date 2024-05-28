import Link from 'next/link';
import 'animate.css';
import { BsCart } from "react-icons/bs";
import { IoMdLogOut } from "react-icons/io";
import { FiUser } from "react-icons/fi";



export default function UserList({ userList, option }) {
	return (
		<div className={`absolute bg-white ${option} right-2 ${userList ? 'hidden' : ''} shadow-lg z-20 animate__animated animate__fadeIn `}>
			<ul>
				<li className=" text-center text-base py-2 px-2 ring-1 ring-gray-300"><Link href="#" className="flex justify-start items-center"><BsCart /><span className="ms-2">購物車</span></Link></li>
				<li className="text-center text-base py-2 px-2 ring-1 ring-gray-300"><Link href="#" className="flex justify-start items-center"><FiUser /><span className="ms-2">個人檔案</span></Link></li>
				<li className="text-center text-base py-2 px-2 ring-1 ring-gray-300"><Link href="#" className="flex justify-start items-center"><IoMdLogOut /><span className="ms-2">登出</span></Link></li>
			</ul>
		</div>
	);
}
