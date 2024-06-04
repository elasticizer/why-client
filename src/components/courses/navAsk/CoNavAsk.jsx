import React, { useState, useEffect, useCallback } from 'react';
import { TbMessageCircle2 } from 'react-icons/tb';
import { IoArrowRedo } from 'react-icons/io5';
import { BsFillSendFill } from 'react-icons/bs';
import { useSession } from '@/contexts/session';

export default function CoNavAsk({
	SN,
	content,
	firstname,
	res,
	whenCreated,
	nickname,
	learnerSN,
	setSendreview
}) {
	const session = useSession();

	return (
		<div className="w-full h-auto p-5 border inline-flex gap-4">
			<div className=" size-[50px] bg-white/opacity-0 rounded-3xl  border-black/opacity-5 justify-center items-center inline-flex bg-center">
				<img
					className="inline-block rounded-full size-[46px] "
					src={
						learnerSN === session.SN ? session.Icon : `/images/comment${SN}.jpg`
					}
					alt="Image Description"
				/>
			</div>
			<div className="w-full inline-flex flex-col">
				<div className="inline-flex gap-3">
					<div className="text-zinc-600 text-sm font-semibold font-['Inter'] leading-snug">
						{nickname || firstname}
					</div>
					<div className="text-neutral-400 text-[13.02px] font-normal font-['Inter'] leading-snug">
						{new Date(`${whenCreated}Z`).toLocaleString()}
					</div>
				</div>
				<div className="w-full mt-2 text-zinc-700 text-sm font-medium font-['Inter'] leading-snug">
					{content}
				</div>
			</div>
		</div>
	);
}
