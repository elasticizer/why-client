import { useState, useEffect } from 'react';
import CheckAll from '@/components/cart/checkAll';
import CourseItem from '@/components/cart/courseItem';
import CourseItemNone from '@/components/cart/courseItemNone';
import CouponModal from '@/components/cart/couponModal';

export default function CourseList() {
	const [course, setCourse] = useState([]);

	// 初始化狀態的函數
	const initState = courses => {
		return courses.map((v, i) => {
			return { ...v, id: i + 1, checked: false };
		});
	};

	useEffect(() => {
		const getCourse = async () => {
			const url = '/api/course';
			try {
				const res = await fetch(url);
				const data = await res.json();
				setCourse(initState(data));
			} catch (e) {
				console.error(e);
			}
		};

		getCourse();
	}, []);

	const handleToggleChecked = id => {
		const nextCourseItems = course.map((v, i) => {
			if (v.id === id) return { ...v, checked: !v.checked };
			else return v;
		});
		setCourse(nextCourseItems);
	};

	const handleToggleCheckAll = e => {
		const nextCourseItems = course.map((v, i) => {
			return { ...v, checked: e.target.checked };
		});
		setCourse(nextCourseItems);
	};
	return (
		<>
			<div className="border border-gray-300 rounded-lg">
				{/* 購物車無商品狀態 */}
				{/* <CourseItemNone/> */}
				{/* 購物車有商品狀態 */}
				<CheckAll
					checked={course.every(v => v.checked)}
					onChange={handleToggleCheckAll}
				/>
				{course.map((v, i) => {
					return (
						<CourseItem
							key={v.id}
							checked={v.checked}
							onChange={() => {
								handleToggleChecked(v.id);
							}}
						/>
					);
				})}
				<CouponModal />
			</div>
		</>
	);
}
