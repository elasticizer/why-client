import React from 'react';
import useSWR from 'swr';
import ArtCard from './ArtCard';
import { fetcher } from '@/utils/utils';

const ArtCardGroup = () => {
	const { data, error, isLoading } = useSWR('/api/art', fetcher);
	if (error || data?.error) return <div>failed to load</div>;
	if (isLoading) return <></>;

	return (
		<>
			<div className="flex flex-col gap-10">
				{data.data.map((v, i) => {
					return (
						<ArtCard
							key={v._id}
							data={v}></ArtCard>
					);
				})}
			</div>
		</>
	);
};

export default ArtCardGroup;
