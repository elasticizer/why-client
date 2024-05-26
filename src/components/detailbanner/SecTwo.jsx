import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import Link from 'next/link';

export default function SecTwo() {
const [course, setCourse] = useState([]);
	useEffect(() => {
		const fetchdata = async () => {
			try {
				const res = await fetch(`/api/coursedetail`);
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				const postdata = await res.json();
				setCourse(postdata);
			} catch (e) {
				console.error(e);
				setCourse([]);
			}
		};
		fetchdata();
	}, []);
	if (course.length === 0) {
		return <div>Loading...</div>;
	}

	return (
		<>
			<div className=" container ">
				<div className="sm:flex-col sm:flex-wrap  ">
					
					<div className=" flex items-center  w-full ">
							<li className="  lg:pl-0 inline-flex items-center sm:text-base">
								<Link
									className="flex items-center text-xl font-medium text-white hover:text-blue-600 focus:outline-none focus:text-blue-600"
									href="/course">
									全部領域
								</Link>
								<svg
									className="flex-shrink-0 mx-2 overflow-visible size-4 text-white"
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="m9 18 6-6-6-6" />
								</svg>
							</li>
							<li
								className="inline-flex items-center text-xl font-semibold  text-white truncate"
								aria-current="page">
								網頁設計
							</li>
						</div>
						<h2
							className="mt-20 text-sm sm:text-base lg:text-white">
							<span className="font-bold">
								<span class="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block">
									<span class="relative text-white">{course[0].Nickname}</span>
								</span>

							</span>
						</h2>
					<h3 className=" mt-6 block text-2xl text-white font-bold  sm:text-3xl md:text-4xl lg:text-4xl dark:text-white"
						>
							{course[0].Name}
					</h3>
					<p className="pt-3 lg:pt-1 mt-2 text-base lg:text-white dark:text-neutral-400">
							
						</p>
					
					
					{/* <div className="mt-2 lg:mt-2">
							<ul className="space-y-2 sm:space-y-4">
								<li className="flex space-x-3">
									
								</li>
								<span className="flex">
									<span className="flex space-x-3">
										<span className="flex space-x-3">
											<span className="mt-0.5 size-5 flex justify-center items-center rounded-full text-yellow-400">
												<FaStar />
											</span>
											<span className="mb-5 text-sm sm:text-base lg:text-white">
												5.0 <span>( 168 )</span>
											</span>
										</span>
										<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-0 text-blue-600">
											<MdPeopleAlt />
										</span>
										<span className="text-sm sm:text-base lg:text-white">
											1,990 <span className="font-bold">學員</span>
										</span>
									</span>
								</span>

								

								<div className="flex justify-center  gap-20">
									<a
										type="button"
										href="#"
										className="d-none py-1 px-4 text-center inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400">
										加入收藏
									</a>
									<a
										type="button"
										href="#"
										className="d-none py-1 px-4 text-center inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400">
										立即購買
									</a>
								</div>
							</ul>
						</div> */}
					{/* End Brands */}
				</div>


			</div>

		</>
	);
}
