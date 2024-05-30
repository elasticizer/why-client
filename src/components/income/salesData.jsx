import React, { useEffect, useRef, useState } from 'react';
import SalesDataTbody from './salesDataTbody';
import SelectBoxSale from './selectBoxSale';

export default function SalesData() {
	const [data, setData] = useState([]);
	const [desc, setDesc] = useState(true);
	const [searchKeyword, setSearchKeyword] = useState('');
	const [filteredData, setFilteredData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`/api/salesData`);
				const postData = await res.json();
				setData(postData);
			} catch (error) {
				setData([]);
			}
		};
		fetchData();
	}, []);

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
				item.WhenPaid.includes(keyword)
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
			<SelectBoxSale
				searchKeyword={searchKeyword}
				handleSearchChange={handleSearchChange}
				handleSearchClick={handleSearchClick}
				handleClearSearch={handleClearSearch}
				data={data}
			/>
			{/* table */}
			{/* thead */}
			<div className="flex flex-row justify-between items-center px-4 py-2 border rounded-t-lg font-semibold bg-gray-100">
				<div className="w-1/2">課程名稱</div>
				<div
					className="w-1/3 text-center cursor-pointer"
					onClick={() => (
						setFilteredData(
							filteredData.sort((a, b) =>
								desc
									? new Date(a.WhenPaid) - new Date(b.WhenPaid)
									: new Date(b.WhenPaid) - new Date(a.WhenPaid)
							)
						),
						setDesc(!desc)
					)}>
					售出時間 {desc ? '▼' : '▲'}
				</div>
				<div className="w-1/3 text-center">課程價格</div>
			</div>
			{/* end thead */}
			{/* tbody */}
			{filteredData.map((data, i) => (
				<SalesDataTbody
					key={i}
					name={data.Name}
					identifier={data.Identifier}
					date={new Date(data.WhenPaid + 'Z').toLocaleString()}
					price={data.Price}
				/>
			))}
			{/* end tbody */}
		</>
	);
}
