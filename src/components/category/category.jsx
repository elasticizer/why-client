import React, { useEffect, useState } from 'react';
const getData = async () => {
	const data = await fetch('/api/cat');
	const r = await data.json();
	return r;
};
export default function Category() {
	const objArray = [
		{
			id: 1,
			text: ['設計', '平面設計', '應用設計', '介面設計'],
		},
		{
			id: 2,
			text: ['語言', '日文'],
		},
		{
			id: 3,
			text: ['職場技能', '獨立接案', '求職', '效率提升'],
		},
		{
			id: 4,
			text: ['網站架設', '網頁後端', '網頁前端', '網頁後端', '程式入門', '手機程式開發'],
		},
		{
			id: 5,
			text: ['職場技能', '獨立接案', '求職', '效率提升'],
		},
	]
	const [hover, setHover] = useState(false);
	const [focus, setFocus] = useState(false);
	const [selectedTextIndex, setSelectedTextIndex] = useState(0); // 預設選擇第一个文本索引
	const [activeDiv, setActiveDiv] = useState(0); // 預設點擊第一个 div

	const handleDivClick = (index) => {
		// 更新點擊的 div 和按鈕顯示的文本索引
		setActiveDiv(index);
		setSelectedTextIndex(0); // 將點擊的文本索引預設為第一個
	};

	const [data, setData] = useState([]);
	const haddler = async () => {
		const r = await getData();
		setData(r);
	};
	useEffect(() => {
		haddler();
	}, []);
	console.log(data);
	data;
	return (
		<>
			<div className="container  ">


				<div className="mb-3 mt-3  w-full lg:mb-6 lg:mt-6 sm:px-7 ">
					{/* <h1 className="pb-5">探索領域</h1> */}
					<div
						className=" flex 
					items-center whitespace-nowrap ">
						<li className=" mt-10 lg:pl-0 inline-flex items-center">
							<a
								className=" flex items-center  text-Black-800 font-semibold text-2xl text-Black-900 hover:text-blue-600 focus:outline-none focus:text-blue-600 "
								href="#">
								所有領域
							</a>
						</li>
					</div>
					<div className="   py-5 lg:grid grid-cols-5  gap-8 flex overflow-x-auto  md:gap-2 scroll-smooth snap-x  ">
						<div className="  w-[180px] h-[120px]  bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black   rounded-lg hover:scale-110 transition-transform duration-500 ease-in-out  ">
							<button
								className="w-[180px] h-[120px]  justify-center items-center font-bold text-2xl text-white  bg-cover bg-no-repeat bg-[url('/image/topic5.png')] rounded-md  hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-120 transition-transform duration-500 ease-in-out  "
								href="#"
								// 添加點擊事件處理函数，傳入對應的 index
								onClick={() => handleDivClick(0)}>
								設計創新
							</button>


						</div>

						<div className="w-[180px] h-[120px]  bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black  rounded-lg  hover:scale-110 transition-transform duration-500 ease-in-out  ">
							<button
								className="justify-center items-center font-bold text-2xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/image/topic4.png')] rounded-md hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-120 transition-transform duration-500 ease-in-out "
								href="#"
								// 添加點擊事件處理函数，傳入對應的 index
								onClick={() => handleDivClick(1)}>
								語言學習
							</button>
						</div>
						<div className=" w-[180px] h-[120px]  bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black  rounded-lg   hover:scale-110 transition-transform duration-500 ease-in-out  ">
							<button
								className="  justify-center items-center font-bold text-2xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/image/topic9.png')] rounded-md hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-120 transition-transform duration-500 ease-in-out "
								href="#"
								// 添加點擊事件處理函数，傳入對應的 index
								onClick={() => handleDivClick(2)}>
								職場技能
							</button>
						</div>
						<div className=" w-[180px] h-[120px] bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black  rounded-lg hover:scale-110 transition-transform duration-500 ease-in-out  ">
							<button
								className="  justify-center items-center font-bold text-2xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/image/topic2.png')] rounded-md hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60  hover:scale-120 transition-transform duration-500 ease-in-out"
								href="#" onClick={() => handleDivClick(3)}>
								軟體應用
							</button>
						</div>
						<div className="w-[180px] h-[120px]  bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black  rounded-lg  hover:scale-110 transition-transform duration-500 ease-in-out   ">
							<button
								className="  justify-center items-center font-bold text-2xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/image/topic1.png')] rounded-md hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60  hover:scale-120 transition-transform duration-500 ease-in-out"
								href="#" onClick={() => handleDivClick(4)}>
								職場技能
							</button>
						</div>

					</div>

					{/* 手機版 */}


					<div className="lg:py-5 gap-6 sm:gap-2 inline-flex flex-wrap lg:font-semibold sm:font-semibold text-center text-gray-700" id="section">

						{objArray[activeDiv].text.map((text, index) => (
							<button
								key={index}
								className={`px-4 py-[3px] lg:px-5 lg:py-2 border-gray-300 border rounded-full transition-all duration-[0.3s] ease-[ease] delay-[0s] border-solid
                            ${hover ? 'hover:bg-orange-400 hover:text-white hover:border-none hover:font-semibold' : ''}
                            ${focus ? 'focus:outline-none focus:bg-orange-400 focus:text-white focus:font-semibold' : ''}`}
								onMouseEnter={() => setHover(true)}
								onMouseLeave={() => setHover(false)}
								onFocus={() => setFocus(true)}
								onBlur={() => setFocus(false)}
							>
								{text}
							</button>
						))}

						<button></button>
					</div>
				</div>
			</div>
		</>
	);
}
