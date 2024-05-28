import React, { useState, useEffect } from 'react';

export default function Card({
	key,
	CourseSN,
	Name,
	Nickname,
	DomainName,
	Filename }) {

	const [progress, setProgress] = useState('');
	useEffect(() => {
		const progress = () => { return Math.floor(Math.random() * 100); };
		setProgress(progress());
	}, []);


	return (

		<div className="flex w-full shadow-sm ring-1 ring-inset ring-gray-300 md:flex-col relative overflow-hidden hover:bg-gray-100">
			<div className="w-1/3 h-36 md:h-52 md:w-full md:me-0 overflow-hidden">
				<img
					className="hover:scale-125 ease-in duration-300"
					src={Filename && Filename.startsWith('h') ? Filename : `/learner/LessonVideo/${Filename}`}
					alt=""
					style={{ "width": "100%", "height": "100%", "object-fit": "cover" }}
				/>
			</div>
			<div className="flex w-2/3 md:w-full ">
				<div className="flex flex-col justify-between items-start p-2 w-full">
					<div className="w-full">
						<div className="text-sm font-bold leading-5 md:text-base text-justify line-clamp-1">{Name}</div>
						<div className="text-xs text-gray-400 leading-6 text-wrap text-justify">作者：{Nickname}</div>
						<button className='ring-1 ring-orange-500 text-orange-500 px-1 py-1 text-xs font-semibold  shadow-sm hover:text-orange-300 hover:ring-2 hover:ring-orange-300 md:mt-2 md:mb-4'>#{DomainName}</button>
					</div>
					<div className="w-full">
						<div className="w-full h-1 bg-gray-200 rounded-full ">
							<div className="progress h-1 bg-orange-400 rounded-full"></div>
						</div>
						<span className='text-xs text-gray-400 leading-6'>{progress}完成</span>
					</div>
				</div>
			</div>

			<style jsx>{
				`
	.progress{
		width:${progress}%
	}
	`
			}</style>
		</div>
	);
}
