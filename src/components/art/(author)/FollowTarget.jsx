import { fetcher } from '@/utils/utils';
import useSWR from 'swr';
import TargetCard from './TargetCard';
import { AnimatePresence, motion } from 'framer-motion';

export default function FollowTarget({
	author_id,
	isOwner = false,
	isHide = false
}) {
	const url = `/api/art/author/${author_id}/follow`;
	const { data, error, isLoading } = useSWR(url, fetcher);
	if (error || data?.error)
		return (
			<div className="w-[1250px] h-[600px] flex justify-center items-center">
				failed to load
			</div>
		);
	if (isLoading)
		return (
			<div className="w-[1250px] h-[600px] flex justify-center items-center">
				loading...
			</div>
		);

	return (
		<AnimatePresence mode="wait">
			<motion.div
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.7 }}
				className="flex flex-col gap-10 min-h-[600px] mb-20">
				{isOwner && isHide && (
					<h2 className="text-2xl font-black text-zinc-500 pl-5">僅您可見</h2>
				)}
				{data?.data.length > 0 &&
					data.data.map((target, i) => {
						return (
							<TargetCard
								key={i}
								target_id={target.target_id}
								author_id={author_id}></TargetCard>
						);
					})}
				{data?.data.length < 1 && (
					<div className="flex justify-center items-center gap-10 w-[1250px] h-[600px] text-title-tracking-widest ">
						空空如也
					</div>
				)}
			</motion.div>
		</AnimatePresence>
	);
}
