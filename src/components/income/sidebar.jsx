import React from 'react';
import { useState, useEffect } from 'react';

export default function Sidebar() {
	const [courseCount, setCourseCount] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('/api/income/courseCount');
				let postData = await res.json();
				setCourseCount(postData);
			} catch (error) {
				setCourseCount([]);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<div className="mb-10 lg:col-span-1 lg:w-full lg:h-fit bg-gray-100 lg:from-gray-50 rounded-xl lg:via-transparent lg:to-transparent dark:from-neutral-800">
				<div className="sm:p-4 lg:px-8 flex lg:flex-col md:flex-row md:justify-center md:gap-6 lg:gap-1 md:items-center sm:justify-around sm:items-center">
					{/* 會員 */}
					<div className="group flex sm:flex-col lg:flex-row items-center gap-x-3 gap-y-3 lg:mb-5 dark:border-neutral-700">
						<a
							className="block flex-shrink-0"
							href="#">
							<img
								className="size-10 rounded-full"
								src="https://images.unsplash.com/photo-1669837401587-f9a4cfe3126e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
								alt="Image Description"
							/>
						</a>
						<a
							className="group grow block"
							href="">
							<h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
								Leyla Ludic
							</h5>
						</a>
					</div>
					{/* 會員狀態 */}
					<div className="flex lg:flex-col lg:space-y-4 lg:space-x-0 md:flex-row md:space-x-4 sm:space-x-4">
						{/* Card */}
						<div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
							<div className="p-2 md:p-3 lg:w-48 md:w-32 sm:w-32">
								<div className="flex items-center gap-x-2">
									<p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
										課程銷售數據
									</p>
								</div>
								<div className="mt-1 flex items-center gap-x-2">
									<p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
										{courseCount.TotalCourses} 堂
									</p>
								</div>
							</div>
						</div>
						{/* End Card */}
						{/* Card */}
						<div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
							<div className="p-2 md:p-3 md:w-32 sm:w-32">
								<div className="flex items-center gap-x-2">
									<p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
										您的總收益為
									</p>
								</div>
								<div className="mt-1 flex items-center gap-x-2">
									<p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
										NT$500
									</p>
								</div>
							</div>
						</div>
						{/* End Card */}
						{/* Card */}
						<div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
							<div className="p-2 md:p-3 md:w-32 sm:w-32">
								<div className="flex items-center gap-x-2">
									<p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
										已開設
									</p>
								</div>
								<div className="mt-1 flex items-center gap-x-2">
									<p className="text-xl sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
										1 堂課
									</p>
								</div>
							</div>
						</div>
						{/* End Card */}
					</div>
				</div>
			</div>
		</>
	);
}
