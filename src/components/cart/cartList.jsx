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
		const getCourse = async () => {
			const url = '/api/cart';
			try {
				const res = await fetch(url);
				const data = await res.json();
				setCourse(data);
			} catch (e) {
				setCourse([]);
			}
		};
		getCourse();
	}, []);

	useEffect(() => {
		const initState = cartItem.map((v, i) => {
			return { ...v, id: i + 1, checked: false };
		});
		setCourse(initState);
	}, [cartItem]);

	const handleToggleChecked = sn => {
		selectedItems.includes(sn)
			? setSelectedItems(selectedItems.filter(v => v !== sn))
			: setSelectedItems([...selectedItems, sn]);
	};

	return (
		<div className="border border-gray-300 rounded-lg">
			{course.length === 0 ? (
				<CourseItemNone />
			) : (
				<>
					<CheckAll
						checked={selectedItems.length === course.length}
						onChange={() =>
							selectedItems.length === course.length
								? setSelectedItems([])
								: setSelectedItems(course.map(v => v.SN))
						}
					/>
					{course.map(item => (
						<CourseItem
							key={item.SN}
							item={item}
							checked={selectedItems.includes(item.SN)}
							onChange={() => handleToggleChecked(item.SN)}
							removeItem={removeItem}
						/>
					))}

					<CouponModal />
				</>
			)}
		</div>
	);
}
