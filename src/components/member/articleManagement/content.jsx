import React, { useState, useEffect } from 'react';
import styles from '@/styles/teacher.module.css';
import ContentCard from '@/components/member/articleManagement/contentCard';
import { useSession } from '@/contexts/session';

export default function Content({ domain, search }) {
	const [data, setData] = useState([{}]);
	const [dataSuccess, setDataSuccess] = useState('false');
	const [sessionIcon,setSessionIcon]=useState("")



	const session = useSession();
	useEffect(() => {
		if (session) {
			setSessionIcon(session.Icon);
		}
	}, [session]);




	useEffect(() => {
		const handleData = async () => {
			try {
				const list = await fetch(`/api/teacher/articleManagement`).then(r => r.json());
				const data = list.filter(
					item => item.Title.includes(search)
						&& (!domain || item.DomainSN === +domain
						));
				setData(data);
			} catch (err) {
				console.error('Error fetching data:', err);
			}
		};

		handleData();
	}, [domain, search, dataSuccess]);
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
								Author={v.Authorname}
								UserSN={v.AuthorSN}
								ArticleSN={v.ArticleSN}
								setDataSuccess={setDataSuccess}
								picUrl={sessionIcon}
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
