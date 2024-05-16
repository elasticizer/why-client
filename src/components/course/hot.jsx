import React from 'react';
import CardFirst from './cardfirst';
import { IoArrowForwardCircle } from "react-icons/io5";
import { IoArrowBackCircle } from "react-icons/io5";


export default function Hot() {


	return (
		<>
			<div className="container">
				{/* 輪播 */}
				
				<div
					data-hs-carousel='{"loadingClasses": "opacity-0","isAutoPlay": true
					}'
					className=" lg:mb-6 lg:mt-3 px-7  h-72 lg:h-80   ">
					<div className="inline-flex justify-between font-semibold text-2xl text-Black-900 mb-2 mt-3  w-full lg:mb-2 lg:mt-6  " >
						<div className="w-full ">最新上架</div>
						<div className="relative flex w-full space-x-3 items-center justify-end ">
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

					<div className="hs-carousel relative overflow-hidden w-full     min-h-[200px]  rounded-lg"
					>
						<div className="hs-carousel-body  absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0 bo">
							<div className="hs-carousel-slide pt-5 lg:py-5 ">
								<div className="inline-flex  justify-between h-full ">
									<span className="  w-[700px] lg:w-[575px]"><CardFirst /></span>
									<span className="sm:hidden lg:block lg:w-[575px]"><CardFirst /></span>
								</div>
							</div>
							<div className="hs-carousel-slide ">

								<div className="inline-flex  justify-between h-full  py-5">
									<span className="  w-[700px] lg:w-[575px]"><CardFirst /></span>
									<span className="sm:hidden lg:block lg:w-[575px]"><CardFirst /></span>
								</div>
							</div>
							<div className="hs-carousel-slide">
								<div className="inline-flex  justify-between h-full  py-5">
									<span className="  w-[700px] lg:w-[575px]"><CardFirst /></span>
									<span className="sm:hidden lg:block lg:w-[575px]"><CardFirst /></span>
								</div>
							</div>
						</div>
					</div>

					<div className="hs-carousel-pagination flex lg:mt-2  w-full flex-nowrap  justify-center  space-x-2   ">
						<span className="  hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-md w-6 h-2 cursor-pointer" />
						<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-md w-6 h-2 first-letter:cursor-pointer" />
						<span className="hs-carousel-active:bg-blue-700 hs-carousel-active:border-blue-700 size-3 border border-gray-400 rounded-md  w-6 h-2 cursor-pointer" />
					</div>
				</div>


			</div>

		</>
	);
}
