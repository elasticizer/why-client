/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Tags from '@/components/home/card-modules/tags';

export default function CourseCard({ data }) {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<a
				className="group"
				href="#">
				<div className="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
					<img
						className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
						src={data.Filename}
						alt="Image Description"
					/>
				</div>
				<div className="mt-3">
					<Tags>{data.DomainName}</Tags>
				</div>
				<div className="mt-2">
					<h3 className="text-md font-semibold text-gray-800 group-hover:text-gray-600 line-clamp-1">
						{data.Name}
					</h3>
					<div className="mt-1 text-gray-800 line-clamp-2">{data.Intro}</div>
					<div className="flex mt-2 items-center gap-2">
						<div className="text-sky-500 text-xl font-semibold">NT:</div>
						<div className="text-orange-500 text-2xl font-semibold">
							${data.Price}
						</div>
					</div>
				</div>
			</a>
		</>
	);
}
