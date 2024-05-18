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
				setCourse(data);
		} catch (e) {
			setCourse([]);
		}
	};

	return (
		<>
			{course.map((v, i) => (
				<CourseCard
					key={i}
					name={v.Name}
					price={v.Price}
					intro={v.Intro}
				/>
			))}
		</>
	);
}
