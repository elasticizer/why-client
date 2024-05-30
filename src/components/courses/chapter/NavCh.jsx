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

					<div className=" pl-5 text-zinc-600 text-base font-normal font-['Inter'] leading-relaxed">
						{/* 共 6 章 60 單元｜總時長 901 分鐘 */}
					</div>
				</div>
				{/* <button
                    type="button"
                    className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-teal-500 hover:bg-teal-100 hover:text-teal-800 disabled:opacity-50 disabled:pointer-events-none dark:hover:bg-teal-800/30 dark:hover:text-teal-400">
                    全部展開
                </button> */}
			</div>
			<Chapterlist />
		</>
	);
}
