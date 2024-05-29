import React from 'react';
import { IoSearch } from 'react-icons/io5';

export default function SearchBox({
	searchKeyword,
	handleSearchChange,
	handleSearchClick,
	handleClearSearch
}) {
	return (
		<div className="w-full mb-2 flex">
			<div className="flex-grow">
				<div className="flex rounded-lg border border-gray-500">
					<input
						type="text"
						id="hs-trailing-button-add-on-with-icon"
						name="hs-trailing-button-add-on-with-icon"
						className="py-3 px-4 block w-full border-gray-200 shadow-sm rounded-s-lg lg:text-sm sm:text-xs focus:z-10 focus:border-gray-500 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none"
						placeholder="請輸入關鍵字"
						value={searchKeyword}
						onChange={handleSearchChange}
					/>
					<button
						type="button"
						onClick={handleSearchClick}
						className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-sky-500 text-white hover:bg-sky-400 disabled:opacity-50 disabled:pointer-events-none">
						<IoSearch className="flex-shrink-0 size-6" />
					</button>
				</div>
			</div>
			<button
				type="button"
				onClick={handleClearSearch}
				className="ml-2 py-3 px-4 text-sm font-semibold rounded-lg border border-transparent bg-sky-500 text-white hover:bg-sky-400 disabled:opacity-50 disabled:pointer-events-none">
				清除搜尋
			</button>
		</div>
	);
}
