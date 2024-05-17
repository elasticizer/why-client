import React, { useEffect, useState } from 'react';
import CourseList from './cltest';



const getData = async () => {
	const data = await fetch('/api/cat');
	const r = await data.json();
	return r;
};
export default function Category() {
	const objArray = [
		{
			id: 1,
			text: ['所有', '室內設計', 'UI/UX', '視覺傳達', '動態設計', '平面設計', '網頁設計'],
		},
		{
			id: 2,
			text: ['所有', '英文', '日文', '德文', '法文', '韓文', '西班牙'],
		},
		{
			id: 3,
			text: ['所有', '文案', '社群媒體', '數據分析'],
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
	
				{/* <CourseList /> */}
				<div className="mb-3 mt-3  w-full lg:mb-6 lg:mt-6 sm:px-7 ">
					<h1 className="pb-5">探索領域</h1>
					<div
						className=" flex 
					items-center whitespace-nowrap ">
						<li className="  lg:pl-0 inline-flex items-center">
							<a
								className=" flex items-center text-4xl text-Black-800 hover:text-blue-600 focus:outline-none focus:text-blue-600 "
								href="#">
								所有領域
							</a>
						</li>
					</div>
					<div className="  sm:hidden py-5 lg:grid grid-cols-5  gap-8 ">
						<div className="  w-[180px] h-[120px]  bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black  rounded-lg hover:scale-110 transition-transform duration-500 ease-in-out  ">
							<button
								className="w-[180px] h-[120px]  justify-center items-center font-bold text-2xl text-white  bg-cover bg-no-repeat bg-[url('/img/topic5.png')] rounded-md hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-120 transition-transform duration-500 ease-in-out  "
								href="#"
								// 添加點擊事件處理函数，傳入對應的 index
								onClick={() => handleDivClick(0)}>
								設計
							</button>
						</div>

						<div className="w-[180px] h-[120px]  bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black  rounded-lg  hover:scale-110 transition-transform duration-500 ease-in-out  ">
							<button
								className="justify-center items-center font-bold text-2xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic4.png')] rounded-md hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-120 transition-transform duration-500 ease-in-out "
								href="#"
								// 添加點擊事件處理函数，傳入對應的 index
								onClick={() => handleDivClick(1)}>
								語言
							</button>
						</div>
						<div className=" w-[180px] h-[120px]  bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black  rounded-lg   hover:scale-110 transition-transform duration-500 ease-in-out  ">
							<button
								className="  justify-center items-center font-bold text-2xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic9.png')] rounded-md hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-120 transition-transform duration-500 ease-in-out "
								href="#"
								// 添加點擊事件處理函数，傳入對應的 index
								onClick={() => handleDivClick(2)}>
								行銷
							</button>
						</div>
						<div className=" w-[180px] h-[120px] bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black  rounded-lg hover:scale-110 transition-transform duration-500 ease-in-out  ">
							<button
								className="  justify-center items-center font-bold text-2xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic2.png')] rounded-md hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60  hover:scale-120 transition-transform duration-500 ease-in-out"
								href="#">
								音樂
							</button>
						</div>
						<div className="w-[180px] h-[120px]  bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black  rounded-lg  hover:scale-110 transition-transform duration-500 ease-in-out   ">
							<button
								className="  justify-center items-center font-bold text-2xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic1.png')] rounded-md hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60  hover:scale-120 transition-transform duration-500 ease-in-out"
								href="#">
								程式
							</button>
						</div>
						<div className=" w-[180px] h-[120px]  bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black  rounded-lg hover:scale-110 transition-transform duration-500 ease-in-out   ">
							<button
								className="  justify-center items-center font-bold text-2xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic6.png')] rounded-md hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60  hover:scale-120 transition-transform duration-500 ease-in-out"
								href="#">
								程式
							</button>
						</div>
						<div className=" w-[180px] h-[120px] bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black  rounded-lg  hover:scale-110 transition-transform duration-500 ease-in-out  ">
							<button
								className="  justify-center items-center font-bold text-2xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic7.png')] rounded-md hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60  hover:scale-120 transition-transform duration-500 ease-in-out"
								href="#">
								程式
							</button>
						</div>
						<div className=" w-[180px] h-[120px]  bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black  rounded-lg hover:scale-110 transition-transform duration-500 ease-in-out   ">
							<button
								className="  justify-center items-center font-bold text-2xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic2.png')] rounded-md hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60  hover:scale-120 transition-transform duration-500 ease-in-out"
								href="#">
								程式
							</button>
						</div>
						<div className=" w-[180px] h-[120px]  bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black  rounded-lg  hover:scale-110 transition-transform duration-500 ease-in-out  ">
							<button
								className="  justify-center items-center font-bold text-2xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic3.png')] rounded-md hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60  hover:scale-120 transition-transform duration-500 ease-in-out"
								href="#">
								程式
							</button>
						</div>
						<div className="w-[180px] h-[120px]   bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black  rounded-lg  hover:scale-110 transition-transform duration-500 ease-in-out  ">
							<button
								className="  justify-center items-center font-bold text-2xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic4.png')] rounded-md hover:text-3xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60  hover:scale-120 transition-transform duration-500 ease-in-out"
								href="#">
								程式
							</button>
						</div>
					</div>

					{/* 手機版 */}

					<nav className="lg:hidden my-5 pb-1 flex space-x-1 overflow-x-auto  gap-2 sm:scroll-smooth snap-x  ">
						<div className="snap-center rounded-lg   bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black   hover:scale-100 transition-transform duration-500 ease-in-out   ">
							<button
								className="relative  justify-center items-center font-bold text-xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic5.png')] rounded-md hover:text-2xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-100 transition-transform duration-500 ease-in-out"
								href="#"
								onClick={() => handleDivClick(0)}>
								音樂
							</button>
						</div>
						<div className="snap-center rounded-lg   bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black   hover:scale-100 transition-transform duration-500 ease-in-out   ">
							<button
								className="relative  justify-center items-center font-bold text-xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic5.png')] rounded-md hover:text-2xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-100 transition-transform duration-500 ease-in-out"
								href="#"
								onClick={() => handleDivClick(0)}>
								音樂
							</button>
						</div>
						<div className="snap-center rounded-lg   bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black   hover:scale-100 transition-transform duration-500 ease-in-out   ">
							<button
								className="relative  justify-center items-center font-bold text-xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic5.png')] rounded-md hover:text-2xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-100 transition-transform duration-500 ease-in-out"
								href="#"
								onClick={() => handleDivClick(0)}>
								音樂
							</button>
						</div>
						<div className="snap-center rounded-lg   bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black   hover:scale-100 transition-transform duration-500 ease-in-out   ">
							<button
								className="relative  justify-center items-center font-bold text-xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic5.png')] rounded-md hover:text-2xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-100 transition-transform duration-500 ease-in-out"
								href="#"
								onClick={() => handleDivClick(0)}>
								音樂
							</button>
						</div>
						<div className="snap-center rounded-lg   bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black   hover:scale-100 transition-transform duration-500 ease-in-out   ">
							<button
								className="relative  justify-center items-center font-bold text-xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic5.png')] rounded-md hover:text-2xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-100 transition-transform duration-500 ease-in-out"
								href="#"
								onClick={() => handleDivClick(0)}>
								音樂
							</button>
						</div>
						<div className="snap-center rounded-lg   bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black   hover:scale-100 transition-transform duration-500 ease-in-out   ">
							<button
								className="relative  justify-center items-center font-bold text-xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic5.png')] rounded-md hover:text-2xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-100 transition-transform duration-500 ease-in-out"
								href="#"
								onClick={() => handleDivClick(0)}>
								音樂
							</button>
						</div>
						<div className="snap-center rounded-lg   bg-gradient-to-t from-black to-white text-white hover:bg-gradient-to-b hover:from-blue-200 hover:via-white hover:to-black   hover:scale-100 transition-transform duration-500 ease-in-out   ">
							<button
								className="relative  justify-center items-center font-bold text-xl text-white w-[180px] h-[120px] area bg-cover bg-no-repeat bg-[url('/img/topic5.png')] rounded-md hover:text-2xl  flex hover:shadow-xl hover:duration-300 hover:ease-in active:ease-in  hover:text-white-900 hover:prose-headings hover:opacity-60 hover:scale-100 transition-transform duration-500 ease-in-out"
								href="#"
								onClick={() => handleDivClick(0)}>
								音樂
							</button>
						</div>

					</nav>
					<hr />
					
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
					</div>
				</div>
			</div>
		</>
	);
}
