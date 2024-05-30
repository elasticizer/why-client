import { HtmlContext } from 'next/dist/shared/lib/html-context.shared-runtime';
import React, { useEffect, useState } from 'react';

export function TestIntro() {
	const [expanded, setExpanded] = useState(false);

	const toggleContent = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="content">
			<div className={expanded ? 'hidden' : 'block'}>
				這裡是部分內容...部分內容... 部分內容... 部分內容... 部分內容...
				部分內容... 部分內容...
			</div>
			<p className={expanded ? 'block' : 'hidden'}>
				這裡是部分內容...部分內容... 部分內容... 部分內容... 部分內容...
				部分內容... 部分內容...這裡是全部內容...
			</p>

			<button
				onClick={toggleContent}
				className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
				{expanded ? '收起內容' : '全部展開'}
			</button>
		</div>
	);
}

export default function NavIntro() {

	const [course, setCourse] = useState([]);
	useEffect(() => {
		const fetchdata = async () => {
			try {
				const res = await fetch(`/api/coursedetail`);
				if (!res.ok) {
					throw new Error(`HTTP error! status: ${res.status}`);
				}
				const postdata = await res.json();
				setCourse(postdata);
			} catch (e) {
				console.error(e);
				setCourse([]);
			}
		};
		fetchdata();
	}, []);
	if (course.length === 0) {
		return <div>Loading...</div>;
	}

	
	return (
		<>
			<div className="overflow-auto px-3 py-3" dangerouslySetInnerHTML={{ __html: course[0].Syllabus }} />

		</>
	);
}
