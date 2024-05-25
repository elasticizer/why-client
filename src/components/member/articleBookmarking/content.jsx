import { useState, useEffect } from 'react';
import styles from '@/styles/teacher.module.css';
import ContentCard from '@/components/member/articleBookmarking/contentCard';

export default function Content({ domain, search }) {
	const [data, setData] = useState([{}]);
	const [dataSuccess, setDataSuccess] = useState('false');

	useEffect(() => {
		const handleData = async () => {
			try {
				const list = await fetch(`/api/learner/articleBookmarking`).then(r => r.json());
console.log(list);


				const data = list.filter(
					item => item.Title.includes(search)
						&& (!domain || item.DomainSN === +domain
						));
				setData(data);
				console.log(data);
			} catch (err) {
				console.error('Error fetching data:', err);
			}
		};

		handleData();
	}, [domain, search,dataSuccess]);

	return (
		<div className={styles.content}>
			<div className={`${styles.courseCards} ${styles.contentDiv}`}>
				<div className="bg-white w-full">
					<div className="mx-auto max-w-full px-6 lg:px-8">
						<div className="mx-auto mt-10 grid max-w-full grid-cols-1 gap-x-8 gap-y-16  border-gray-200 sm:mt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
							{data.map((v) => {
								return (
									<ContentCard
										key={v.index}
										WhenCreated={v.WhenCreated}
										Title={v.Title}
										Content={v.Content}
										Author={v.Author}
										UserSN={v.UserSN}
										ArticleSN={v.ArticleSN}
										setDataSuccess={setDataSuccess}
									/>
								);
							})}
							{/* More posts... */}
						</div>
					</div>
				</div>



			</div>
		</div>
	);
}
