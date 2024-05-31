import React from 'react';
import Typewriter from './type';

export default function BannerText() {
	return (
		<>
			<div className="place-content-center p-8 sm:items-center lg:items-center lg:justify-center">
				<div className="sm:items-center sm:justify-center font-semibold text-white text-4xl md:text-5xl lg:text-6xl">
					今天想學
					{/* <div className="w-[500px] border">
						<Typewriter
							text="      烹飪______?"
							typingSpeed={80}
						/>
					</div> */}
				</div>

				<div className="my-8">
					<div className="inline-block shadow-xl font-bold text-lg lg:text-3xl bg-clip-text text-yellow-300 text-transparent">
						<Typewriter
							text="知識的力量開闊視野，讓我們一起探索無限廣闊的學習旅程 !"
							typingSpeed={200}
						/>
					</div>
				</div>
				{/* <div className=" mt-20 lg:mt-40  flex items-center justify-center   ">
					<a
						className=" lg:mt-40 animate-pulse py-3 px-4 items-center gap-x-2 text-base lg:text-xl font-semibold rounded-lg border border-transparent bg-orange-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
						href="#">
						開啟探索之旅
					</a>
				</div> */}
				<a
					href="#"
					className="mt-20 lg:mt-40 xl:mt-96 flex justify-center my-0 sm:h-16 lg:h-32 lg:w-full">
					<img
						className=" sm:h-15 sm:w-16 lg:h-25 lg:w-32"
						src="/images/Animation - 1715325080679.gif"
						alt=""
					/>
				</a>
			</div>
		</>
	);
}
