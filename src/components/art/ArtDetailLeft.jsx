import React, { Suspense } from 'react';
import useSWR from 'swr';
import ArtContent from './ArtContent';
import Breadcrumbs from './Breadcrumbs';
import moment from 'moment';
import { FaCalendar } from 'react-icons/fa';
import AuthorTiny from './AuthorTiny';
import { motion } from 'framer-motion';
const fetcher = (...args) => fetch(...args).then(res => res.json());

export default function ArtDetailLeft({ id }) {
	const { data, error, isLoading } = useSWR(`/api/art/${id}`, fetcher);
	if (error || data?.error) return <div>failed to load {data.error}</div>;
	if (isLoading)
		return <div className="w-[1000px] flex flex-col gap-10 "></div>;
	const variants = {
		initial: { opacity: 0, y: -20 },
		whileInView: { opacity: 1, y: 0 },
		transition: { duration: 0.7 }
	};
	const {
		content,
		cover_image,
		clap_total,
		author_id,
		collections,
		preview_description,
		published_at,
		sub_group_id,
		tags,
		title,
		updated_at,
		view_count
	} = data.data;
	return (
		<div className="w-[1000px] flex flex-col gap-10 ">
			<Breadcrumbs
				sub_group_id={sub_group_id}
				title={title}></Breadcrumbs>
			<div className="flex flex-col">
				<motion.div
					initial="initial"
					whileInView="whileInView"
					transition="transition"
					variants={variants}
					className="text-5xl font-bold leading-relaxed">
					{title}
				</motion.div>
				<motion.div
					initial="initial"
					whileInView="whileInView"
					transition="transition"
					variants={variants}
					className="flex gap-4 justify-end items-center font-bold text-gray-500">
					<AuthorTiny id={author_id} 	variants={variants}></AuthorTiny>
					<FaCalendar />
					{moment(published_at).format('YYYY-MM-DD')}
				</motion.div>
			</div>

			<motion.p
				initial="initial"
				whileInView="whileInView"
				transition="transition"
				variants={variants}
				className="leading-loose font-bold p-6 text-xl bg-blue-50 text-gray-600 ">
				{preview_description}
			</motion.p>
			<div className="divider font-bold text-gray-400 -m-3"></div>

			<Suspense fallback={'<Loading />'}>
				<ArtContent content={content} />
			</Suspense>
			<div className="divider font-bold text-gray-400">更多內容</div>
			<motion.div
				initial="initial"
				whileInView="whileInView"
				transition="transition"
				variants={variants}
				className="flex flex-col gap-8 bg-[#d2efff] pb-16">
				<h2 className="text-2xl my-4 text-center font-extrabold rounded-xl py-8 text-[#465de4]">
					課程推薦
				</h2>
				<div className="card-group flex flex-row gap-8 justify-center py-5 mx-5">
					<div className="card w-96 bg-base-100 shadow-right-bottom-violet transition hover:-translate-y-5">
						<div className="card-body">
							<h2 className="card-title">德文輕鬆學</h2>
							<p>▶ 德文輕鬆學，零基礎也學得會的實用會話</p>
							<img
								src="https://images.hahow.in/images/65d49e8c3bdf6f58fe5dc8a1?width=450"
								alt="▶ 德文輕鬆學，零基礎也學得會的實用會話"
								className="transition duration-1000"
							/>
						</div>
					</div>

					<div className="card w-96 bg-base-100 shadow-right-bottom-violet transition hover:-translate-y-5">
						<div className="card-body">
							<h2 className="card-title">德文輕鬆學</h2>
							<p>▶ 德文輕鬆學，零基礎也學得會的實用會話</p>
							<img
								src="https://images.hahow.in/images/65d49e8c3bdf6f58fe5dc8a1?width=450"
								alt="▶ 德文輕鬆學，零基礎也學得會的實用會話"
								className="transition duration-1000"
							/>
						</div>
					</div>
				</div>
			</motion.div>

			<motion.div
				initial="initial"
				whileInView="whileInView"
				transition="transition"
				variants={variants}
				className="pt-1">
				<h2 className="text-2xl my-4 text-center rounded-xl py-8 mb-8 bg-orange-100 font-black  text-[#ff8d0a] tracking-widest">
					延伸閱讀
				</h2>
				<div className="">
					<div className="card-group flex flex-col gap-4 w-full">
						{/* <ArtCard></ArtCard>
                <ArtCard></ArtCard>
                <ArtCard></ArtCard> */}
					</div>
				</div>
			</motion.div>
		</div>
	);
}
