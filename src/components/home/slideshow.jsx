/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { IoIosArrowForward } from 'react-icons/io';

export default function Slideshow() {
	return (
		<>
			<div className="px-4 lg:px-6 lg:px-8 ">
				<div
					data-hs-carousel='{
    "loadingClasses": "opacity-0",
    "isAutoPlay": true
  }'
					class="relative">
					<div className="hs-carousel relative overflow-hidden w-full h-[20rem] md:h-[calc(100vh-106px)] bg-gray-100 rounded-2xl ">
						<div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
							{/* <!-- Item --> */}
							<div className="hs-carousel-slide">
								<div className="h-[20rem] w-full md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat bg-[url('/image/slide4.jpg')]"></div>
							</div>
							{/* <!-- End Item --> */}

							{/* <!-- Item --> */}
							<div className="hs-carousel-slide">
								<div className="h-[20rem] md:h-[calc(100vh-106px)] md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat bg-[url('/image/slide5.jpg')]"></div>
							</div>
							{/* <!-- End Item --> */}

							{/* <!-- Item --> */}
							<div className="hs-carousel-slide">
								<div className="h-[20rem] md:h-[calc(100vh-106px)] md:h-[calc(100vh-106px)] flex flex-col bg-cover bg-center bg-no-repeat bg-[url('/image/slide3.jpg')]"></div>
							</div>
							{/* <!-- End Item --> */}
						</div>
					</div>

					{/* <!-- Arrows --> */}
					<button
						type="button"
						className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-s-2xl focus:outline-none focus:bg-white/20">
						<span
							className="text-2xl"
							aria-hidden="true">
							<IoIosArrowBack />
						</span>
						<span className="sr-only">Previous</span>
					</button>

					<button
						type="button"
						className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-12 h-full text-black hover:bg-white/20 rounded-e-2xl focus:outline-none focus:bg-white/20">
						<span className="sr-only">Next</span>
						<span
							className="text-2xl"
							aria-hidden="true">
							<IoIosArrowForward />
						</span>
					</button>
					{/* <!-- End Arrows --> */}
				</div>
			</div>
		</>
	);
}
