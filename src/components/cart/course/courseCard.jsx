import React from 'react';

export default function CourseCard({ name, price }) {
	return (
		<div className="flex flex-col bg-white border-2 shadow-sm rounded-xl">
			<div className="p-4 md:p-5 flex flex-col gap-3">
				<h3 className="text-lg font-bold text-gray-800 dark:text-white">
					{name}
				</h3>
				<p>價格：{price}</p>
				<button
					className="mt-2 py-2 px-3 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
					onClick={() => {
						addItem(v);
					}}>
					加到購物車
				</button>
			</div>
		</div>
	);
}
