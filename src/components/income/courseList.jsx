import React from 'react';
import CourseListTbody from './courseListTbody';
import SearchBox from './searchBox';

export default function CourseList() {
	return (
		<>
			<SearchBox />
			{/* table */}
			{/* thead */}
			<div className="flex flex-row justify-between items-center px-4 py-2 border rounded-t-lg font-semibold bg-yellow-50">
				<div className="w-1/2">課程名稱</div>
				<div className="w-1/5 text-center">開課日期</div>
				<div className="w-1/5 text-center">總收益</div>
			</div>
			{/* end thead */}
			<CourseListTbody />
		</>
	);
}
