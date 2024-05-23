import React from 'react';
import { FiUser } from 'react-icons/fi';

export default function LoginSession() {
	return (
		<a
			className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-orange-400 md:border-s md:border-gray-300 md:my-6 md:ps-6"
			href="http://localhost:3000/signin">
			<FiUser />
			登入/註冊
		</a>
	);
}
