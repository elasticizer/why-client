import React from 'react';

export default function SearchBox() {
	return (
		<>
			<div className="w-1/3 my-4">
				<label
					htmlFor="hs-trailing-button-add-on-with-icon"
					className="sr-only">
					Label
				</label>
				<div className="flex rounded-lg border border-orange-500">
					<input
						type="text"
						id="hs-trailing-button-add-on-with-icon"
						name="hs-trailing-button-add-on-with-icon"
						className="py-3 px-4 block w-full border-orange-200 shadow-sm rounded-s-lg lg:text-sm sm:text-xs focus:z-10 focus:border-orange-500 focus:ring-orange-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
						placeholder="請輸入要搜尋的訂單編號或課程名稱"
					/>
					<button
						type="button"
						className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-orange-500 text-white hover:bg-orange-400 disabled:opacity-50 disabled:pointer-events-none">
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
							<circle
								cx={11}
								cy={11}
								r={8}
							/>
							<path d="m21 21-4.3-4.3" />
						</svg>
					</button>
				</div>
			</div>
		</>
	);
}
