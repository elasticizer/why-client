import clsx from 'clsx';
import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowDown, FaArrowUp, FaTrashAlt } from 'react-icons/fa';

export default function ContentBlock({
	i,
	item,
	para,
	saveParaName,
	upPara,
	downPara,
	tryToDeleteCurrentPara,
	saveParaContent,
	trynnaSave
}) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 ,duration:1}}
            
			exit={{ opacity: 0 ,scaleY:0.2}}
			id={`para-${i}`}
			className="flex flex-col  w-full rounded-xl border-4 py-10 px-5 border-orange-300 odd:border-orange-200  gap-5 bg-white ">
			<div className="flex flex-row w-full">
				<div className="flex flex-col justify-between w-36 mr-3 gap-5 ">
					<div className="flex flex-col gap-3">
						<textarea
							type="text"
							defaultValue={item.name}
							className="textarea textarea-bordered textarea-sm w-full  text-xl font-black text-zinc-700"
							onChange={e => saveParaName(e, i)}></textarea>
					</div>
					<div className="flex flex-col gap-5 justify-center items-center">
						<div
							className={clsx(
								'btn btn-circle btn-lg text-3xl btn-light-orange',
								i === 0 && 'btn-disabled opacity-40'
							)}
							onClick={() => {
								upPara(i);
							}}>
							<FaArrowUp />
						</div>
						<div
							className={clsx(
								'btn btn-circle btn-lg text-3xl btn-light-orange',
								i + 1 === para.length && 'btn-disabled opacity-40'
							)}
							onClick={() => {
								downPara(i);
							}}>
							<FaArrowDown />
						</div>
					</div>
					<div
						className="btn w-fit mx-auto btn-error text-white "
						onClick={e => tryToDeleteCurrentPara(e, i)}>
						<FaTrashAlt className="text-2xl" />
					</div>
				</div>
				<textarea
					onChange={e => saveParaContent(e, i)}
					placeholder="段落內容"
					rows="15"
					cols={90}
					className={clsx(
						'textarea textarea-bordered textarea-sm text-xl font-black text-zinc-700',
						trynnaSave && !para[i].content.trim() && 'textarea-error'
					)}></textarea>
			</div>
		</motion.div>
	);
}
