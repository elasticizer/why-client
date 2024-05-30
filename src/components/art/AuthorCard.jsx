import { fetcher } from '@/utils/utils';
import React from 'react';
import useSWR from 'swr';
import FollowBtn from './(withbehavior)/FollowBtn';
import { motion } from 'framer-motion';
import MsgBtn from './(withbehavior)/MsgBtn';
export default function AuthorCard({ id }) {
	const { data, error, isLoading } = useSWR(`/api/art/author/${id}`, fetcher);
	if (error || data?.error) return <div>failed to load</div>;
	if (isLoading) return <div className="border-4 w-full h-40"></div>;

	const {
		sn,
		id: author_id,
		name,
		profile_image_url,
		meta_description,
		links
	} = data.data;
	const variants = {
		initial: { opacity: 0, y: -20 },
		whileInView: { opacity: 1, y: 0 },
		transition: { duration: 0.7 }
	};
	return (
		<>
			<motion.div
				initial="initial"
				animate="whileInView"
				transition="transition"
				variants={variants}
				className="card bg-theme-2-1 font-extrabold shadow-lg ">
				<div className="card-body p-7 gap-5">
					<a
						className="w-full flex flex-row gap-4"
						href={`/art/author/${id}`}
						target="_blank">
						<div className="inline-block w-20 h-20 overflow-hidden rounded-full border-white border-4 ">
							<img
								src={profile_image_url}
								alt="img"
								className="w-20 h-20 object-cover "
							/>
						</div>

						<h2 className=" card-title text-white tracking-widest text-xl text-wrap w-[calc(100%-7rem)] ">
							{name}
						</h2>
					</a>
					<p className="font-black text-gray-500 bg-white bg-opacity-75 p-5 rounded-xl leading-relaxed">
						{meta_description}
					</p>
					<div className="flex items-center gap-3">
						<FollowBtn
							large={true}
							target={author_id}></FollowBtn>
						<MsgBtn target={author_id}></MsgBtn>
					</div>
				</div>
			</motion.div>
		</>
	);
}
