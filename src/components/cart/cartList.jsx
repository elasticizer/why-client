import { useState, useEffect } from 'react';
import CheckAll from '@/components/cart/checkAll';
import CourseItem from '@/components/cart/courseItem';
import CourseItemNone from '@/components/cart/courseItemNone';
import CouponModal from '@/components/cart/couponModal';
import { useCart } from '@/hooks/useCart';

export default function CartList() {
	const { cartItem, removeItem } = useCart();

	const [selectedItems, setSelectedItems] = useState([]);
	const [course, setCourse] = useState([]);

	useEffect(() => {
		const initState = cartItem.map((v, i) => {
			return { ...v, id: i + 1, checked: false };
		});
		setCourse(initState);
	}, [cartItem]);

	const handleToggleChecked = id => {
		const nextItems = course.map(v => {
			if (v.id === id) return { ...v, checked: !v.checked };
			else return v;
		});
		setCourse(nextItems);
	};

	const handleToggleCheckAll = e => {
		const nextItems = course.map(v => {
			return { ...v, checked: e.target.checked };
		});
		setCourse(nextItems);
	};

	useEffect(() => {
		const selected = course.filter(v => v.checked);
		setSelectedItems(selected);
		console.log(selected);
	}, [course]);
	// 

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
