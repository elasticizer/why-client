/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import CourseCard from '@/components/home/card-modules/courseCard';
import { useState, useEffect } from 'react';

export default function Course() {
	const [page, setPage] = useState(1); // 追蹤當前頁面
	const [perPage] = useState(3); // 每頁顯示的課程數量
	const [data, setData] = useState([]);
	const [displayedData, setDisplayedData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('/api/course');
				let postData = await res.json();
				setData(postData);
			} catch (error) {
				setData([]);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		// 根據當前頁面和每頁顯示的課程數量計算要顯示的課程資料
		const startIndex = (page - 1) * perPage;
		const endIndex = startIndex + perPage;
		setDisplayedData(data.slice(startIndex, endIndex));
	}, [data, page, perPage]);

	const nextPage = () => {
		setPage(page + 1);
	};

	const prevPage = () => {
		setPage(page - 1);
	};

	return (
		<>
			<section className="bg-gray-100">
				<div className="course max-w-[75rem] mx-auto px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
					<div className="mb-3 flex justify- text-2xl font-semibold justify-between">
						<h1 className="flex items-center">最新課程</h1>
						<div className="flex gap-3 items-center ">
							<button
								className="rounded-full	border-solid border-2 border-gray-600 p-3 hover:scale-110 transition"
								onClick={prevPage}
								disabled={page === 1}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-chevron-left"
									viewBox="0 0 16 16">
									<path
										fill-rule="evenodd"
										d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
									/>
								</svg>
							</button>
							<button
								className="rounded-full	border-solid border-2 border-gray-600 p-3 hover:scale-110 transition"
								onClick={nextPage}
								disabled={page * perPage >= data.length}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									fill="currentColor"
									className="bi bi-chevron-right"
									viewBox="0 0 16 16">
									<path
										fill-rule="evenodd"
										d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"
									/>
								</svg>
							</button>
						</div>
					</div>
					<div className="flex flex-wrap sm:justify-start sm:flex-nowrap w-full text-sm py-4  gap-x-8">
						{displayedData.map((course, i) => (
							<CourseCard
								key={i}
								title={course.Name}
								content={course.Intro}
							/>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
