import React from 'react';
import { BsFillTrash3Fill } from "react-icons/bs";


export default function ContentCard() {
	return (
		<div className="bg-white w-full">
			<div className="mx-auto max-w-full px-6 lg:px-8">
				<div className="mx-auto mt-10 grid max-w-full grid-cols-1 gap-x-8 gap-y-16  border-gray-200 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					<article className="flex max-w-full flex-col items-start justify-between shadow-sm ring-1 ring-gray-300 p-5 hover:bg-orange-50	">
						<div className="flex items-center gap-x-4 text-xs">
							<time dateTime="2020-03-16" className="text-gray-500">
								Mar 16, 2020
							</time>
							<a
								href="#"
								className="relative z-5 rounded-full bg-orange-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
							>
								Marketing
							</a>
						</div>
						<div className="group relative">
							<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
								<a href="#">
									<span className="absolute inset-0" />
									Boost your conversion rate
								</a>
							</h3>
							<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
								Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
								vitae illo. Non aliquid explicabo necessitatibus unde. Sed
								exercitationem placeat consectetur nulla deserunt vel. Iusto
								corrupti dicta.
							</p>
						</div>
						<div className="relative mt-8 flex w-full items-end gap-x-4 justify-between">
							<div className="relative flex items-center gap-x-4">
								<img
									src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
									className="h-10 w-10 rounded-full bg-gray-50"
								/>
								<div className="text-sm leading-6">
									<p className="font-semibold text-gray-900">
										<a href="#">
											<span className="inset-0 line-clamp-1">Michael Foster</span>

										</a>
									</p>
									<p className="text-gray-600">Co-Founder / CTO</p>
								</div>
							</div>
							<button className="mb-1"><BsFillTrash3Fill color='#7B7B7B' size="20px" /></button>
						</div>

					</article>
					<article className="flex max-w-full flex-col items-start justify-between shadow-sm ring-1 ring-gray-300 p-5 hover:bg-orange-50	">
						<div className="flex items-center gap-x-4 text-xs">
							<time dateTime="2020-03-16" className="text-gray-500">
								Mar 16, 2020
							</time>
							<a
								href="#"
								className="relative z-5 rounded-full bg-orange-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
							>
								Marketing
							</a>
						</div>
						<div className="group relative">
							<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
								<a href="#">
									<span className="absolute inset-0" />
									Boost your conversion rate
								</a>
							</h3>
							<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
								Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
								vitae illo. Non aliquid explicabo necessitatibus unde. Sed
								exercitationem placeat consectetur nulla deserunt vel. Iusto
								corrupti dicta.
							</p>
						</div>
						<div className="relative mt-8 flex w-full items-end gap-x-4 justify-between">
							<div className="relative flex items-center gap-x-4">
								<img
									src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
									className="h-10 w-10 rounded-full bg-gray-50"
								/>
								<div className="text-sm leading-6">
									<p className="font-semibold text-gray-900">
										<a href="#">
											<span className="absolute inset-0" />
											Michael Foster
										</a>
									</p>
									<p className="text-gray-600">Co-Founder / CTO</p>
								</div>
							</div>
							<button className="mb-1"><BsFillTrash3Fill color='#7B7B7B' size="20px" /></button>
						</div>

					</article>
					<article className="flex max-w-full flex-col items-start justify-between shadow-sm ring-1 ring-gray-300 p-5 hover:bg-orange-50	">
						<div className="flex items-center gap-x-4 text-xs">
							<time dateTime="2020-03-16" className="text-gray-500">
								Mar 16, 2020
							</time>
							<a
								href="#"
								className="relative z-5 rounded-full bg-orange-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
							>
								Marketing
							</a>
						</div>
						<div className="group relative">
							<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
								<a href="#">
									<span className="absolute inset-0" />
									Boost your conversion rate
								</a>
							</h3>
							<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
								Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
								vitae illo. Non aliquid explicabo necessitatibus unde. Sed
								exercitationem placeat consectetur nulla deserunt vel. Iusto
								corrupti dicta.
							</p>
						</div>
						<div className="relative mt-8 flex w-full items-end gap-x-4 justify-between">
							<div className="relative flex items-center gap-x-4">
								<img
									src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
									className="h-10 w-10 rounded-full bg-gray-50"
								/>
								<div className="text-sm leading-6">
									<p className="font-semibold text-gray-900">
										<a href="#">
											<span className="absolute inset-0" />
											Michael Foster
										</a>
									</p>
									<p className="text-gray-600">Co-Founder / CTO</p>
								</div>
							</div>
							<button className="mb-1"><BsFillTrash3Fill color='#7B7B7B' size="20px" /></button>
						</div>

					</article>
					<article className="flex max-w-full flex-col items-start justify-between shadow-sm ring-1 ring-gray-300 p-5 hover:bg-orange-50	">
						<div className="flex items-center gap-x-4 text-xs">
							<time dateTime="2020-03-16" className="text-gray-500">
								Mar 16, 2020
							</time>
							<a
								href="#"
								className="relative z-5 rounded-full bg-orange-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
							>
								Marketing
							</a>
						</div>
						<div className="group relative">
							<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
								<a href="#">
									<span className="absolute inset-0" />
									Boost your conversion rate
								</a>
							</h3>
							<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
								Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
								vitae illo. Non aliquid explicabo necessitatibus unde. Sed
								exercitationem placeat consectetur nulla deserunt vel. Iusto
								corrupti dicta.
							</p>
						</div>
						<div className="relative mt-8 flex w-full items-end gap-x-4 justify-between">
							<div className="relative flex items-center gap-x-4">
								<img
									src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
									className="h-10 w-10 rounded-full bg-gray-50"
								/>
								<div className="text-sm leading-6">
									<p className="font-semibold text-gray-900">
										<a href="#">
											<span className="absolute inset-0" />
											Michael Foster
										</a>
									</p>
									<p className="text-gray-600">Co-Founder / CTO</p>
								</div>
							</div>
							<button className="mb-1"><BsFillTrash3Fill color='#7B7B7B' size="20px" /></button>
						</div>

					</article>
					<article className="flex max-w-full flex-col items-start justify-between shadow-sm ring-1 ring-gray-300 p-5 hover:bg-orange-50	">
						<div className="flex items-center gap-x-4 text-xs">
							<time dateTime="2020-03-16" className="text-gray-500">
								Mar 16, 2020
							</time>
							<a
								href="#"
								className="relative z-5 rounded-full bg-orange-100 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
							>
								Marketing
							</a>
						</div>
						<div className="group relative">
							<h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
								<a href="#">
									<span className="absolute inset-0" />
									Boost your conversion rate
								</a>
							</h3>
							<p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
								Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam
								vitae illo. Non aliquid explicabo necessitatibus unde. Sed
								exercitationem placeat consectetur nulla deserunt vel. Iusto
								corrupti dicta.
							</p>
						</div>
						<div className="relative mt-8 flex w-full items-end gap-x-4 justify-between">
							<div className="relative flex items-center gap-x-4">
								<img
									src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
									alt=""
									className="h-10 w-10 rounded-full bg-gray-50"
								/>
								<div className="text-sm leading-6">
									<p className="font-semibold text-gray-900">
										<a href="#">
											<span className="absolute inset-0" />
											Michael Foster
										</a>
									</p>
									<p className="text-gray-600">Co-Founder / CTO</p>
								</div>
							</div>
							<button className="mb-1"><BsFillTrash3Fill color='#7B7B7B' size="20px" /></button>
						</div>

					</article>
					{/* More posts... */}
				</div>
			</div>
		</div>

	);
}
