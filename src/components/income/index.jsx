import React, { useEffect, useState } from 'react';
import Sidebar from '@/components/income/sidebar';
import Content from '@/components/income/content';
import { useSession } from '@/contexts/session';

export default function IncomePage() {
	const [data, setData] = useState([]);
	const session = useSession();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`/api/courseCount`);
				const postData = await res.json();
				console.log(postData);

				setData(postData);
			} catch (error) {
				setData([]);
			}
		};
		fetchData();
	}, []);

	return (
		<>
			<div className="container mt-8">
				<div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
					<div className="grid lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:gap-x-6 md:gap-y-3 sm:gap-y-3">
						<Sidebar {...{ data }} />
						<Content {...{ data }} />
					</div>
				</div>
			</div>
		</>
	);
}
