import React from 'react';

export default function WorkBreadcrumb() {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		getAuthor();
	}, []);

	const getAuthor = async () => {
		const url = '/api/cart';
		try {
			const res = await fetch(url);
			const data = await res.json();
			setAuthor(data);
		} catch (e) {
			setAuthor(null);
		}
	};
	return (
		<>
			{/* Breadcrumb */}
			<ol className="flex items-center whitespace-normal mt-5 ps-4">
				<li className="inline-flex items-center">
					<a
						className="flex items-center text-md text-gray-500 hover:text-orange-500 focus:outline-none focus:text-orange-600 dark:text-neutral-500 dark:hover:text-orange-500 dark:focus:text-orange-500"
						href="#">
						產品設計實戰：用Figma打造絕佳UI/UX
					</a>
					<svg
						className="flex-shrink-0 mx-2 overflow-visible size-4 text-gray-400 dark:text-neutral-600"
						xmlns="http://www.w3.org/2000/svg"
						width={24}
						height={24}
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth={2}
						strokeLinecap="round"
						strokeLinejoin="round">
						<path d="m9 18 6-6-6-6" />
					</svg>
				</li>
				<li
					className="inline-flex items-center text-md font-semibold text-gray-800 truncate dark:text-neutral-200"
					aria-current="page">
					Joy 的作品
				</li>
			</ol>
			{/* End Breadcrumb */}
		</>
	);
}
