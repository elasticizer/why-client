import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function ArticleCard({ title, content, author, image }) {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<a
				className="group rounded-xl overflow-hidden"
				data-aos="zoom-in"
				href="#">
				<div className="sm:flex">
					<div className="flex-shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
						<img
							className="group-hover:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
							src={image}
							alt="Image Description"
						/>
					</div>
					<div className="grow mt-4 sm:mt-0 sm:ms-6 px-4 sm:px-0">
						<h6 className="text-sm font-light text-white group-hover:text-gray-600 dark:text-neutral-300">
							{author}發表的文章
						</h6>
						<h3 className="text-xl font-semibold text-white group-hover:text-gray-600 dark:text-neutral-300 line-clamp-2">
							{title}
						</h3>
						<p className="mt-3 text-white line-clamp-2">{content}</p>
						<p className="mt-4 inline-flex items-center gap-x-1 text-gray-600 decoration-2 hover:underline font-medium">
							Read more
							<svg
								className="flex-shrink-0 size-4"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
								stroke-linecap="round"
								stroke-linejoin="round">
								<path d="m9 18 6-6-6-6" />
							</svg>
						</p>
					</div>
				</div>
			</a>
		</>
	);
}
