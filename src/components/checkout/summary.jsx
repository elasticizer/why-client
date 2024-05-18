import { useState, useEffect } from 'react';
import SummaryItem from './summaryItem';

export default function Summary() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const getCourse = async () => {
			const url = '/api/course';
			try {
				const res = await fetch(url);
				const data = await res.json();
				setCourses(data);
			} catch (e) {
				setCourses([]);
			}
		};
		getCourse();
	}, []);

	return (
		<>
			<div className="border border-gray-300 rounded-lg px-4 pt-4 mb-4">
				<div className="flex pb-4 border-b border-gray-300">
					<div className="flex items-center gap-x-3">
						<p className="text-xl">購買明細</p>
						<p className="text-sm">總共1件</p>
					</div>
				</div>
				<div className="grid grid-cols-1 divide-y">
					{courses.length > 0 && (
						<SummaryItem
							key={courses[0].id}
							name={courses[0].Name}
							domainName={courses[0].DomainName}
							price={courses[0].Price}
						/>
					)}
				</div>
			</div>
		</>
	);
}
