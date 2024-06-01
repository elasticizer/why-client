import React, { useEffect, useState } from 'react';

import Card from './card';
export default function CardList() {
	const [course, setCourses] = useState([]);
	const data = async () => {
		const url = `/api/course`;
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data)
			//確定資料是陣列資料類型才設定到狀態當中
			if (Array.isArray(data)) {
				setCourses(data);
			}
		} catch (e) {
			console.error(e);
			setCourses([]);
		}
	};
	useEffect(() => {
		data();
	}, []);

	return (
		<>
			{course.map(v => {
				console.log(v)
				return <Card data={v} key={v.SN} />
			})
			}
		</>
	)
}
