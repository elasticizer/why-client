import { useState } from 'react';
import CartList from '@/components/cart/cartList';
import Summary from '@/components/cart/summary';
import PrevPageBtn from './prevPageBtn';
import CourseList from './course';

export default function Cart() {
	const [items, setItems] = useState([]);

	const increaseItem = id => {
		const nextItems = items.map(v => {
			if (v.id === id) return { ...v, qty: v.qty + 1 };
			else return v;
		});
		setItems(nextItems);
	};

	const removeItem = id => {
		const nextItems = items.filter(v => v.id !== id);
		setItems(nextItems);
	};


	const addItem = course => {
		const foundIndex = items.findIndex(v => v.id === course.id);
		if (foundIndex > -1) {
			increaseItem(course.id);
		} else {
			const newItem = { ...course, qty: 1 };
			const nextItems = [newItem, ...items];
			setItems(nextItems);
		}
	};

	return (
		<div className="container mt-8 max-w-[85rem] sm:px-6 lg:px-8 mx-auto my-8">
			<PrevPageBtn />
			<CourseList addItem={addItem} /> {/* 測試的課程列表 */}
			<div className="grid lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:gap-x-6">
				<div className="lg:col-span-3">
					<CartList
						items={items}
						increaseItem={increaseItem}
						removeItem={removeItem}
					/>
				</div>
				<div className="lg:col-span-1 lg:w-full lg:h-fit lg:via-transparent lg:to-transparent dark:from-neutral-800 border border-gray-300 rounded-lg">
					<Summary />
				</div>
			</div>
		</div>
	);
}
