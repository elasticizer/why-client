import { useState, useEffect } from 'react';
import CourseCard from './courseCard';

export default function Recommended() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		getCourses();
	}, []);

	const getCourses = async () => {
		const url = '/api/course/recommended';
		try {
			const res = await fetch(url);
			const data = await res.json();
			setCourses(data);
		} catch (e) {
			console.error(e);
			setCourses([]);
		}
	};

	return (
		<>
			{courses.map((course, i) => (
				<CourseCard
					key={course.i}
					name={course.Name}
          filename={course.Filename}
				/>
			))}
		</>
	);
}
