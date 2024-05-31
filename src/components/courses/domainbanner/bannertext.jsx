import React from 'react';
import Typewriter from './type';

export default function BannerText() {
	return (
		<>
			<div className="place-content-center p-8 sm:items-center lg:items-center lg:justify-center">
				<div className="sm:items-center sm:justify-center font-semibold text-white text-4xl md:text-5xl lg:text-6xl">
					今天想學什麼...?
				</div>

				<div className="my-8">
					<div className="inline-block shadow-xl font-bold text-lg lg:text-3xl bg-clip-text text-yellow-300 text-transparent">
						<Typewriter
							text="知識的力量開闊視野，讓我們一起探索無限廣闊的學習旅程 !"
							typingSpeed={200}
						/>
					</div>
				</div>
				<a href="#" className=" mt-20 lg:mt-40 xl:mt-96  flex  justify-center my-0  sm:h-16  lg:h-32 lg:w-full ">
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
