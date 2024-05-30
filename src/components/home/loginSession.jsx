import React from 'react';
import Link from 'next/link';
import { FiUser } from 'react-icons/fi';

export default function LoginSession() {
    return (
        <Link
            className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-orange-400 md:border-s md:border-gray-300 md:my-6 md:ps-6"
            href="/signin">
            <FiUser />
            登入/註冊
        </Link>
    );
}