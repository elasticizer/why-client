import { useState, useEffect } from 'react';
import styles from '@/styles/learner.module.css';
import ContentCard from "@/components/member/wishList/contentCard";

export default function Content({ domain, search }) {
	const [data, setData] = useState([{}]);
	const [dataSuccess, setDataSuccess] = useState('false');

	useEffect(() => {
		const handleData = async () => {
			try {
				const list = await fetch(`/api/learner/wishlist`).then(r => r.json());
				const results = list.filter(
					item => item.Name.includes(search)
						&& (!domain || item.DomainSN === +domain
						));
				setData(results);
				console.log(data);
			} catch (err) {
				console.error('Error fetching data:', err);
			}
		};

		handleData();
	}, [domain, search, dataSuccess]);

	return (
		<div className={styles.content}>
			<div className="grid grid-cols-2 w-full md:grid-cols-3 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 md:gap-y-16 mt-10 sm:mt-16">
				{data.map(v => {
					return (
						<ContentCard
							key={v.SN}
							user={v.UserSN}
							collectedCoursSN={v.CollectedCoursSN}
							title={v.Name}
							teacher={v.Nickname}
							domain={v.DomainName}
							picUrl={v.Filename}
							price={v.Price}
							quantity={v.Total}
							setDataSuccess={setDataSuccess}
						/>

					);
				})}

			</div>
		</div>
	);
}
