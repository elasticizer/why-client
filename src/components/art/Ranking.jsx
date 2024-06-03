import clsx from 'clsx';
import React, { useState } from 'react';
import { HiEye } from 'react-icons/hi';
import { motion } from 'framer-motion';

import { IoCaretUp } from 'react-icons/io5';
import AuthorTiny from './AuthorTiny';

const Ranking = ({ ranking, art }) => {
	const [isHovered, setIsHovered] = useState(false);

	return (
		<>
			<motion.li
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ type: 'spring' }}
				className="transition card  border-4 border-white hover:border-orange-200 shadow-xl p-5 font-medium leading-6 text-gray-900 flex flex-col gap-5">
				<div className="flex flex-col items-end gap-2">
					<div className="mr-auto">
						<span className="text-xl font-black transition hover:text-orange-500 hover:cursor-pointer">
							{art.title}
						</span>
						<AuthorTiny id={art.author_id}></AuthorTiny>
					</div>
					<div
						className="flex justify-between gap-4 w-full"
						onMouseEnter={() => setIsHovered(true)}
						onMouseLeave={() => setIsHovered(false)}>
						<div className="flex justify-start items-center gap-2 rounded-full py-1  text-sm">
							<span
								className={clsx(
									`font-black text-5xl italic pr-5`,
									ranking === 1 && 'text-orange-500',
									ranking === 2 && 'text-orange-400',
									ranking === 3 && 'text-orange-300'
								)}>
								{ranking}
							</span>
							<span className="">{`${art.view_count} 人看過`}</span>
						</div>
						<div
							className="flex justify-start items-center gap-2 tooltip tooltip-bottom transition hover:bg-slate-100 rounded-full px-4 py-1"
							data-tip={`${art.clap_total} 人贊同`}>
							<IoCaretUp className="icon" />
							<p>{art.clap_total}</p>
						</div>
					</div>
				</div>
			</motion.li>
		</>
	);
};

export default Ranking;
