import React from 'react';
import CourseListTbody from './courseListTbody';
import SearchBox from './searchBox';
import { useState, useEffect } from 'react';

export default function CourseList() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch('/api/income');
				let postData = await res.json();
				setData(postData);
			} catch (error) {
				setData([]);
			}
		};
		fetchData();
	}, []);

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
			{data.map((course, i) => {
				return (
					<CourseListTbody
						key={i}
						data={course}
					/>
				);
			})}
		</>
	);
}
