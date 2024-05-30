import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import CardSecList from '../card/cardseclist';
import ReactPaginate from 'react-paginate';


export default function Category() {
	const mainArray = ['程式學習', '軟體開發', '職場技能', '設計', '語言創作']
	const objArray = [
		{ id: 1, text: ['程式入門', '資料科學', '網頁前端', '網頁後端', '手機程式開發', '網站架設', '更多程式'] },
		{ id: 2, text: ['遊戲開發', '軟體程式開發與維護'] },
		{ id: 3, text: ['獨立接案', '求職', '效率提升'] },
		{ id: 4, text: ['平面設計', '應用設計', '介面設計', '電腦繪圖'] },
		{ id: 5, text: ['日文', '手作小物'] },
	];

	const [hover, setHover] = useState(false);
	const [focus, setFocus] = useState(false);
	const [selectedTextIndex, setSelectedTextIndex] = useState(null); // 預設選擇第一個文本索引
	const [activeDiv, setActiveDiv] = useState(null); // 預設點擊第一個 div
	const [domain, setDomain] = useState([]);//當前領域資料
	const [rawDomain, setRawDomain] = useState([]); //原始領域資料
	const [count, setCount] = useState(29); //當前課程筆數


	const handleDivClick = (index) => {
		// 更新點擊的 div 和按鈕顯示的文本索引
		setActiveDiv(index);
	};


	const [page, setPage] = useState(1); // 追蹤當前頁面
	const [perPage] = useState(4); // 每頁顯示的課程數量
	const [data, setData] = useState([]);//api顯示的資料
	const [total, setTotal] = useState(0);//總資料筆數
	const [displayedData, setDisplayedData] = useState([]); //顯示的資料
	// const [pagecount, setPageCount] = useState(0); //總頁數


	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/api/courselist`);
				const data = res.data;
				setDomain(data);
				setRawDomain(data)
			} catch (error) {
				console.error('獲取課程數據時出錯', error);
			}
		};
		fetchData();
	}, []);

	





useEffect(() => {
	const data = activeDiv === null
		? rawDomain
		: rawDomain.filter(
			item => objArray[activeDiv].text.some(domain => item.DomainName === domain)
		);
	setDomain(data);

	setSelectedTextIndex(null);
}, [activeDiv]);

useEffect(() => {
	const data = selectedTextIndex === null
		? rawDomain.filter(
			item => objArray[activeDiv].text.some(domain => item.DomainName === domain)
		)
		: rawDomain.filter(
			item => item.DomainName === objArray[activeDiv].text[selectedTextIndex]
		);
	setDomain(data);
}, [selectedTextIndex]);

	// useEffect(() => {
	// 	// 根據當前頁面和每頁顯示的課程數量計算要顯示的課程資料
	// 	const startIndex = (page - 1) * perPage; //第一頁
	// 	const endIndex = startIndex + perPage; // 最後一頁
	// 	setDisplayedData(data.slice(startIndex, endIndex));
	// }, [data, page, perPage]);

	// const nextPage = () => {
	// 	if (page < pagecount) setPage(page + 1);
	// };

	// const prevPage = () => {
	// 	if (page > 1) setPage(page - 1);
	// };
	// //當前頁面的頁碼
	// const setPageNumber = (pageNum) => {
	// 	setPage(pageNum);
	// };

	// if (domain.length <= perPage) {
	// 	return (
	// 		<div variant="contained" onClick={() => setPageNumber(1)} disabled={page === 1}>
	// 			1
	// 		</div>
	// 	);
	// } else if (domain.length >= 9) {
	// 	const buttons = [];
	// 	for (let i = 1; i <= 3; i++) {
	// 		buttons.push(
	// 			<button key={i} variant="contained" onClick={() => setPageNumber(i)} disabled={page === i}>
	// 				{i}
	// 			</button>
	// 		);
	// 	}
	// 	return buttons;
	// } else {
	// 	{ '頁碼錯誤' }
	// }

return (
	<>
		{/* <div className='flex '>
			<button variant="outlined" onClick={prevPage} disabled={page === 1}>{'<'}</button>
			{renderPaginationButtons()}
			<button variant="outlined" onClick={nextPage} disabled={page * perPage >= data.length}>{'>'}</button>
		</div> */}
		<div className="container">
			<div className="mb-3 mt-3 w-full lg:mb-6 lg:mt-6 sm:px-7">

				<div className="flex items-center whitespace-nowrap">
					<li className="mt-10 lg:pl-0 inline-flex items-end">
						<div
							className="flex items-center text-Black-800 font-semibold text-2xl text-Black-900 hover:text-blue-600 focus:outline-none focus:text-blue-600"

						>
							所有領域
						</div>
						<div className=" text-blue-500 font-bold pl-8 flex justify-start items-center  text-Black-800  text-base ">
							改變從此開始，輕鬆掌握新技能！{' '}
						</div>
					</li>
				</div>
				<div className="  py-5 lg:grid grid-cols-5 gap-8 flex overflow-x-auto md:gap-2 scroll-smooth snap-x">
					{objArray.map((category, index) => (
						<div
							key={category.id}
							className="w-[180px] h-[120px] bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black rounded-lg hover:scale-110 transition-transform duration-500 ease-in-out"
						>
							<button
								className="w-[180px] h-[120px] justify-center items-center font-bold text-2xl text-white  bg-cover bg-no-repeat rounded-md hover:text-3xl flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-120 transition-transform duration-500 ease-in-out contrast-75"
								href="#"
								onClick={() => handleDivClick(index)}
								style={{ backgroundImage: `url('/image/topic${category.id}.png')` }}
							>
								<span className="  bg-opacity-25  -inset-0 -skew-x-6 bg-red-900 relative before:text-white">
									{mainArray[index]}
								</span>

							</button>
						</div>
					))}
				</div>
				<div className="lg:py-5 gap-6 sm:gap-2 inline-flex flex-wrap lg:font-semibold sm:font-semibold text-center text-gray-700" id="section">
					{objArray[activeDiv]?.text.map((text, index) => (
						<button

							key={index}
							className={`px-4 py-[3px] lg:px-5 lg:py-2 border-gray-300 border rounded-full transition-all duration-[0.3s] ease-[ease] delay-[0s] border-solid
									${hover ? 'hover:bg-orange-400 hover:text-white hover:border-none hover:font-semibold' : ''}
									${focus ? 'focus:outline-none focus:bg-orange-400 focus:text-white focus:font-semibold' : ''}`}
							onMouseEnter={() => setHover(true)}
							onMouseLeave={() => setHover(false)}
							onFocus={() => setFocus(true)}
							onBlur={() => setFocus(false)}
							onClick={() => setSelectedTextIndex(index)}
						>
							{text}
						</button>

					))}
				</div>
				<CardSecList count={count} setCount={setCount} domain={domain} rawDomain={rawDomain} setDomain={setDomain} />



			</div>
		</div>
	</>
);
}