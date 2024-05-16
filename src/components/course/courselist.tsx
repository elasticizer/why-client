import React from 'react';
import Cardsec from './cardsec';

export default function CourseList() {
	return (
		<>
			<div className="container  ">
				<div className="mb-3 mt-3  w-full lg:mb-6 lg:mt-6 sm:px-7 ">
					<div className="sm:order-2 lg:order-none  ">
						{/* <select
						id="tab-select"
						className=" sm:hidden sticky top-0 py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500"
						aria-label="Tabs">
						<option
							className=""
							value="#hs-tab-to-select-1">
							課程
						</option>
						<option value="#hs-tab-to-select-2">文章</option>
					</select> */}

						<div className="hidden sm:block  lg:sticky lg:top-0 py-0 relative z-0  overflow-hidden">
							<nav
								className="flex space-x-2"
								aria-label="Tabs"
								role="tablist"
								hs-data-tab-select="#tab-select">
								<button
									type="button"
									className="rounded-x2 items-center hs-tab-active:border-b-orange-500 hs-tab-active:text-orange-600 relative min-w-0 flex-1 bg-white first:border-s-0  border-b-2 py-4 px-4 text-gray-500 hover:text-orabge-700 text-sm font-bold lg:text-lg text-center overflow-hidden hover:bg-gray-200 focus:z-10 focus:outline-none 
                                hover:text-orange-600 focus:text-orange-600 disabled:opacity-50 disabled:pointer-events-none active"
									id="hs-tab-to-select-item-1"
									data-hs-tab="#hs-tab-to-select-1"
									aria-controls="hs-tab-to-select-1"
									role="tab">
									課程
									<span className=" hs-tab-active:text-orange-600 dark:hs-tab-active:bg-orange-800 dark:hs-tab-active:text-white ms-1 py-0.5 px-1.5 rounded-full text-base font-bold">
										99+
									</span>
								</button>
								<button
									type="button"
									className="items-center hs-tab-active:border-b-orange-500 hs-tab-active:text-orange-600 relative min-w-0 flex-1 bg-white first:border-s-0  border-b-2 py-4 px-4 text-gray-500 hover:text-orange-600 text-sm font-bold   lg:text-lg text-center overflow-hidden hover:bg-gray-200 focus:z-10 focus:outline-none   focus:text-orange-600 disabled:opacity-50 disabled:pointer-events-none"
									id="hs-tab-to-select-item-2"
									data-hs-tab="#hs-tab-to-select-2"
									aria-controls="hs-tab-to-select-2"
									role="tab">
									文章
									<span className=" hs-tab-active:text-orange-600 dark:hs-tab-active:bg-orange-800 dark:hs-tab-active:text-white ms-1 py-0.5 px-1.5 rounded-full text-base font-bold">
										99+
									</span>
								</button>
							</nav>
						</div>

						<div className="mt-3">
							<div
								id="hs-tab-to-select-1"
								role="tabpanel"
								aria-labelledby="hs-tab-to-select-item-1">
								<div className="p-3 sm:p-0">
									{/* <p className="text-gray-500">
									This is the{' '}
									<em className="font-semibold text-gray-800">first</em> items
									tab body.
								</p> */}
									<div className="flex sm:flex-wrap gap-6">
										<Cardsec />
										<Cardsec />
										<Cardsec />
										<Cardsec />
										<Cardsec />
										<Cardsec />
										<Cardsec />
										<Cardsec />
										<Cardsec />
										<Cardsec />
										<Cardsec />
										<Cardsec />
									</div>
								</div>
							</div>
							<div
								id="hs-tab-to-select-2"
								className="hidden"
								role="tabpanel"
								aria-labelledby="hs-tab-to-select-item-2">
								<div className="p-3 sm:p-0">
									<p className="text-gray-500">
										This is the{' '}
										<em className="font-semibold text-gray-800">second</em>{' '}
										items tab body.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
