import React, { useEffect, useRef, useState } from 'react';
import { IoArrowBackCircle, IoArrowForwardCircle } from 'react-icons/io5';

import Slide from './slide';

export default function Slideshow() {
	const [courses, setCourses] = useState([]);
	const data = async () => {
		const url = `/api/course?limit=11`;
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data)
			//確定資料是陣列資料類型才設定到狀態當中
			if (Array.isArray(data)) {
				setCourses(data);
			}
		} catch (e) {
			console.error(e);
			setCourses([]);
		}
	};
	useEffect(() => {
		data();
	}, []);

	return (
		<>
			<div className="container ">
				{/* 輪播 */}
				
				{/*  */}
				<div
					data-hs-carousel='{"loadingClasses": "opacity-0","isAutoPlay": true}'
					className=" lg:mb-6 lg:mt-8 px-7  h-full lg:h-80"
				>
					<div className="inline-flex justify-between font-semibold text-2xl text-Black-900 mb-2 mt-3  w-full lg:mb-2 lg:mt-6  " >
						<div className="w-full ">精選課程</div>
						<div className=" relative flex w-full space-x-3 items-center justify-end ">
							<button
								type="button"
								className=" hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none   justify-center items-center  text-orange-500  hover:bg-gray-800/10 rounded-s-lg">
								<span
									className="text-"
									aria-hidden="true">
									<IoArrowBackCircle className="size-10 lg:size-12" />

								</span>
								<span className="sr-only">Previous</span>

							</button>
							<button
								type="button"
								className=" hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none   justify-center items-center  text-orange-500 hover:bg-gray-800/10 rounded-s-lg">
								<span className="sr-only">Next</span>
								<span
									className="text-2xl"
									aria-hidden="true">
									<IoArrowForwardCircle className="size-10 lg:size-12" />
								</span>
							</button>

						</div>
					</div>

					<div className=" hs-carousel relative overflow-hidden w-full     min-h-auto  rounded-lg"
					>
						<div className="hs-carousel-body   flex flex-nowrap transition-transform duration-700 opacity-0 ">
							
							{courses.reduce((pv, cv, i) => {
								return i % 2 === 0
									? [...pv, <Slide key={i / 2} data={[cv, courses[i + 1]]} />]
									: pv;
							}, [])}
						</div>
					</div>

					<div className="hs-carousel-pagination flex lg:mt-0  w-full flex-nowrap  justify-center  space-x-2">
						{[...Array(Math.ceil(courses.length / 2)).keys()].map(
							v => <span key={v} className=" hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-md w-6 h-2 cursor-pointer"></span>)}
					</div>
				</div>


			</div>
			

		</>
	);
}

