import React from 'react';

export default function Category() {
	return (
		<>
			<div className="#e2dfcfea">
				{/* <img
					src="/img/header.jpg"
					className="w-full h-500 "
				/> */}

				{/* section 1廣告篇幅+所有領域 */}

				<section className=" h-500 bg-no-repeat bg-center bg-cover bg-[url('/img/group-1.jpg')]">
					<div className="relative from-black bg-gradient-to-r  bg-auto">
						{/* Gradients */}
						{/* <div
							aria-hidden="true"
							className="flex absolute -top-96 start-1/2 transform -translate-x-1/2">
							<div className="bg-gradient-to-r from-violet-300/50 to-purple-100 blur-3xl w-[25rem] h-[44rem] rotate-[-60deg] transform -translate-x-[10rem]" />
							<div className="bg-gradient-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[90rem] h-[50rem] rounded-fulls origin-top-left -rotate-12 -translate-x-[15rem]" />
						</div> */}

						{/* End Gradients */}

						<div className="relative ">
							<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-16">
								<div className=" border-solid max-w-2xl ml-11">
									{/* Title */}
									<div className="mt-5 max-w-2xl">
										<h1 className="block font-semibold text-slate-200 text-4xl md:text-5xl lg:text-6xl">
											今天想學_______?
										</h1>
									</div>
									{/* End Title */}
									<div className="mt-5 max-w-3xl">
										<h2 className="inline-block  text-medium font-medium bg-clip-text bg-gradient-to-l from-blue-600 to-yellow-400 text-transparent">
											知識的力量開闊視野，讓我們一起探索無限廣闊的學習旅程 !
										</h2>
									</div>

									<div className="max-w-sm">
										{/* SearchBox */}
										<div
											className="relative pt-10"
											data-hs-combo-box='{
    "groupingType": "default",
    "preventSelection": true,
    "isOpenOnFocus": true,
    "groupingTitleTemplate": "<div class=\"block text-xs text-gray-500 m-3 mb-1"></div>"
  }'>
											<div className="relative">
												<div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3.5 ">
													<svg
														className="flex-shrink-0 size-4 text-gray-400"
														xmlns="http://www.w3.org/2000/svg"
														width={24}
														height={24}
														viewBox="0 0 24 24"
														fill="none"
														stroke="currentColor"
														strokeWidth={2}
														strokeLinecap="round"
														strokeLinejoin="round">
														<circle
															cx={11}
															cy={11}
															r={8}
														/>
														<path d="m21 21-4.3-4.3" />
													</svg>
												</div>
												<input
													className="py-3 ps-10 pe-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
													type="text"
													placeholder="搜尋領域或課程"
													defaultValue=""
													data-hs-combo-box-input=""
												/>
											</div>
											{/* SearchBox Dropdown */}
											<div
												className="absolute z-50 w-full bg-white rounded-xl shadow-[0_10px_40px_10px_rgba(0,0,0,0.08)]"
												style={{ display: 'none' }}
												data-hs-combo-box-output="">
												<div
													className="max-h-[500px] p-2 overflow-y-auto overflow-hidden [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300"
													data-hs-combo-box-output-items-wrapper="">
													<div
														data-hs-combo-box-output-item='{"group": {"name": "recent", "title": "Recent"}}'
														tabIndex={0}>
														{/* <a
															className="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
															href="/">
															<svg
																className="flex-shrink-0 size-4 text-gray-600"
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round">
																<rect
																	width={20}
																	height={16}
																	x={2}
																	y={4}
																	rx={2}
																/>
																<path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
															</svg>
															<span
																className="text-sm text-gray-800"
																data-hs-combo-box-search-text="Compose an email"
																data-hs-combo-box-value="">
																Compose an email
															</span>
															<span
																className="ms-auto text-xs text-gray-400"
																data-hs-combo-box-search-text="Gmail"
																data-hs-combo-box-value="">
																Gmail
															</span>
														</a> */}
													</div>
													<div
														data-hs-combo-box-output-item='{"group": {"name": "recent", "title": "Recent"}}'
														tabIndex={1}>
														<a
															className="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
															href="/">
															<svg
																className="flex-shrink-0 size-4 text-gray-600"
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round">
																<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
																<path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
															</svg>
															<span
																className="text-sm text-gray-800"
																data-hs-combo-box-search-text="Start a conversation"
																data-hs-combo-box-value="">
																Start a conversation
															</span>
															<span
																className="ms-auto text-xs text-gray-400"
																data-hs-combo-box-search-text="Slack"
																data-hs-combo-box-value="">
																Slack
															</span>
														</a>
													</div>
													<div
														data-hs-combo-box-output-item='{"group": {"name": "recent", "title": "Recent"}}'
														tabIndex={2}>
														<a
															className="py-2 px-3 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
															href="/">
															<svg
																className="flex-shrink-0 size-4 text-gray-600"
																xmlns="http://www.w3.org/2000/svg"
																width={24}
																height={24}
																viewBox="0 0 24 24"
																fill="none"
																stroke="currentColor"
																strokeWidth={2}
																strokeLinecap="round"
																strokeLinejoin="round">
																<path d="M5 12h14" />
																<path d="M12 5v14" />
															</svg>
															<span
																className="text-sm text-gray-800"
																data-hs-combo-box-search-text="Create a project"
																data-hs-combo-box-value="">
																Create a project
															</span>
															<span
																className="ms-auto text-xs text-gray-400"
																data-hs-combo-box-search-text="Notion"
																data-hs-combo-box-value="">
																Notion
															</span>
														</a>
													</div>
													<div
														data-hs-combo-box-output-item='{"group": {"name": "people", "title": "People"}}'
														tabIndex={5}>
														<a
															className="py-2 px-2.5 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
															href="/">
															<img
																className="flex-shrink-0 size-5 rounded-full"
																src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
																alt="Image Description"
															/>
															<span
																className="text-sm text-gray-800"
																data-hs-combo-box-search-text="Kim Ya Sung"
																data-hs-combo-box-value="">
																Kim Ya Sung
															</span>
															<span
																className="ms-auto text-xs text-teal-600"
																data-hs-combo-box-search-text="Online"
																data-hs-combo-box-value="">
																Online
															</span>
														</a>
													</div>
													<div
														data-hs-combo-box-output-item='{"group": {"name": "people", "title": "People"}}'
														tabIndex={6}>
														<a
															className="py-2 px-2.5 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
															href="/">
															<img
																className="flex-shrink-0 size-5 rounded-full"
																src="https://images.unsplash.com/photo-1610186593977-82a3e3696e7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
																alt="Image Description"
															/>
															<span
																className="text-sm text-gray-800"
																data-hs-combo-box-search-text="Chris Peti"
																data-hs-combo-box-value="">
																Chris Peti
															</span>
															<span
																className="ms-auto text-xs text-gray-400"
																data-hs-combo-box-search-text="Offline"
																data-hs-combo-box-value="">
																Offline
															</span>
														</a>
													</div>
													<div
														data-hs-combo-box-output-item='{"group": {"name": "people", "title": "People"}}'
														tabIndex={7}>
														<a
															className="py-2 px-2.5 flex items-center gap-x-3 hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100"
															href="#">
															<img
																className="flex-shrink-0 size-5 rounded-full"
																src="https://images.unsplash.com/photo-1568048689711-5e0325cea8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
																alt="Image Description"
															/>
															<span
																className="text-sm text-gray-800"
																data-hs-combo-box-search-text="Martin Azara"
																data-hs-combo-box-value="">
																Martin Azara
															</span>
															<span
																className="ms-auto text-xs text-gray-400"
																data-hs-combo-box-search-text="Offline"
																data-hs-combo-box-value="">
																Offline
															</span>
														</a>
													</div>
												</div>
											</div>
											{/* End SearchBox Dropdown */}
										</div>
										{/* End SearchBox */}
									</div>
									{/* Buttons */}
									<div className="mt-8 gap-3 flex justify-center">
										<a
											className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
											href="#">
											Lets start!
											<svg
												className="flex-shrink-0 size-4"
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
										{/* <a
											className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
											href="#">
											<svg
												className="flex-shrink-0 size-4"
												width={19}
												height={18}
												viewBox="0 0 19 18"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M6.875 18C8.531 18 9.875 16.656 9.875 15V12H6.875C5.219 12 3.875 13.344 3.875 15C3.875 16.656 5.219 18 6.875 18Z"
													fill="#0ACF83"
												/>
												<path
													d="M3.875 9C3.875 7.344 5.219 6 6.875 6H9.875V12H6.875C5.219 12 3.875 10.656 3.875 9Z"
													fill="#A259FF"
												/>
												<path
													d="M3.875 3C3.875 1.344 5.219 0 6.875 0H9.875V6H6.875C5.219 6 3.875 4.656 3.875 3Z"
													fill="#F24E1E"
												/>
												<path
													d="M9.87501 0H12.875C14.531 0 15.875 1.344 15.875 3C15.875 4.656 14.531 6 12.875 6H9.87501V0Z"
													fill="#FF7262"
												/>
												<path
													d="M15.875 9C15.875 10.656 14.531 12 12.875 12C11.219 12 9.87501 10.656 9.87501 9C9.87501 7.344 11.219 6 12.875 6C14.531 6 15.875 7.344 15.875 9Z"
													fill="#1ABCFE"
												/>
											</svg>
											Preline Figma
										</a> */}
									</div>
									{/* End Buttons */}
								</div>
							</div>
						</div>
					</div>
					{/* End Hero */}
				</section>
			</div>

			<div className="container">
				<div className="mx-auto mb-3 mt-3  lg:max-w-[71.81rem] lg:mb-6 lg:mt-6">
					<ol className=" flex items-center whitespace-nowrap">
						<li className=" pl-4 lg:pl-0 inline-flex items-center">
							<a
								className="text-3x1 flex items-center text-sm text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600"
								href="#">
								所有領域
							</a>
							<h1></h1>
						</li>
					</ol>
				</div>
			</div>
			<div className=" py-5">
				<div className=" pt-5 pb-3">
					{/* <div class="text-center mb-5">
          <h5 class="text-primary text-uppercase mb-3" style="letter-spacing: 5px;">Subjects</h5>
          <h1>Explore Top Subjects</h1>
      </div> */}
				</div>
			</div>

			<div className="relative overflow-hidden">
				<div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-24">
					<div className="text-center">
						<h1 className="text-4xl sm:text-6xl font-bold text-gray-800 dark:text-neutral-200">
							Insights
						</h1>
						<p className="mt-3 text-gray-600 dark:text-neutral-400">
							Stay in the know with insights from industry experts.
						</p>
						<div className="mt-7 sm:mt-12 mx-auto max-w-xl relative">
							{/* Form */}
							<form>
								<div className="relative z-10 flex space-x-3 p-3 bg-white border rounded-lg shadow-lg shadow-gray-100 dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-gray-900/20">
									<div className="flex-[1_0_0%] ">
										{/* <label
											htmlFor="hs-search-article-1"
											className="block text-sm text-gray-700 font-medium dark:text-white">
											<span className="sr-only">Search article</span>
										</label>
										<input
											type="email"
											name="hs-search-article-1"
											id="hs-search-article-1"
											className="py-2.5 px-4 block w-full border-transparent rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-neutral-900 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
											placeholder="Search article"
										/> */}
									</div>
									{/* <div className="  flex-[0_0_auto] ">
										<a
											className="size-[46px] inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
											href="#">
											<svg
												className="flex-shrink-0 size-5"
												xmlns="http://www.w3.org/2000/svg"
												width={24}
												height={24}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round">
												<circle
													cx={11}
													cy={11}
													r={8}
												/>
												<path d="m21 21-4.3-4.3" />
											</svg>
										</a>
									</div> */}
								</div>
							</form>
							{/* End Form */}
							{/* SVG Element */}
							<div className="hidden md:block absolute top-0 end-0 -translate-y-12 translate-x-20">
								<svg
									className="w-16 h-auto text-orange-500"
									width={121}
									height={135}
									viewBox="0 0 121 135"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
										stroke="currentColor"
										strokeWidth={10}
										strokeLinecap="round"
									/>
									<path
										d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
										stroke="currentColor"
										strokeWidth={10}
										strokeLinecap="round"
									/>
									<path
										d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
										stroke="currentColor"
										strokeWidth={10}
										strokeLinecap="round"
									/>
								</svg>
							</div>
							{/* End SVG Element */}
							{/* SVG Element */}
							<div className="hidden md:block absolute bottom-0 start-0 translate-y-10 -translate-x-32">
								<svg
									className="w-40 h-auto text-cyan-500"
									width={347}
									height={188}
									viewBox="0 0 347 188"
									fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path
										d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
										stroke="currentColor"
										strokeWidth={7}
										strokeLinecap="round"
									/>
								</svg>
							</div>
							{/* End SVG Element */}
						</div>
						<div className="mt-10 sm:mt-20">
							<a
								className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
								href="#">
								<svg
									className="flex-shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round">
									<rect
										width={20}
										height={14}
										x={2}
										y={7}
										rx={2}
										ry={2}
									/>
									<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
								</svg>
								Business
							</a>
							<a
								className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
								href="#">
								<svg
									className="flex-shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
									<circle
										cx={12}
										cy={12}
										r={3}
									/>
								</svg>
								Strategy
							</a>
							<a
								className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
								href="#">
								<svg
									className="flex-shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
								</svg>
								Health
							</a>
							<a
								className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
								href="#">
								<svg
									className="flex-shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
									<path d="M9 18h6" />
									<path d="M10 22h4" />
								</svg>
								Creative
							</a>
							<a
								className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
								href="#">
								<svg
									className="flex-shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z" />
									<path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2" />
									<path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2" />
									<path d="M10 6h4" />
									<path d="M10 10h4" />
									<path d="M10 14h4" />
									<path d="M10 18h4" />
								</svg>
								Environment
							</a>
							<a
								className="m-1 py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
								href="#">
								<svg
									className="flex-shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round">
									<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z" />
								</svg>
								Adventure
							</a>
						</div>
					</div>
				</div>
			</div>
			{/* End Hero */}
			{/* Card Blog */}
			<div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
				{/* Title */}
				<div className="max-w-2xl text-center mx-auto mb-10 lg:mb-14">
					<h2 className="text-2xl font-bold md:text-4xl md:leading-tight">
						Read our latest news
					</h2>
					<p className="mt-1 text-gray-600">
						We've helped some great companies brand, design and get to market.
					</p>
				</div>
				{/* End Title */}
				{/* Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 lg:mb-14">
					{/* Card */}
					<a
						className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition"
						href="#">
						<div className="aspect-w-16 aspect-h-9">
							<img
								className="w-full object-cover rounded-t-xl"
								src="https://images.unsplash.com/photo-1668869713519-9bcbb0da7171?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80"
								alt="Image Description"
							/>
						</div>
						<div className="p-4 md:p-5">
							<p className="mt-2 text-xs uppercase text-gray-600">Product</p>
							<h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600">
								Better is when everything works together
							</h3>
						</div>
					</a>
					{/* End Card */}
					{/* Card */}
					<a
						className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition"
						href="#">
						<div className="aspect-w-16 aspect-h-9">
							<img
								className="w-full object-cover rounded-t-xl"
								src="https://images.unsplash.com/photo-1668584054035-f5ba7d426401?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3465&q=80"
								alt="Image Description"
							/>
						</div>
						<div className="p-4 md:p-5">
							<p className="mt-2 text-xs uppercase text-gray-600">Business</p>
							<h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600">
								What CFR really is about
							</h3>
						</div>
					</a>
					{/* End Card */}
					{/* Card */}
					<a
						className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition"
						href="#">
						<div className="aspect-w-16 aspect-h-9">
							<img
								className="w-full object-cover rounded-t-xl"
								src="https://images.unsplash.com/photo-1668863699009-1e3b4118675d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3387&q=80"
								alt="Image Description"
							/>
						</div>
						<div className="p-4 md:p-5">
							<p className="mt-2 text-xs uppercase text-gray-600">Business</p>
							<h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600">
								Should Product Owners think like entrepreneurs?
							</h3>
						</div>
					</a>
					{/* End Card */}
					{/* Card */}
					<a
						className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md transition"
						href="#">
						<div className="aspect-w-16 aspect-h-9">
							<img
								className="w-full object-cover rounded-t-xl"
								src="https://images.unsplash.com/photo-1668584054131-d5721c515211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
								alt="Image Description"
							/>
						</div>
						<div className="p-4 md:p-5">
							<p className="mt-2 text-xs uppercase text-gray-600">Facilitate</p>
							<h3 className="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600">
								Announcing Front Strategies: Ready-to-use rules
							</h3>
						</div>
					</a>
					{/* End Card */}
				</div>
				{/* End Grid */}
				{/* Card */}
				<div className="text-center">
					<div className="inline-block bg-white border shadow-sm rounded-full">
						<div className="py-3 px-4 flex items-center gap-x-2">
							<p className="text-gray-600">Want to read more?</p>
							<a
								className="inline-flex items-center gap-x-1.5 text-blue-600 decoration-2 hover:underline font-medium"
								href="../docs/index.html">
								Go here
								<svg
									className="flex-shrink-0 size-4"
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
						</div>
					</div>
				</div>
				{/* End Card */}
			</div>
			{/* End Card Blog */}
			<div className="w-full">
				<img src="/public/img/Bg.png" />
			</div>
		</>
	);
}
