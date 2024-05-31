/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useState, useEffect } from 'react';
import ArticleCard from '@/components/home/card-modules/articleCard';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

export default function Article() {
	const [page, setPage] = useState(1); // 追蹤當前頁面
	const perPage = 4; // 每頁顯示的課程數量
	const [data, setData] = useState([]);
	const [displayedData, setDisplayedData] = useState([]);

	const articleImg = [
		{
			fileName: 'https://images.hahow.in/images/63ef53d97d2d72531f7a642e'
		},
		{
			fileName: 'https://images.hahow.in/images/65f8fdd758ed1b0b6bf3979b'
		},
		{
			fileName: 'https://images.api.hahow.in/images/61b97d994cff59000652b71c'
		},
		{
			fileName: 'https://images.hahow.in/images/64099bbc3f5d66df7fb6f75d'
		},
		{
			fileName: 'https://images.hahow.in/images/642697be3101425220f1230e'
		},
		{
			fileName: 'https://images.api.hahow.in/images/60c376fbfc01bc126e64481b'
		},
		{
			fileName: 'https://images.api.hahow.in/images/61b1cf8d5e59480006ceb93e'
		},
		{
			fileName: 'https://images.hahow.in/images/66442de539fb1ff838b4ba96'
		}
	];

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('/api/article?limit=8');
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
			<div className="bg-orange-400">
				{/* <!-- Card Blog --> */}
				<div
					className="max-w-[75rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
					data-aos="zoom-in-up">
					<div className="mb-3 flex justify- text-2xl font-semibold justify-between">
						<div className="flex flex-col justify-items-start gap-3 md:flex-row md:items-center text-white">
							<h1>精選文章</h1>
							<p className="text-sm font-light">為你嚴選系列文章</p>
						</div>
						<div className="flex gap-3 items-center ">
							<button
								className="rounded-full	border-solid border-2 border-gray-600 p-3 hover:scale-110 transition"
								onClick={prevPage}
								disabled={page === 1}>
								<IoIosArrowBack />
							</button>
							<button
								className="rounded-full	border-solid border-2 border-gray-600 p-3 hover:scale-110 transition"
								onClick={nextPage}
								disabled={page * perPage >= data.length}>
								<IoIosArrowForward />
							</button>
						</div>
					</div>
					{/* <!-- Grid --> */}
					<div className="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
						{/* <!-- Card --> */}
						{displayedData.map((article, i) => (
							<ArticleCard
								key={i}
								title={article.Title}
								content={article.Content}
								author={article.Nickname}
								image={articleImg[i + (page - 1) * perPage].fileName}
							/>
						))}
						{/* <!-- End Card --> */}
					</div>
					{/* <!-- End Grid --> */}
				</div>
				{/* <!-- End Card Blog --> */}
			</div>
		</>
	);
}
