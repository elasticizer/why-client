import { GoComment } from 'react-icons/go';
import { FaCommentAlt, FaFill } from 'react-icons/fa';
import { FaShareSquare } from 'react-icons/fa';
import Author from './Author';
import { HiEye } from 'react-icons/hi';
import { FaCalendar } from 'react-icons/fa6';
import { IoCaretUp } from 'react-icons/io5';
import moment from 'moment';
import Link from 'next/link';
import LikeBtn from './(withbehavior)/LikeBtn';
import ArtSubGroupPill from './ArtSubGroupPill';
import { IoIosAdd } from 'react-icons/io';
import { useScroll, useSpring } from 'framer-motion';
import { motion } from "framer-motion";
const ArtCard = ({ data }) => {
	const {
		_id,
		title,
		preview_description,
		clap_total,
		view_count,
		created_at,
		updated_at,
		published_at,
		cover_image,
		sub_group_id,
		tags,
		author_id,
		collections
	} = data;
	const tagsArr = tags?.split(',');
  
	return (
		<motion.div
			// initial="hidden"
			// animate="visible"
			// exit={{ opacity: 0, transition: { duration: 0.7 } }}
      // variants={{
      //   hidden: { opacity: 0, y: -20 },
      //   visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      // }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.7 } }
			className="card card-side bg-base-100 shadow-xl art-card">
			<figure className="h-[300px] w-2/5 p-4">
				<div className="w-full h-full overflow-hidden rounded-xl">
					<img
						src={cover_image}
						alt="img"
						className="transition duration-700 object-cover w-full h-full"
					/>
				</div>
			</figure>
			<div className="card-body w-3/5 pl-4">
				<a
					href={`/art/${_id}`}
					target="_blank">
					<h2 className="card-title hover:text-orange-500 hover:cursor-pointer text-2xl transition">
						{title}
					</h2>
				</a>
				<p>{preview_description}</p>
				<div className="card-actions items-center justify-between">
					<div className="flex gap-x-5 gap-y-2 flex-wrap max-w-[50%]">
						<ArtSubGroupPill sub_group_id={sub_group_id}></ArtSubGroupPill>
						{tagsArr &&
							tagsArr.map((tag, i) => {
								return (
									<button
										className="btn btn-sm rounded-full tag-badge font-black"
										key={i}>
										{tag}
									</button>
								);
							})}
						<button className="btn btn-sm rounded-full tag-badge font-black">
							<IoIosAdd />
						</button>
					</div>

					<Author author_id={author_id}></Author>
				</div>
				<div className="card-actions flex flex-row justify-between items-center">
					<div className="flex flex-row flex-wrap items-center gap-4 text-gray-600 text-lg text-nowrap">
						<div
							className="flex justify-start items-center gap-2 tooltip tooltip-bottom "
							data-tip="發布時間">
							<FaCalendar className="" />
							<p>{moment(published_at).format('YYYY-MM-DD')}</p>
						</div>
						<div
							className="flex justify-start items-center gap-2 tooltip tooltip-bottom transition hover:bg-slate-100 rounded-full px-4 py-1"
							data-tip={`${clap_total} 人贊同`}>
							<IoCaretUp className="icon" />
							<p>{clap_total}</p>
						</div>
						<div className="">
							{1 ? (
								<div
									className="tooltip tooltip-bottom flex justify-start items-center gap-2 transition hover:bg-slate-100 rounded-full px-4 py-1"
									data-tip="人評論">
									<GoComment className="icon"></GoComment>
									<p>1111</p>
								</div>
							) : (
								<div
									className="tooltip tooltip-bottom flex justify-start items-center gap-2 transition hover:bg-slate-100 rounded-full px-4 py-1"
									data-tip="您已評論">
									<FaCommentAlt className="icon text-orange-300"></FaCommentAlt>
									<p>1111</p>
									<p className="text-orange-400">+1</p>
								</div>
							)}
						</div>
						<div
							className="flex justify-start items-center gap-2 tooltip tooltip-bottom transition hover:bg-slate-100 rounded-full px-4 py-1"
							data-tip={`${view_count}人看過`}>
							<HiEye className="icon" />
							<span>{view_count}</span>
						</div>
					</div>
					<div className="flex flex-row flex-wrap items-center gap-4 text-gray-600 text-lg text-nowrap">
						<button
							className="btn rounded-full tooltip tooltip-bottom ml-auto"
							data-tip="分享">
							<FaShareSquare className="icon "></FaShareSquare>
						</button>
						<LikeBtn target={_id}></LikeBtn>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default ArtCard;
