import Image from 'next/image';
import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import RankingGroup from './RankingGroup';
import FieldGroup from './FieldGroup';
import { AnimatePresence, motion } from 'framer-motion';

import ArtDetailRight from './ArtDetailRight';
import SearchPanel from './(search-panel)/SearchPanel';
export default function RightSearch({ id }) {
	const [selected, setSelected] = useState(null);

	return (
		<>
			<AnimatePresence>
				{selected && (
					<>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							transition={{ type: 'spring' }}
							onClick={() => setSelected(null)}
							className=" bg-zinc-500  bg-opacity-70  fixed bottom-0 left-0  w-screen h-screen backdrop-blur-sm z-10 flex   justify-center items-center cursor-pointer">
							<SearchPanel
								selected={selected}
								setSelected={setSelected}></SearchPanel>
						</motion.div>
					</>
				)}
			</AnimatePresence>
			<motion.div
				layoutId={'search'}
				className="z-50 bg-white fixed -top-2 right-36 w-20 h-1 rounded-full "></motion.div>

			<section className="bg-white w-[350px] sticky top-0 h-screen overflow-y-scroll">
				<div className="px-4 flex flex-col gap-8">
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ type: 'spring' }}
						onClick={e => {
							setSelected('search');
						}}>
						<button className="search-btn ">
							搜索文章
							<FaSearch />
						</button>
					</motion.div>
					{id && <ArtDetailRight id={id}></ArtDetailRight>}
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ type: 'spring' }}>
						<FieldGroup></FieldGroup>
					</motion.div>

					<div className="pt-1 ranking">
						<motion.div
							initial={{ opacity: 0, y: -20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.7 }}
							className="text-xl mb-8 bg-orange-100 text-center font-black rounded-xl py-3 shadow-right-bottom-sm text-[#ff8d0a] tracking-widest">
							熱門文章
						</motion.div>
						<ul className="flex flex-col gap-5 pb-20">
							<RankingGroup></RankingGroup>
						</ul>
					</div>
				</div>
			</section>
		</>
	);
}
