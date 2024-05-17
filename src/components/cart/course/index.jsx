import React, { useState, useEffect } from 'react';
import CourseCard from './courseCard';

export default function CourseList() {
	const [course, setCourse] = useState([]);

	useEffect(() => {
		getCourse();
	}, []);

	const getCourse = async () => {
		const url = '/api/course';
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			if (data) {
				setCourse(data);
			}
		} catch (e) {
			console.error(e);
		}
	};

	return (
		<>
			{course.map((v, index) => (
				<CourseCard
					key={index}
					name={v.Name}
					price={v.Price}
					intro={v.Intro}
				/>
			))}
		</>
	);
}
