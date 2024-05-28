import React, { useState, useEffect } from 'react';
import CourseListTbody from './courseListTbody';
import SelectBox from './selectBox';

export default function CourseList({ data }) {
	const [desc, setDesc] = useState(true);
	const [filteredData, setFilteredData] = useState(data);
	const [searchKeyword, setSearchKeyword] = useState('');

	useEffect(() => {
		setFilteredData(data);
	}, [data]);

	const handleSearchChange = event => {
		setSearchKeyword(event.target.value);
		console.log(searchKeyword);
	};

	const handleSearchClick = () => {
		const keyword = searchKeyword.toLowerCase();
		const newFilteredData = data.filter(item => {
			return (
				item.Name.toLowerCase().includes(keyword) ||
				item.WhenLaunched.includes(keyword)
			);
		});
		setFilteredData(newFilteredData);
	};

	const handleClearSearch = () => {
		setSearchKeyword('');
		setFilteredData(data);
	};

	return (
		<>
			<SelectBox
				searchKeyword={searchKeyword}
				handleSearchChange={handleSearchChange}
				handleSearchClick={handleSearchClick}
				handleClearSearch={handleClearSearch}
				data={data}
			/>
			{/* searchBar */}
			{/* searchBar */}
			{/* table */}
			{/* thead */}
			<div className="flex flex-row justify-between items-center px-4 py-2 border rounded-t-lg font-semibold bg-yellow-50">
				<div className="w-1/2">課程名稱</div>
				<div className="w-1/3 text-center">開課時間</div>
				<div
					className="w-1/3 text-center cursor-pointer"
					onClick={() => {
						const sortedData = [...filteredData].sort((a, b) =>
							desc
								? new Date(a.Income) - new Date(b.Income)
								: new Date(b.Income) - new Date(a.Income)
						);
						setFilteredData(sortedData);
						setDesc(!desc);
					}}>
					課程收益 {desc ? '▼' : '▲'}
				</div>
			</div>
			{/* end thead */}
			{filteredData.map((course, i) => (
				<CourseListTbody
					key={i}
					data={course}
				/>
			))}
		</>
	);
}
