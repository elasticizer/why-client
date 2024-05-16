import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	return (
		<>
			{/* <!-- ========== HEADER ========== --> */}
			<header className="sticky top-0 inset-x-0 flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 ">
				<nav className="backdrop-blur-lg relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8">
					<div className="flex items-center justify-between">
						<Link href="/">
							<div className="flex-none text-xl font-semibold dark:text-white">
								<Image
									src="/image/why_logo.png"
									width={200}
									height={100}
									alt="why logo"
								/>
							</div>
						</Link>
						<div className="sm:hidden">
							<button
								type="button"
								className="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
								data-hs-collapse="#navbar-collapse-with-animation"
								aria-controls="navbar-collapse-with-animation"
								aria-label="Toggle navigation">
								<svg
									className="hs-collapse-open:hidden flex-shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round">
									<line
										x1="3"
										x2="21"
										y1="6"
										y2="6"
									/>
									<line
										x1="3"
										x2="21"
										y1="12"
										y2="12"
									/>
									<line
										x1="3"
										x2="21"
										y1="18"
										y2="18"
									/>
								</svg>
								<svg
									className="hs-collapse-open:block hidden flex-shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round">
									<path d="M18 6 6 18" />
									<path d="m6 6 12 12" />
								</svg>
							</button>
						</div>
					</div>
					<div
						id="navbar-collapse-with-animation"
						className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
						<div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
							<Link href="/about">
								<div
									className="font-medium text-gray-500 hover:text-orange-400 sm:py-6"
									href="#">
									關於
								</div>
							</Link>
							<div className="hs-dropdown hs-dropdown-example relative inline-flex">
								<button
									id="hs-dropdown-example"
									type="button"
									className="hs-dropdown-toggle inline-flex items-center gap-x-2 text-sm font-medium text-gray-500 hover:text-orange-400">
									領域
									<svg
										className="hs-dropdown-open:rotate-180 size-4 text-gray"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round">
										<path d="m6 9 6 6 6-6"></path>
									</svg>
								</button>

								<div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2">
									<a
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 "
										href="#">
										領域1
									</a>
									<a
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 "
										href="#">
										領域2
									</a>
									<a
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 "
										href="#">
										領域3
									</a>
									<a
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 "
										href="#">
										領域4
									</a>
								</div>
							</div>
							<div className="hs-dropdown hs-dropdown-example relative inline-flex">
								<button
									id="hs-dropdown-example"
									type="button"
									className="hs-dropdown-toggle inline-flex items-center gap-x-2 text-sm font-medium text-gray-500 hover:text-orange-400">
									部落格
									<svg
										className="hs-dropdown-open:rotate-180 size-4 text-gray"
										xmlns="http://www.w3.org/2000/svg"
										width="24"
										height="24"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round">
										<path d="m6 9 6 6 6-6"></path>
									</svg>
								</button>

								<div className="hs-dropdown-menu transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 w-56 hidden z-10 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2">
									<a
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
										href="#">
										分類1
									</a>
									<a
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
										href="#">
										分類2
									</a>
									<a
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
										href="#">
										分類3
									</a>
									<a
										className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
										href="#">
										分類4
									</a>
								</div>
							</div>
							<a
								className="font-medium text-gray-500 hover:text-orange-400 sm:py-6"
								href="#">
								購物車
							</a>

							<a
								className="flex items-center gap-x-2 font-medium text-gray-500 hover:text-orange-400 sm:border-s sm:border-gray-300 sm:my-6 sm:ps-6"
								href="#">
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
									<path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
									<circle
										cx="12"
										cy="7"
										r="4"
									/>
								</svg>
								登入/註冊
							</a>
						</div>
					</div>
				</nav>
			</header>
			{/* <!-- ========== END HEADER ========== --> */}
		</>
	);
}
