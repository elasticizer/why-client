import React from 'react';

export default function CourseItem() {
	return (
		<>
			<tr>
				<td className="size-px whitespace-nowrap ps-6">
					<div className="ps-2 lg:ps-3 xl:ps-0 pe-6 py-3">
						<div className="flex items-center gap-x-3">
							<span className="inline-flex items-center justify-center size-[38px] rounded-full bg-white border border-gray-300 dark:bg-neutral-800 dark:border-neutral-700">
								<span className="font-medium text-sm text-gray-800 leading-none dark:text-neutral-200 ">
									A
								</span>
							</span>
							<div className="grow">
								<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
									原創角色設計全攻略｜從風格定位到 IP 經營
								</span>
								<span className="block text-sm text-gray-500 dark:text-neutral-500">
									所有課程 設計 應用設計
								</span>
							</div>
						</div>
					</div>
				</td>
				<td className="h-px w-72 whitespace-nowrap">
					<div className="px-6 py-3">
						<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
							100
						</span>
					</div>
				</td>
				<td className="size-px whitespace-nowrap">
					<div className="px-6 py-3">
						<button
							type="button"
							className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
							<svg
								className="size-2.5"
								xmlns="http://www.w3.org/2000/svg"
								width={16}
								height={16}
								fill="currentColor"
								viewBox="0 0 16 16">
								<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
							</svg>
							已領取
						</button>
					</div>
				</td>
				<td className="size-px whitespace-nowrap">
					<div className="px-6 py-3">
						<div className="flex items-center gap-x-3">
							<span className="text-xs text-gray-500 dark:text-neutral-500">
								NT$500
							</span>
						</div>
					</div>
				</td>
				<td className="size-px whitespace-nowrap">
					<div className="px-6 py-3">
						<span className="text-sm text-gray-500 dark:text-neutral-500">
							2024-04-22
						</span>
					</div>
				</td>
			</tr>
			<tr>
				<td className="size-px whitespace-nowrap ps-6">
					<div className="ps-2 lg:ps-3 xl:ps-0 pe-6 py-3">
						<div className="flex items-center gap-x-3">
							<span className="inline-flex items-center justify-center size-[38px] rounded-full bg-white border border-gray-300 dark:bg-neutral-800 dark:border-neutral-700">
								<span className="font-medium text-sm text-gray-800 leading-none dark:text-neutral-200 ">
									A
								</span>
							</span>
							<div className="grow">
								<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
									原創角色設計全攻略｜從風格定位到 IP 經營
								</span>
								<span className="block text-sm text-gray-500 dark:text-neutral-500">
									所有課程 設計 應用設計
								</span>
							</div>
						</div>
					</div>
				</td>
				<td className="h-px w-72 whitespace-nowrap">
					<div className="px-6 py-3">
						<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
							100
						</span>
					</div>
				</td>
				<td className="size-px whitespace-nowrap">
					<div className="px-6 py-3">
						<button
							type="button"
							className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-yellow-400 text-yellow-800 rounded-full dark:bg-yellow-500/10 dark:text-yellow-500">
							<svg
								className="ilv0x joej1"
								xmlns="http://www.w3.org/2000/svg"
								width={10}
								height={10}
								fill="currentColor"
								viewBox="0 0 16 16">
								<path
									fillRule="evenodd"
									clipRule="evenodd"
									d="M8 1C8.55228 1 9 1.44772 9 2V7L14 7C14.5523 7 15 7.44771 15 8C15 8.55228 14.5523 9 14 9L9 9V14C9 14.5523 8.55228 15 8 15C7.44772 15 7 14.5523 7 14V9.00001L2 9.00001C1.44772 9.00001 1 8.5523 1 8.00001C0.999999 7.44773 1.44771 7.00001 2 7.00001L7 7.00001V2C7 1.44772 7.44772 1 8 1Z"
								/>
							</svg>
							提取收益
						</button>
					</div>
				</td>
				<td className="size-px whitespace-nowrap">
					<div className="px-6 py-3">
						<div className="flex items-center gap-x-3">
							<span className="text-xs text-gray-500 dark:text-neutral-500">
								NT$500
							</span>
						</div>
					</div>
				</td>
				<td className="size-px whitespace-nowrap">
					<div className="px-6 py-3">
						<span className="text-sm text-gray-500 dark:text-neutral-500">
							2024-04-22
						</span>
					</div>
				</td>
			</tr>
		</>
	);
}
