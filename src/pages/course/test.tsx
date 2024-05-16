import React from 'react';
import VideoIframe from '@/components/video';
import { IoMdPeople } from "react-icons/io";

export default function Test() {
	return (
		<>
			<div className="container">
				{/* Features */}
				<div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
					{/* Grid */}
					<div className=" sm:grid sm:items-centermd:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
						<div>
							<img
								className="rounded-xl"
								src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
								alt="Image Description"
							/>
						</div>
						{/* End Col */}
						<div className="mt-5 sm:mt-10 lg:mt-0   ">
							<div className="space-y-6 sm:space-y-8">
								{/* Title */}
								<div className="space-y-2 md:space-y-4">
									<h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
										We tackle the challenges start-ups face
									</h2>
									<p className="text-gray-500">
										Besides working with start-up enterprises as a partner for
										digitalization, we have built enterprise products for common
										pain points that we have encountered in various products and
										projects.
									</p>
								</div>
								{/* End Title */}
								{/* List */}
								<ul className="space-y-2 sm:space-y-4">
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
											<svg
												className="flex-shrink-0 size-3.5"
												xmlns="http://www.w3.org/2000/svg"
												width={24}
												height={24}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round">
												<polyline points="20 6 9 17 4 12" />
											</svg>
										</span>
										<span className="text-sm sm:text-base text-gray-500">
											<span className="font-bold">Easy &amp; fast</span>{' '}
											designing
										</span>
									</li>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
											<svg
												className="flex-shrink-0 size-3.5"
												xmlns="http://www.w3.org/2000/svg"
												width={24}
												height={24}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round">
												<polyline points="20 6 9 17 4 12" />
											</svg>
										</span>
										<span className="text-sm sm:text-base text-gray-500">
											Powerful <span className="font-bold">features</span>
										</span>
									</li>
									<li className="flex space-x-3">
										<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
											<svg
												className="flex-shrink-0 size-3.5"
												xmlns="http://www.w3.org/2000/svg"
												width={24}
												height={24}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round">
												<polyline points="20 6 9 17 4 12" />
											</svg>
										</span>
										<span className="text-sm sm:text-base text-gray-500">
											User Experience Design
										</span>
									</li>
								</ul>
								{/* End List */}
							</div>
						</div>
						{/* End Col */}
					</div>
					{/* End Grid */}
				</div>
				{/* End Features */}
			</div>

			<hr />
			{/* Sec1-麵包屑 */}
			<div className="container">
				<ol className="flex items-center whitespace-nowrap">
					<li className="inline-flex items-center">
						<a
							className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
							href="#">
							全部領域
						</a>
						<svg
							className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400"
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
					<li className="inline-flex items-center">
						<a
							className="flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
							href="#">
							設計
							<svg
								className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400"
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
						</a>
					</li>
					<li
						className="inline-flex items-center text-sm font-semibold text-gray-800 truncate"
						aria-current="page">
						網頁設計
					</li>
				</ol>
			</div>

			{/* Sec2-簡介 */}
			{/* Features */}
			<div className="container content-center  ">
				{/* Grid */}
				<div className=" my-6  sm:grid sm:items-center md:grid md:grid-cols-2  md:gap-8 xl:gap-8">
					<div className="  sm:items-center  ">
						<VideoIframe src="https://www.youtube.com/embed/bLynTAwa40g" />
					</div>
					{/* End Col */}
					<div className="  mt-5 sm:items-center sm:mt-10 lg:pl-20 lg:mt-0">
						<div className="space-y-6 sm:space-y-8">
							{/* Title */}
							<div className="space-y-2 md:space-y-4">
								<h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
									產品設計實戰：用Figma打造絕佳UI/UX
								</h2>
								<p className="text-gray-500">
									你想要學習 UI/UX
									設計嗎？想知道如何打造絕佳產品體驗嗎？一起來學習使用 Figma
									這個火紅全球的介面設計工具，跟上全球設計趨勢，成為軟硬實力兼具的產品設計師吧！
								</p>
								<div className="text-center">
									<button
										type="button"
										className="d-none py-3 px-4 text-center inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400">
										查看更多
									</button>
								</div>
							</div>
							{/* End Title */}
							{/* List */}
							<ul className="space-y-2 sm:space-y-4">
								<li className="flex space-x-3">
									<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
										<svg
											className="flex-shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
									<span className="text-sm sm:text-base text-gray-500">
										<span className="font-bold">Easy &amp; fast</span> designing
									</span>
								</li>
								<li className="flex space-x-3">
									<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
										<svg
											className="flex-shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
									<span className="text-sm sm:text-base text-gray-500">
										Powerful <span className="font-bold">features</span>
									</span>
								</li>
								<li className="flex space-x-3">
									<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
										<svg
											className="flex-shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
									<span className="text-sm sm:text-base text-gray-500">
										User Experience Design
									</span>
								</li>
							</ul>
							{/* End List */}
						</div>
					</div>
					{/* End Col */}
				</div>
				{/* End Grid */}
			</div>
			{/* End Features */}

			{/* 範例1 */}
			{/* Features */}
			<hr />
			<div className="container sm:px-6 lg:px-8 lg:py-14 ">
				{/* Grid */}
				<div className="sm:grid sm:grid-cols-1 lg:grid-cols-2 sm:items-center sm:gap-12 xl:gap-32">
					<div className="rounded-xl sm:w-412 h-266 ">
						<VideoIframe src="https://www.youtube.com/embed/bLynTAwa40g"></VideoIframe>
					</div>
					{/* End Col */}
					<div className=" mt-5 sm:mt-10 lg:pl-20 lg:mt-0">
						<div className="space-y-6 sm:space-y-8">
							{/* Title */}
							<div className="space-y-2 md:space-y-4">
								<h2 className="font-bold text-3xl lg:text-4xl text-gray-800">
									產品設計實戰：用Figma打造絕佳UI/UX
								</h2>
								<p className="text-gray-500">
									你想要學習 UI/UX
									設計嗎？想知道如何打造絕佳產品體驗嗎？一起來學習使用 Figma
									這個火紅全球的介面設計工具，跟上全球設計趨勢，成為軟硬實力兼具的產品設計師吧！
								</p>
								<div className="text-center">
									<button
										type="button"
										className="d-none py-3 px-4 text-center inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-yellow-100 text-yellow-800 hover:bg-yellow-200 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-yellow-900 dark:text-yellow-500 dark:hover:text-yellow-400">
										查看更多
									</button>
								</div>
							</div>
							{/* End Title */}
							{/* List */}
							<ul className="space-y-2 sm:space-y-4">
								<li className="flex space-x-3">
									<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
										<svg
											className="flex-shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
									<span className="text-sm sm:text-base text-gray-500">
										<span className="font-bold">Easy &amp; fast</span> designing
									</span>
								</li>
								<li className="flex space-x-3">
									<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
										<svg
											className="flex-shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
									<span className="text-sm sm:text-base text-gray-500">
										Powerful <span className="font-bold">features</span>
									</span>
								</li>
								<li className="flex space-x-3">
									<span className="mt-0.5 size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600">
										<svg
											className="flex-shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
									<span className="text-sm sm:text-base text-gray-500">
										User Experience Design
									</span>
								</li>
							</ul>
							{/* End List */}
						</div>
					</div>
				</div>
			</div>

			<div className="container">
				<div className="container flex col-6">
					<div
						className="w-8/12 bg-white rounded-lg shadow-md dark:bg-neutral-800"
						style={{ border: '1px solid brown' }}>
						<div className="border-b border-gray-200 px-4 dark:border-neutral-700">
							<nav
								className="flex space-x-2"
								aria-label="Tabs"
								role="tablist">
								<button
									type="button"
									className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500 active"
									id="basic-tabs-item-1"
									data-hs-tab="#basic-tabs-1"
									aria-controls="basic-tabs-1"
									role="tab">
									課程介紹
								</button>
								<button
									type="button"
									className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
									id="basic-tabs-item-2"
									data-hs-tab="#basic-tabs-2"
									aria-controls="basic-tabs-2"
									role="tab">
									目錄與試閱
								</button>
								<button
									type="button"
									className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
									id="basic-tabs-item-3"
									data-hs-tab="#basic-tabs-3"
									aria-controls="basic-tabs-3"
									role="tab">
									課程評價
								</button>
								<button
									type="button"
									className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
									id="basic-tabs-item-3"
									data-hs-tab="#basic-tabs-3"
									aria-controls="basic-tabs-3"
									role="tab">
									關於講師
								</button>
								<button
									type="button"
									className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-blue-500"
									id="basic-tabs-item-3"
									data-hs-tab="#basic-tabs-3"
									aria-controls="basic-tabs-3"
									role="tab">
									課前問答
								</button>
							</nav>
						</div>
						<div className="mt-3 p-4">
							<div
								id="basic-tabs-1"
								role="tabpanel"
								aria-labelledby="basic-tabs-item-1">
								{/* <p className="text-gray-500 dark:text-neutral-400">
									This is the{' '}
									<em className="font-semibold text-gray-800 dark:text-neutral-200">
										first
									</em>{' '}
									items tab body.
								</p> */}
								<div className="space-y-5 md:space-y-8">
									<div className="space-y-3">
										<h2 className="text-2xl font-bold md:text-3xl dark:text-white">
											Announcing a free plan for small teams
										</h2>
										<p className="text-lg text-gray-800 dark:text-neutral-200">
											At preline, our mission has always been focused on
											bringing openness and transparency to the design process.
											We've always believed that by providing a space where
											designers can share ongoing work not only empowers them to
											make better products, it also helps them grow.
										</p>
									</div>
									<p className="text-lg text-gray-800 dark:text-neutral-200">
										We're proud to be a part of creating a more open culture and
										to continue building a product that supports this vision.
									</p>
									<figure>
										<img
											className="w-full object-cover rounded-xl"
											src="https://images.unsplash.com/photo-1670272505340-d906d8d77d03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
											alt="Image Description"
										/>
										<figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
											A woman sitting at a table.
										</figcaption>
									</figure>
									<p className="text-lg text-gray-800 dark:text-neutral-200">
										As we've grown, we've seen how Preline has helped companies
										such as Spotify, Microsoft, Airbnb, Facebook, and Intercom
										bring their designers closer together to create amazing
										things. We've also learned that when the culture of sharing
										is brought in earlier, the better teams adapt and
										communicate with one another.
									</p>
									<p className="text-lg text-gray-800 dark:text-neutral-200">
										That's why we are excited to share that we now have a{' '}
										<a
											className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
											href="#">
											free version of Preline
										</a>
										, which will allow individual designers, startups and other
										small teams a chance to create a culture of openness early
										on.
									</p>
									<blockquote className="text-center p-4 sm:px-7">
										<p className="text-xl font-medium text-gray-800 md:text-2xl md:leading-normal xl:text-2xl xl:leading-normal dark:text-neutral-200">
											To say that switching to Preline has been life-changing is
											an understatement. My business has tripled and I got my
											life back.
										</p>
										<p className="mt-5 text-gray-800 dark:text-neutral-200">
											Nicole Grazioso
										</p>
									</blockquote>
									<figure>
										<img
											className="w-full object-cover rounded-xl"
											src="https://images.unsplash.com/photo-1670272498380-eb330b61f3cd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
											alt="Image Description"
										/>
										<figcaption className="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
											A man and a woman looking at a cell phone.
										</figcaption>
									</figure>
									<div className="space-y-3">
										<h3 className="text-2xl font-semibold dark:text-white">
											Bringing the culture of sharing to everyone
										</h3>
										<p className="text-lg text-gray-800 dark:text-neutral-200">
											We know the power of sharing is real, and we want to
											create an opportunity for everyone to try Preline and
											explore how transformative open communication can be. Now
											you can have a team of one or two designers and unlimited
											spectators (think PMs, management, marketing, etc.) share
											work and explore the design process earlier.
										</p>
									</div>
									<ul className="list-disc list-outside space-y-5 ps-5 text-lg text-gray-800 dark:text-neutral-200">
										<li className="ps-2">
											Preline allows us to collaborate in real time and is a
											really great way for leadership on the team to stay
											up-to-date with what everybody is working on,"{' '}
											<a
												className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
												href="#">
												said
											</a>{' '}
											Stewart Scott-Curran, Intercom's Director of Brand Design.
										</li>
										<li className="ps-2">
											Preline opened a new way of sharing. It's a persistent way
											for everyone to see and absorb each other's work," said
											David Scott, Creative Director at{' '}
											<a
												className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500"
												href="#">
												Eventbrite
											</a>
											.
										</li>
									</ul>
									<p className="text-lg text-gray-800 dark:text-neutral-200">
										Small teams and individual designers need a space where they
										can watch the design process unfold, both for themselves and
										for the people they work with – no matter if it's a fellow
										designer, product manager, developer or client. Preline
										allows you to invite more people into the process, creating
										a central place for conversation around design. As those
										teams grow, transparency and collaboration becomes
										integrated in how they communicate and work together.
									</p>
									<div>
										<a
											className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
											href="#">
											Plan
										</a>
										<a
											className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
											href="#">
											Web development
										</a>
										<a
											className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
											href="#">
											Free
										</a>
										<a
											className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-200"
											href="#">
											Team
										</a>
									</div>
								</div>
							</div>
							<div
								id="basic-tabs-2"
								className="hidden"
								role="tabpanel"
								aria-labelledby="basic-tabs-item-2">
								<p className="text-gray-500 dark:text-neutral-400">
									This is the{' '}
									<em className="font-semibold text-gray-800 dark:text-neutral-200">
										second
									</em>{' '}
									items tab body.
								</p>
							</div>
							<div
								id="basic-tabs-3"
								className="hidden"
								role="tabpanel"
								aria-labelledby="basic-tabs-item-3">
								<p className="text-gray-500 dark:text-neutral-400">
									This is the{' '}
									<em className="font-semibold text-gray-800 dark:text-neutral-200">
										third
									</em>{' '}
									items tab body.
								</p>
							</div>
							<div
								id="basic-tabs-3"
								className="hidden"
								role="tabpanel"
								aria-labelledby="basic-tabs-item-3">
								<p className="text-gray-500 dark:text-neutral-400">
									This is the{' '}
									<em className="font-semibold text-gray-800 dark:text-neutral-200">
										third
									</em>{' '}
									items tab body.
								</p>
							</div>
							<div
								id="basic-tabs-3"
								className="hidden"
								role="tabpanel"
								aria-labelledby="basic-tabs-item-3">
								<p className="text-gray-500 dark:text-neutral-400">
									This is the{' '}
									<em className="font-semibold text-gray-800 dark:text-neutral-200">
										third
									</em>{' '}
									items tab body.
								</p>
							</div>
						</div>
					</div>
					<div className="mx-auto p-4">
						<span className="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-neutral-400">
							<h1>關於課程</h1>
							<hr />
						</span>
						<div>
							<ul className="space-y-3 text-sm">
								<li className="flex space-x-3">
									<span className="size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
										<svg
											className="flex-shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
									<span className="text-gray-800 dark:text-neutral-400">
										FAQ
									</span>
								</li>
								<li className="flex space-x-3">
									<span className="size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
										<svg
											className="flex-shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
									<span className="text-gray-800 dark:text-neutral-400">
										License
									</span>
								</li>
								<li className="flex space-x-3">
									<span className="size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
										<svg
											className="flex-shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
									<span className="text-gray-800 dark:text-neutral-400">
										Terms &amp; Conditions
									</span>
								</li>
							</ul>
						</div>
						<span className="font-medium text-sm text-gray-500 font-mono mb-3 dark:text-neutral-400">
							<h1>關於課程</h1>
							<hr />
						</span>
						<div>
							<ul className="space-y-3 text-sm">
								<li className="flex space-x-3">
									<span className="size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
										<svg
											className="flex-shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
									<span className="text-gray-800 dark:text-neutral-400">
										FAQ
									</span>
								</li>
								<li className="flex space-x-3">
									<span className="size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
										<svg
											className="flex-shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
									<span className="text-gray-800 dark:text-neutral-400">
										License
									</span>
								</li>
								<li className="flex space-x-3">
									<span className="size-5 flex justify-center items-center rounded-full bg-blue-50 text-blue-600 dark:bg-blue-800/30 dark:text-blue-500">
										<svg
											className="flex-shrink-0 size-3.5"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
									</span>
									<span className="text-gray-800 dark:text-neutral-400">
										Terms &amp; Conditions
									</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
