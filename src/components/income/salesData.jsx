import React, { useEffect, useState } from 'react';
import SalesDataTbody from './salesDataTbody';

export default function SalesData() {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`/api/salesData`);
				const postData = await res.json();
				setData(postData);
			} catch (error) {
				setData([]);
			}
			console.log(data);
		};
		fetchData();
	}, []);

	return (
		<>
			{/* table */}
			{/* thead */}
			<div className="flex flex-row justify-between items-center px-4 py-2 border rounded-t-lg font-semibold bg-yellow-50">
				<div className="w-1/2">課程名稱</div>
				<div className="w-1/3 text-center">售出日期</div>
				<div className="w-1/3 text-center">收益金額</div>
			</div>
			{/* end thead */}
			{/* tbody */}
			{data.map((data, i) => {
				return (
					<SalesDataTbody
						key={i}
						name={data.Name}
						identifier={data.Identifier}
						date={data.WhenPaid}
						price={data.Price}
					/>
				);
			})}
			{/* end tbody */}
		</>
	);
}
