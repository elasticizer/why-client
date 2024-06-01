import React from 'react';

import Chapterlist from '../chapter/chapterlist';


export default function NavCh() {
	return (
		<>
			<div className="  px-3 py-3 w-full inline-flex justify-between  items-center space-x-80 ">
				<div className="flex items-center">
					<div className="  text-neutral-800 text-2xl font-semibold font-['Inter'] leading-loose">
						單元總覽
					</div>
				</div>
			</div>
			<Chapterlist />
		</>
	);
}
