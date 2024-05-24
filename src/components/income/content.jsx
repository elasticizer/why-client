import React from 'react';
import SalesData from '@/components/income/salesData';
import CourseList from '@/components/income/courseList';

export default function Content({ data }) {
	return (
		<>
			<div className="lg:col-span-3 mb-10">
				<div className="py-2 lg:px-4">
					<div className="space-y-5">
						<>
							<div className="border-b border-gray-200 dark:border-neutral-700">
								<nav
									className="flex"
									aria-label="Tabs"
									role="tablist">
									<button
										type="button"
										className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active"
										id="tabs-with-underline-item-1"
										data-hs-tab="#tabs-with-underline-1"
										aria-controls="tabs-with-underline-1"
										role="tab">
										銷售列表
									</button>
									<button
										type="button"
										className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
										id="tabs-with-underline-item-2"
										data-hs-tab="#tabs-with-underline-2"
										aria-controls="tabs-with-underline-2"
										role="tab">
										您的課程
									</button>
								</nav>
							</div>
							<div className="">
								<div
									id="tabs-with-underline-1"
									role="tabpanel"
									aria-labelledby="tabs-with-underline-item-1">
									<p className="text-gray-500 dark:text-neutral-400"></p>
									<SalesData {...{ data }} />
								</div>
								<div
									id="tabs-with-underline-2"
									className="hidden"
									role="tabpanel"
									aria-labelledby="tabs-with-underline-item-2">
									<p className="text-gray-500 dark:text-neutral-400"></p>
									<CourseList {...{ data }} />
								</div>
							</div>
						</>
					</div>
				</div>
			</div>
		</>
	);
}
