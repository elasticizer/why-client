import React from 'react';
import Ranking from './Ranking';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then(res => res.json());
export default function RankingGroup() {
	const { data, error, isLoading } = useSWR('/api/art/ranking', fetcher);
	if (error || data?.error) return <div>failed to load</div>;
	if (isLoading)
		return (
			<>
				<li className=" w-[300px] h-[210px] border-4 rounded-3xl "></li>
				<li className=" w-[300px] h-[210px] border-4 rounded-3xl "></li>
			</>
		);
	return (
		<>
			<Ranking
				ranking={1}
				art={data.data[0]}></Ranking>
			<Ranking
				ranking={2}
				art={data.data[1]}></Ranking>
			<Ranking
				ranking={3}
				art={data.data[2]}></Ranking>
		</>
	);
}
