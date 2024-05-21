import { useState } from 'react';
import CartList from '@/components/cart/cartList';
import Summary from '@/components/cart/summary';
import PrevPageBtn from './prevPageBtn';
import CourseList from './course';

export default function Cart() {
	const [cartItem, setCartItem] = useState([]);

	const addItemToCart = course => {
		// console.log('Adding item to cart:', course);
		if (!cartItem.some(item => item.SN === course.SN)) {
			const newItem = { ...course, qty: 1 };
			const nextItem = [newItem, ...cartItem];
			setCartItem(nextItem);
		} else {
			alert(`${course.Name} 已經在購物車`);
		}
	};

	const removeItem = id => {
		const nextItems = cartItem.filter(item => item.SN !== id);
		setCartItem(nextItems);
	};

	// 總數量
	const totalQty = cartItem.reduce((acc, v) => acc + v.qty, 0);
	const totalPrice = cartItem.reduce((acc, v) => acc + v.qty * v.Price, 0);

	return (
		<div className="container mt-8 max-w-[85rem] sm:px-6 lg:px-8 mx-auto my-8">
			<PrevPageBtn />
			<CourseList addItemToCart={addItemToCart} /> {/* 測試的課程列表 */}
			<div className="grid lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:gap-x-6">
				<div className="lg:col-span-3">
					<CartList
						cartItem={cartItem}
						removeItem={removeItem}
					/>
				</div>
				<div className="lg:col-span-1 lg:w-full lg:h-fit lg:via-transparent lg:to-transparent dark:from-neutral-800 border border-gray-300 rounded-lg">
					<Summary
						totalQty={totalQty}
						totalPrice={totalPrice}
					/>
				</div>
			</div>
		</div>
	);
}
