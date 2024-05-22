import React from 'react';
import Image from 'next/image';

export default function Slideshow() {
	return (
		<>
			<div className="max-w-[75rem] mx-auto my-3">
				{/* <!-- Slider --> */}
				<div
					data-hs-carousel='{
    "loadingClasses": "opacity-0",
		"isAutoPlay": true
  }'
					className="relative">
					<div className="hs-carousel relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)] md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl">
						<div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
							<div className="hs-carousel-slide">
								<div className="flex justify-center h-full bg-gray-100">
									<Image
										className="top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
										src="/image/slide.jpg"
										width={1200}
										height={100}
										alt="Image Description"
									/>
								</div>
							</div>
							<div className="hs-carousel-slide">
								<div className="flex justify-center h-full bg-gray-200">
									<Image
										className="top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
										src="/image/slide2.jpg"
										width={1200}
										height={100}
										alt="Image Description"
									/>
								</div>
							</div>
							<div className="hs-carousel-slide">
								<div className="flex justify-center h-full bg-gray-300">
									<Image
										className="top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
										src="/image/slide3.jpg"
										width={1200}
										height={100}
										alt="Image Description"
									/>
								</div>
							</div>
						</div>
					</div>

					<button
						type="button"
						className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10">
						<span
							className="text-2xl"
							aria-hidden="true">
							<svg
								className="flex-shrink-0 size-5"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="m15 18-6-6 6-6"></path>
							</svg>
						</span>
						<span className="sr-only">Previous</span>
					</button>
					<button
						type="button"
						className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10">
						<span className="sr-only">Next</span>
						<span
							className="text-2xl"
							aria-hidden="true">
							<svg
								className="flex-shrink-0 size-5"
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round">
								<path d="m9 18 6-6-6-6"></path>
							</svg>
						</span>
					</button>

					<div className="hs-carousel-pagination flex justify-center absolute bottom-3 start-0 end-0 space-x-2">
						<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
						<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
						<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-full cursor-pointer dark:border-neutral-600 dark:hs-carousel-active:bg-blue-500 dark:hs-carousel-active:border-blue-500"></span>
					</div>
				</div>
				{/* <!-- End Slider --> */}
			</div>
		</>
	);
}
