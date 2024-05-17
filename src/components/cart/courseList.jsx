import { useState, useEffect } from 'react';
import CheckAll from '@/components/cart/checkAll';
import CourseItem from '@/components/cart/courseItem';
import CourseItemNone from '@/components/cart/courseItemNone';
import CouponModal from '@/components/cart/couponModal';

export default function CourseList() {
	const [course, setCourse] = useState([]);

	useEffect(() => {
		getCourse();
	}, []);

	const getCourse = async () => {
		const url = '/api/course';
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			if (data) {
				setCourse(data);
			}
		} catch (e) {
			console.error(e);
		}
	};

	const initState = course.map((v, i) => {
		return { id: i + 1, checked: false };
	});

	// const [course, setCourse] = useState(initState);

	//
	const handleToggleChecked = id => {
		const nextCourseItems = course.map((v, i) => {
			if (v.id === id) return { ...v, checked: !v.checked };
			else return v;
		});
		setCourse(nextCourseItems);
	};

	// 全選
	const handleToggleCheckAll = e => {
		const nextCourseItems = course.map((v, i) => {
			return { ...v, checked: e.target.checked };
			// 讓所有選項與checkAll一樣
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
