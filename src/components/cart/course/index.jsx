import { useState, useEffect } from 'react';
import { useCart } from '@/hooks/useCart';

export default function CourseList() {
	const { addItemToCart } = useCart();

	const [courses, setCourse] = useState([]);

	useEffect(() => {
		const getCourse = async () => {
			const url = '/api/course';
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

	return (
		<div className="grid grid-cols-3 gap-4 my-4">
			{courses.map((course, i) => (
				<div
					className="flex flex-col bg-white border-2 shadow-sm rounded-xl"
					key={i}>
					<div className="p-4 md:p-5 flex flex-col gap-3">
						<img
							class="w-full h-auto rounded-t-xl"
							src={course.Filename}
							alt={course.Name}
						/>

						<h3 className="font-bold text-gray-800 dark:text-white">
							{course.Name}
						</h3>
						<p>價格：{course.Price}</p>
						<button
							className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
							onClick={() => addItemToCart(course)}>
							加到購物車
						</button>
					</div>
				</div>
			))}
		</div>
	);
}
