import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardSecList from '../card/cardseclist';

export default function Category() {
	const mainArray = ['程式學習', '軟體開發', '職場技能', '設計', '語言創作'];
	const objArray = [
		{ id: 1, text: ['程式入門', '資料科學', '網頁前端', '網頁後端', '手機程式開發', '網站架設', '更多程式'] },
		{ id: 2, text: ['遊戲開發', '軟體程式開發與維護'] },
		{ id: 3, text: ['獨立接案', '求職', '效率提升'] },
		{ id: 4, text: ['平面設計', '應用設計', '介面設計', '電腦繪圖'] },
		{ id: 5, text: ['日文', '手作小物'] }
	];

	const [hover, setHover] = useState(false);
	const [focus, setFocus] = useState(false);
	const [selectedTextIndex, setSelectedTextIndex] = useState(null);
	const [activeDiv, setActiveDiv] = useState(null);
	const [domain, setDomain] = useState([]);
	const [rawDomain, setRawDomain] = useState([]);
	const [count, setCount] = useState(29);
	


	const handleDivClick = index => {
		setActiveDiv(index);
	};

	
	const [page, setPage] = useState(1);
	const [perPage] = useState(4);
	const [data, setData] = useState([]);
	const [total, setTotal] = useState(0);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(`/api/courselist`);
				const data = res.data;
				setDomain(data);
				setRawDomain(data);
			} catch (error) {
				console.error('獲取課程數據時出錯', error);
			}
		};
		fetchData();
	}, []);

	useEffect(() => {
		const data =
			activeDiv === null
				? rawDomain
				: rawDomain.filter(item =>
					objArray[activeDiv].text.some(domain => item.DomainName === domain)
				);
		setDomain(data);
		setSelectedTextIndex(null);
	}, [activeDiv]);

	useEffect(() => {
		const data =
			selectedTextIndex === null
				? rawDomain.filter(item =>
					objArray[activeDiv].text.some(domain => item.DomainName === domain)
				)
				: rawDomain.filter(
					item =>
						item.DomainName === objArray[activeDiv].text[selectedTextIndex]
				);
		setDomain(data);
	}, [selectedTextIndex]);

	return (
		<>
			<div className="container">
				<div className="w-full px-7">
					<div className="flex items-center whitespace-nowrap">
						<li className="mt-10 lg:pl-0 inline-flex items-end">
							<div className="flex items-center text-Black-800 font-semibold text-2xl text-Black-900 hover:text-blue-600 focus:outline-none focus:text-blue-600">
								全部領域
							</div>
							<div className=" text-blue-500 font-bold pl-8 flex justify-start items-center  text-Black-800  text-base ">
								改變從此開始，輕鬆掌握新技能！{' '}
							</div>
						</li>
					</div>
					<div className="py-5 lg:grid grid-cols-5 gap-8 flex overflow-x-auto md:gap-5 scroll-smooth snap-x">
						{objArray.map((category, index) => (
							<div
								data-aos="zoom-out-down"
								key={category.id}
								className="w-[180px] h-[120px] bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black rounded-lg hover:scale-110 transition-transform duration-500 ease-in-out">
								<button
									className="w-[180px] h-[120px] justify-center items-center font-bold text-2xl text-white  bg-cover bg-no-repeat rounded-md hover:text-3xl flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-120 transition-transform duration-500 ease-in-out contrast-75"
									href="#"
									onClick={() => handleDivClick(index)}
									style={{
										backgroundImage: `url('/images/topic${category.id}.png')`
									}}>
									<span className="bg-opacity-25 -inset-0 -skew-x-6 bg-red-900 relative before:text-white">
										{mainArray[index]}
									</span>
								</button>
							</div>
						))}
					</div>
					
					<div
						className="lg:py-5 gap-6 sm:gap-2 inline-flex flex-wrap lg:font-semibold sm:font-semibold text-center text-gray-700"
						id="section">

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
								onClick={() => setSelectedTextIndex(index)}>
								{text}
							</button>
						))}
					</div>
					<CardSecList
						count={count}
						setCount={setCount}
						domain={domain}
						rawDomain={rawDomain}
						setDomain={setDomain}
						
					/>
				</div>
			</div>
		</>
	);
}
