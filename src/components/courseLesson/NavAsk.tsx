import React, { useState } from 'react';
import { FcAdvertising } from 'react-icons/fc';
import { TbMessageCircle2 } from 'react-icons/tb';
import { IoArrowRedo } from 'react-icons/io5';
import { BsFillSendFill } from 'react-icons/bs';

export default function NavAsk() {
	const [replyVisible, setReplyVisible] = useState(true);
	const [reply, setReply] = useState(true);

	const toggleReplyVisibility = () => {
		setReplyVisible(replyVisible);
	};

	const handleCancel = () => {
		setReplyVisible(false);
	};

	return (
		<>
			<div className="  w-full inline-flex justify-between  items-center space-x-80 ">
				<div className=" text-neutral-800 text-2xl font-semibold font-['Inter'] leading-loose">
					購課前，提出關於課程內容的疑問吧！
				</div>
			</div>
			<div className="mb-3 text-neutral-500 font-semibold text-sm font-['Inter']  subpixel-antialiased leading-loose">
				對於課程有任何疑問可隨時提問，讓你的疑問獲得解答！也幫助老師在製作課程時，能更瞭解同學的學習需求！
			</div>
			<div className="w-full  ">
				{/* 搜尋 */}

				{/* 排序 */}
			</div>
			<div className="w-full pl-4 border items-center px-2 py-3 shadow  bg-white rounded-lg justify-start gap-2 inline-flex my-4">
				<FcAdvertising className=" w-10 h-10" />

				<a
					href="#"
					className=" text-teal-500 text-sm font-semibold font-['Inter'] underline leading-snug">
					請先登入或進行註冊後才可以留言喔！
				</a>
			</div>
			<div className="w-full pl-4 border items-center px-2 py-3 shadow  bg-white rounded-lg justify-start gap-2 inline-flex my-4">
				<div className=" w-12 h-12  bg-white/opacity-0 rounded-3xl shadow border-black/opacity-5 justify-center items-center inline-flex">
					<img
						className="inline-block size-[46px] rounded-full"
						src="/img/cat-5.jpg"
						alt="Image Description"
					/>
				</div>
				<div className="flex flex-col w-full ">
					<div>User</div>
					<input
						type="text"
						className=" peer py-3 px-4 ps-5 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
						placeholder="在這輸入您的問題吧"
					/>
				</div>
			</div>
			{/* 學生問題 */}
			<div className=" w-full h-auto p-5 border inline-flex gap-4 ">
				<div className=" w-12 h-12  bg-white/opacity-0 rounded-3xl shadow border-black/opacity-5 justify-center items-center inline-flex">
					<img
						className="inline-block size-[46px] rounded-full"
						src="/img/cat-5.jpg"
						alt="Image Description"
					/>
				</div>
				<div className="w-full inline-flex flex-col">
					<div className="inline-flex gap-3">
						<div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
							Joyce
						</div>
						<div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
							2023-05-03
						</div>
					</div>

					<div className="w-full mt-2 text-zinc-600 text-sm font-medium font-['Inter'] leading-snug">
						請問上課前要準備的軟體是XD嗎～還是有其他的
					</div>
					{/* 老師回覆 */}
					<div className=" flex flex-col items-start gap-2 bg-neutral-100 rounded-lg p-4 mt-5 space-y-2">
						<div className="flex gap-3  ">
							<div className=" text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
								Mark
							</div>
							<div className="px-2 py-0.5 rounded-lg text-blue-500 flex text-center border border-blue-500 text-xs font-semibold font-['Inter'] leading-snug">
								助教
							</div>
							<div className=" text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
								2023-05-06
							</div>
						</div>

						<div className=" text-zinc-600 text-sm font-medium font-['Inter'] leading-relaxed ">
							嗨同學，我是助教 Ryan，上課的軟體是 Figma
							<br />
							附上軟體連結讓同學了解參考：https://www.figma.com
						</div>
					</div>

					<div
						className={`w-full flex justify-between items-center hs-collapse  ${
							replyVisible ? '' : 'hidden'
						} `}>
						<button
							onClick={toggleReplyVisibility}
							type="button"
							className={`font-semibold text-sm hs-collapse-toggle py-3 px-4 inline-flex items-center gap-x-2  rounded-lg  border-gray-200 bg-white text-gray-500  hover:text-blue-500 disabled:opacity-50 disabled:pointer-events-none `}
							id="hs-basic-collapse"
							data-hs-collapse="#hs-basic-collapse-heading">
							<IoArrowRedo />
							回覆
						</button>
						<div
							className={`flex gap-2 font-semibold text-sm justify-start items-center p-4 hover:text-blue-500 text-zinc-600  font-['Inter'] leading-snug `}>
							<TbMessageCircle2 />
							我也想問
						</div>
					</div>

					<div
						id="hs-basic-collapse-heading"
						className={` hs-collapse  ${
							replyVisible ? 'hidden' : ''
						} hidden w-full overflow-hidden transition-[height] duration-300`}
						aria-labelledby="hs-basic-collapse">
						<hr className="my-5" />
						<div className="relative">
							<textarea
								id="hs-floating-textarea-gray"
								className="peer p-4 pt-9 block w-full h-10rem bg-gray-100 border-transparent rounded-lg text-sm placeholder:text-transparent focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:focus:ring-neutral-600
    focus:pt-6
    focus:pb-2
    [&:not(:placeholder-shown)]:pt-6
    [&:not(:placeholder-shown)]:pb-2
    autofill:pt-6
    autofill:pb-2"
								placeholder="留下您的回覆內容"
								defaultValue={''}
							/>
							<label
								htmlFor="hs-floating-textarea-gray"
								className="absolute top-0 start-0 p-4 h-full text-sm truncate pointer-events-none transition ease-in-out duration-100  border-transparent origin-[0_0]  peer-disabled:opacity-50 peer-disabled:pointer-events-none
peer-focus:text-xs
peer-focus:-translate-y-1.5
peer-focus:text-blue-500 dark:peer-focus:text-neutral-500
peer-[:not(:placeholder-shown)]:text-xs
peer-[:not(:placeholder-shown)]:-translate-y-1.5
peer-[:not(:placeholder-shown)]:text-gray-500 dark:peer-[:not(:placeholder-shown)]:text-neutral-500 dark:text-neutral-500">
								留下您的回覆內容
							</label>
						</div>

						<div className="pt-2 w-full flex justify-end gap-2">
							<button
								onClick={handleCancel}
								type="button"
								className=" rounded-lg px-2 py- inline-flex flex-shrink-0 justify-center items-center size-18 rounded-me text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500 ">
								取消
							</button>

							<button
								type="submit"
								data-hs-overlay="#hs-sign-out-alert"
								className=" rounded-lg px-2 py-1 inline-flex flex-shrink-0 justify-center items-center size-18 rounded-me text-white bg-blue-600 hover:bg-blue-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-blue-500">
								送出
							</button>
							<button
								type="button"
								className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
								data-hs-overlay="#hs-toggle-between-modals-first-modal">
								Open modal
							</button>
							<div
								id="hs-toggle-between-modals-first-modal"
								className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
								<div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
									<div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
										<div className="flex justify-between items-center py-3 px-4 border-b">
											<h3 className="font-bold text-gray-800">Modal 1</h3>
											<button
												type="button"
												className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
												data-hs-overlay="#hs-toggle-between-modals-first-modal"
												data-hs-overlay-close="">
												<span className="sr-only">Close</span>
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
													<path d="M18 6 6 18" />
													<path d="m6 6 12 12" />
												</svg>
											</button>
										</div>
										<div className="p-4 overflow-y-auto">
											<p className="mt-1 text-gray-800">
												Show a second modal and hide this one with the button
												below.
											</p>
										</div>
										<div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
											<button
												type="button"
												className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
												data-hs-overlay="#hs-toggle-between-modals-second-modal">
												Open second modal
											</button>
										</div>
									</div>
								</div>
							</div>
							<div
								id="hs-toggle-between-modals-second-modal"
								className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
								<div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
									<div className="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
										<div className="flex justify-between items-center py-3 px-4 border-b">
											<h3 className="font-bold text-gray-800">Modal 2</h3>
											<button
												type="button"
												className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
												data-hs-overlay="#hs-toggle-between-modals-second-modal"
												data-hs-overlay-close="">
												<span className="sr-only">Close</span>
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
													<path d="M18 6 6 18" />
													<path d="m6 6 12 12" />
												</svg>
											</button>
										</div>
										<div className="p-4 overflow-y-auto">
											<p className="mt-1 text-gray-800">
												Hide this modal and show the first with the button
												below.
											</p>
										</div>
										<div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t">
											<button
												type="button"
												className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
												data-hs-overlay="#hs-toggle-between-modals-first-modal">
												Back to first
											</button>
										</div>
									</div>
								</div>
							</div>
							<div
								id="hs-sign-out-alert"
								className="hs-overlay hidden size-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto">
								<div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
									<div className="relative flex flex-col bg-white shadow-lg rounded-xl">
										<div className="absolute top-2 end-2">
											<button
												type="button"
												className="flex justify-center items-center size-7 text-sm font-semibold rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
												data-hs-overlay="#hs-sign-out-alert">
												<span className="sr-only">Close</span>
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
													<path d="M18 6 6 18" />
													<path d="m6 6 12 12" />
												</svg>
											</button>
										</div>
										<div className="p-4 sm:p-10 text-center overflow-y-auto">
											{/* Icon */}
											<span className="mb-4 inline-flex justify-center items-center size-[62px] rounded-full border-4 border-yellow-50 bg-yellow-100 text-yellow-500">
												<svg
													className="flex-shrink-0 size-5"
													xmlns="http://www.w3.org/2000/svg"
													width={16}
													height={16}
													fill="currentColor"
													viewBox="0 0 16 16">
													<path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
												</svg>
											</span>
											{/* End Icon */}
											<h3 className="mb-2 text-2xl font-bold text-gray-800">
												Sign out
											</h3>
											<p className="text-gray-500">
												Are you sure you would like to sign out of your Preline
												account?
											</p>
											<div className="mt-6 flex justify-center gap-x-4">
												<a
													className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
													href="#">
													Sign out
												</a>
												<button
													type="button"
													className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
													data-hs-overlay="#hs-sign-out-alert">
													Cancel
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* 分頁 */}
			<div className="w-full flex justify-center">
				<div className="grid justify-center sm:flex sm:justify-start sm:items-center gap-2">
					{/* Pagination */}
					<nav className="flex items-center gap-x-1">
						<button
							type="button"
							className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
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
								<path d="m15 18-6-6 6-6" />
							</svg>
							<span
								aria-hidden="true"
								className="sr-only">
								Previous
							</span>
						</button>
						<div className="flex items-center gap-x-1">
							<button
								type="button"
								className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-full focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:bg-white/10"
								aria-current="page">
								1
							</button>
							<button
								type="button"
								className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
								2
							</button>
							<button
								type="button"
								className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
								3
							</button>
							<div className="hs-tooltip inline-block">
								<button
									type="button"
									className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10">
									<span className="group-hover:hidden text-xs">•••</span>
									<svg
										className="group-hover:block hidden flex-shrink-0 size-5"
										xmlns="http://www.w3.org/2000/svg"
										width={24}
										height={24}
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth={2}
										strokeLinecap="round"
										strokeLinejoin="round">
										<path d="m6 17 5-5-5-5" />
										<path d="m13 17 5-5-5-5" />
									</svg>
									<span
										className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
										role="tooltip">
										往下 4 頁
									</span>
								</button>
							</div>
							<button
								type="button"
								className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
								8
							</button>
						</div>
						<button
							type="button"
							className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
							<span
								aria-hidden="true"
								className="sr-only">
								Next
							</span>
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
								<path d="m9 18 6-6-6-6" />
							</svg>
						</button>
					</nav>
					{/* End Pagination */}
					<div className="flex justify-center items-center gap-x-5">
						{/* Dropdown */}
						<div className="hs-dropdown [--placement:top-left] relative inline-flex">
							<button
								id="hs-default-pilled-bordered-pagination-dropdown"
								type="button"
								className="hs-dropdown-toggle py-2 px-2.5 inline-flex items-center gap-x-1 text-sm rounded-lg border border-gray-200 text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700">
								5 page
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
									<path d="m6 9 6 6 6-6" />
								</svg>
							</button>
							<div
								className="hs-dropdown-menu hs-dropdown-open:opacity-100 w-48 hidden z-50 transition-[margin,opacity] opacity-0 duration-300 mb-2 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700"
								aria-labelledby="hs-default-pilled-bordered-pagination-dropdown">
								<button
									type="button"
									className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
									5 page
									<svg
										className="ms-auto flex-shrink-0 size-4 text-blue-600 dark:text-blue-500"
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
								</button>
								<button
									type="button"
									className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
									8 page
								</button>
								<button
									type="button"
									className="w-full flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700">
									10 page
								</button>
							</div>
						</div>
						{/* End Dropdown */}
					</div>
				</div>
			</div>
		</>
	);
}
