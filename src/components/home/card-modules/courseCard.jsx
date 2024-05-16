import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function CourseCard({ title, content }) {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<a
				className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition "
				data-aos="flip-up"
				href="#"
				style={{ width: '25rem' }}>
				<div className="relative pt-[60%] sm:pt-[60%] lg:pt-[80%] rounded-t-xl overflow-hidden">
					<img
						className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
						src="https://images.hahow.in/images/5d6510f182952e0021e9b546"
						alt={title}
					/>
				</div>
				<div className="p-4 md:p-5">
					<h3 className="text-lg font-bold text-gray-800 ">{title}</h3>
					<p className="mt-1 text-gray-500 ">{content}</p>
				</div>
			</a>
		</>
	);
}
