import React, { useEffect, useState } from 'react';
import Search from '../../courses/search/search';
import CardSec from '../../courses/card/cardsec';
import toast, { Toaster } from 'react-hot-toast';

import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
const MySwal = withReactContent(Swal);

export default function CardSecList({ domain, rawDomain, setDomain }) {
	const [search, setSearch] = useState('');
	const [alert, setAlert] = useState('');
	const [hover, setHover] = useState(false);
	const [focus, setFocus] = useState(false);
	const bookmark = () => {
		MySwal.fire({
			title: `<p style="font-size: 1.5rem;">成功加入收藏清單</p>`,
			icon: 'success',
			timer: 2000
		});
};
	const unbookmark = () => {
		MySwal.fire({
			title: `<p style="font-size: 1.5rem;">已移除收藏清單</p>`,
			icon: 'success',
			timer: 2000
		});
	};
	const [sortOrder, setSortOrder] = useState('asc'); // 價錢排序順序狀態，默認為升序
	const [sortTime, setSortTime] = useState('asc'); // 時間排序順序狀態，默認為升序

	const handleSortClick = () => {
		const sortedDomain = [...domain].sort((a, b) => {
			if (sortOrder === 'asc') {
				return a.Price - b.Price;
			} else {
				return b.Price - a.Price;
			}
		});
		setDomain(sortedDomain);
		setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
	};
	const handleTimeClick = () => {
		const sortedTime = [...domain].sort((a, b) => {
			if (sortTime === 'asc') {
				return a.Price - b.Price;
			} else {
				return b.Price - a.Price;
			}
		});
		setDomain(sortedTime);
		setSortTime(sortTime === 'asc' ? 'desc' : 'asc');
	};


	useEffect(() => {
		setDomain(rawDomain.filter(course => course.Name.includes(search)))
	}, [search]);

	return (
		<>
			<div className="">
				<div className=" mt-3  w-full lg:mb-6 lg:mt-6  lg:px-0 ">
					<div className="my-4 w-full  inline-flex items-center justify-between flex-col md:flex-row">
						<div className=" flex items-center  text-Black-800 font-semibold text-2xl text-Black-900  ">
							共有
							<span className=" text-orange-600  font-semibold ms-1 py-0.5 px-1.5 text-2xl "
							>{domain.length}
							</span>
							筆{' '}
							<span className=" text-orange-600  font-semibold ms-1 py-0.5 px-1.5 text-2xl "></span>
							課程
						</div>

						<div className=" items-center flex flex-wrap ">
							<div className="py-5 flex flex-wrap items-center mx-auto">
								<div className="px-4 py-[3px] lg:px-5 lg:py-2 text-lg font-bold">排序：</div>
								<button
									className={`px-4 py-[3px] lg:px-5 lg:py-2 border-gray-300 border rounded-full transition-all duration-[0.3s] ease-[ease] delay-[0s] border-solid
									hover:bg-orange-400 hover:text-white hover:border-none hover:font-semibold' focus:outline-none focus:bg-orange-400 focus:text-white focus:font-semibold  font-normal `}
									onClick={handleTimeClick}>
									{sortTime === 'asc' ? '上架日期舊到新' : '上架日期新到舊'}
								</button>
								<button
									className={`px-4 py-[3px] lg:px-5 lg:py-2 border-gray-300 border rounded-full transition-all duration-[0.3s] ease-[ease] delay-[0s] border-solid
									hover:bg-orange-400 hover:text-white hover:border-none hover:font-semibold' focus:outline-none focus:bg-orange-400 focus:text-white focus:font-semibold  font-normal `}
									onClick={handleSortClick}>
									{sortOrder === 'asc' ? '價格低到高' : '價格高到低'}
								</button>
								
							</div>
							<Search setSearch={setSearch} />
						</div>
					</div>

					<div className="p-3 sm:p-0" >
						<Toaster />
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:grid-cols-2 lg:grid-cols-3 ">
							{domain.map(v => {
								return (
									<CardSec
										data={v}
										key={v.SN}
										setSearch={setSearch}
										Search={Search}
										setAlert={setAlert}
										alert={alert}
										bookmark={bookmark}
										unbookmark={unbookmark}
										setSortOrder={setSortOrder}
										setSortTime={setSortOrder}
									/>
								);

							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
