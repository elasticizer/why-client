import { useState, useEffect } from 'react';
import CheckAll from '@/components/cart/checkAll';
import CourseItem from '@/components/cart/courseItem';
import CourseItemNone from '@/components/cart/courseItemNone';
import CouponModal from '@/components/cart/couponModal';

export default function CartList({ cartItem, removeItem }) {
	const [course, setCourse] = useState([]);

	useEffect(() => {
		setCourse(cartItem);
	}, [cartItem]);

	const handleToggleChecked = id => {
		const nextCourseItems = course.map(v => {
			if (v.id === id) return { ...v, checked: !v.checked };
			else return v;
		});
		setCourse(nextCourseItems);
	};

	const handleToggleCheckAll = e => {
		const nextCourseItems = course.map(v => {
			return { ...v, checked: e.target.checked };
		});
		setCourse(nextCourseItems);
	};

	return (
		<div className="border border-gray-300 rounded-lg">
			{course.length === 0 ? (
				<CourseItemNone />
			) : (
				<>
					<CheckAll
						checked={course.every(v => v.checked)}
						onChange={handleToggleCheckAll}
					/>
					{course.map(item => (
						<CourseItem
							key={item.id}
							item={item}
							checked={item.checked}
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
