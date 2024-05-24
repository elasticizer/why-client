import React from 'react';

export default function chapterSelection() {
	return (
		<div className="flex items-center mt-5 md:mt-0">
			<p className="md:block hidden text-nowrap text-base	font-bold text-gray-600 md:text-lg">章節選擇：</p>
			<div className="w-full">
				<select
					id="domain"
					name="domain"
					autoComplete="domain-name"
					className="block w-full md:w-52 border-0  text-base text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 sm:leading-6 ps-1 pe-3 p-2 ps-3 pe-3 md:text-lg"
				>
					<option value="Music">選擇章節</option>
					<option value="Music">程式設計</option>
					<option value="Language">入門概論以及概述</option>
					<option value="Photography">設計理念</option>
				</select>
			</div>
		</div>
	);
}
