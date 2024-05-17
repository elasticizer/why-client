import React from 'react';

export default function CourseCard({ name, price, intro }) {
	return (
		<div className="flex flex-col bg-white border-2 shadow-sm rounded-xl w-1/4">
			<div className="p-4 md:p-5 flex flex-col gap-3">
				<h3 className="text-lg font-bold text-gray-800 dark:text-white">
					{name}
				</h3>
				<p className="line-clamp-3">{intro}</p>
				<p>價格：{price}</p>
				<a
					className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
					href="#">
					加到購物車
				</a>
			</div>
		</div>
	);
}
