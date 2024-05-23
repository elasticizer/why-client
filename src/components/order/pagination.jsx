import React from 'react';

export default function Pagination() {
	return (
		<>
			<nav className="flex justify-end items-center gap-x-1 my-4">
				<button
					type="button"
					className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
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
						className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-gray-200 text-gray-800 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-white dark:focus:bg-white/10"
						aria-current="page">
						1
					</button>
					<button
						type="button"
						className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
						2
					</button>
					<button
						type="button"
						className="min-h-[38px] min-w-[38px] flex justify-center items-center border border-transparent text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
						3
					</button>
				</div>
				<button
					type="button"
					className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10">
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
		</>
	);
}
