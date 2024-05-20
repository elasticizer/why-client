import { useState, useEffect } from 'react';
import CheckAll from '@/components/cart/checkAll';
import CourseItem from '@/components/cart/courseItem';
import CourseItemNone from '@/components/cart/courseItemNone';
import CouponModal from '@/components/cart/couponModal';

export default function CartList({ cartItem, removeItem }) {
	const [course, setCourse] = useState([]);

	// useEffect(() => {
	// 	setCourse(cartItem);
	// }, [cartItem]);

	// useEffect(() => {
	// 	const initState = cartItem.map((v, i) => {
	// 		return { id: i + 1, checked: false };
	// 	});
	// 	setCourse(initState);
	// }, [cartItem]);

	useEffect(() => {
		const initState = cartItem.map((v, i) => {
			return { ...v, id: i + 1, checked: false };
		});
		setCourse(initState);
	}, [cartItem]);

	// 處理checked切換布林的函式
	const handleToggleChecked = id => {
		const nextItems = course.map(v => {
			if (v.id === id) return { ...v, checked: !v.checked };
			else return v;
		});
		setCourse(nextItems);
	};

	// 處理全選的函式
	const handleToggleCheckAll = e => {
		const nextItems = course.map(v => {
			return { ...v, checked: e.target.checked };
		});
		setCourse(nextItems);
	};

	return (
		<div className="border border-gray-300 rounded-lg">
			{course.length === 0 ? (
				<CourseItemNone />
			) : (
				<>
					<CheckAll
						checked={course.length > 0 && course.every(v => v.checked)}
						onChange={handleToggleCheckAll}
					/>
					{course.map(item => (
						<CourseItem
							key={item.id}
							item={item}
							checked={
								course.find(v => v.id === item.id) &&
								course.find(v => v.id === item.id).checked
							}
							onChange={() => handleToggleChecked(item.id)}
							removeItem={removeItem}
						/>
					))}

					<CouponModal />
				</>
			)}
		</div>
	);
}
