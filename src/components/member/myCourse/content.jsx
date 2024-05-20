import React, { useEffect, useState } from 'react';
import styles from '@/styles/learner.module.css';
import ContentCard from "@/components/member/myCourse/contentCard";

export default function Content({ domain, search }) {
	const [data, setData] = useState([]);
	const handleData = async () => {
		try {
			const response = await fetch(`/api/learner/myCourse/filter${domain ? `?domain=${domain}` : ''}${search ? `${domain ? '&' : '?'}search=${search}` : ''}`);
			const data = await response.json();
			setData(data);
			console.log(data);
		} catch (err) {
			console.error('Error fetching data:', err);
		}
	};
	useEffect(() => {
		handleData();
	}, [domain, search]);
	return (
		<div className={styles.content}>
			<div className={`grid grid-cols-1 w-full md:grid-cols-3 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 md:gap-y-16 mt-10 sm:mt-16`}>
				{data.length === 0 && (
					<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
						<strong className="font-bold">警告：</strong>
						<span className="block sm:inline">沒有搜尋結果</span>
					</div>
				)}
				{data.map((v) => {
					return (
						<ContentCard
							key={v.index}
							picUrl={v.Filename}
							title={v.Name}
							domain={v.DomainName}
							Nickname={v.Nickname}
						/>
					);
				})}
			</div>
		</div>
	);
}
