import { useState, useEffect } from 'react';

export default function Domain({ setDomain }) {
	const [data, setData] = useState([]);
	const handleData = async () => {
		try {
			const response = await fetch('/api/domain');
			const results = await response.json();
			setData(results);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		handleData();
	}, []);

	return (
		<div className="flex items-center mt-5 md:mt-0">
			<p className="md:block hidden text-nowrap">領域分類：</p>
			<div className="w-full">
				<select
					id="domain"
					name="domain"
					autoComplete="domain-name"
					className="block w-full  border-0  text-base text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 sm:leading-6 hover:ring-orange-300 hover:ring-2"
					onChange={(e) => {
						setDomain(e.target.value);
					}}
				><option value="">選擇領域</option>
					{data.map((v) => {
						return (
							<option key={v.SN} value={v.SN}>{v.Name}</option>
						);
					})}

				</select>
			</div>
		</div>
	);
}
