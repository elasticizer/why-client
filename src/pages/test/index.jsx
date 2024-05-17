import { useState, useEffect } from 'react';
import CourseList from '../../components/cart/course';

export default function TestPage() {
	return (
		<>
			<title>測試課程頁面</title>
			<div className="container flex gap-3 mt-3">
				<CourseList />
			</div>
		</>
	);
}
