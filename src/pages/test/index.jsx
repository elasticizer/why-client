import { useState, useEffect } from 'react';
import Cart from '@/layouts/Cart';
import CourseList from '../../components/cart/course';
import Link from 'next/link';
import PrevPageBtn from '../../components/cart/prevPageBtn';

export default function TestPage() {
	return (
		<>
			<Cart>
				<title>測試課程頁面</title>
				<div className="container mt-8 max-w-[85rem] sm:px-6 lg:px-8 mx-auto my-8">
					<PrevPageBtn
						href="/cart"
						prev="購物車"
					/>
					<CourseList />
				</div>
			</Cart>
		</>
	);
}
