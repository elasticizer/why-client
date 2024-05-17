import React from 'react';
import WorkAuthor from './workAuthor';
import WorkCover from './workCover';
import WorkLikeAndShare from './workLikeAndShare';

export default function WorkAside() {
	return (
		<>
			<div className='flex flex-col gap-5'>
				<WorkAuthor />
				<WorkCover />
				<WorkLikeAndShare />
			</div>
		</>
	);
}
