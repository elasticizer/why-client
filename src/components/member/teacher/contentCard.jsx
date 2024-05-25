import Link from 'next/link';
import React from 'react';
import { MdAccessTime } from 'react-icons/md';
import { stripHtml } from "string-strip-html";

export default function ContentCard({
	SN,
	Name,
	Intros,
	Filename,
	WhenCreated }) {
	return (
		<>
			<Link href="#" className="conteneCard bg-white border  shadow-sm sm:flex w-full flex-col mb-2 px-3 py-4 hover:bg-gray-100">
				<div className="contentItem flex overflow-hidden">
					<img
						className="contentItemPic w-20 h-auto sm:w-32 m-1 me-5 object-cover"
						src={`/learner/LessonVideo/${Filename}`}
						alt=""
					/>

					<div className="contentItemText">
						<h3 className="text-lg font-bold text-gray-800 sm:text-xl">
							課程：{Name}
						</h3>
						<p className="mt-1 text-gray-500 text-sm line-clamp-2	sm:text-base ">
						<span className="font-extrabold text-gray-800">描述：</span>{Intros && stripHtml(Intros).result}
						</p>
						<div className="sm:mt-auto">
							<div className="text-xs text-gray-500 flex content-center	mt-1 sm:text-sm items-center">
								<MdAccessTime />
								創建時間{WhenCreated}
							</div>
						</div>
					</div>
				</div>
			</Link>
			<style jsx>{`
				.contentList {
					display: flex;
					flex-wrap: wrap;
					flex-direction: column;
					align-items: center;
					justify-content: center;
				}
			`}</style>
		</>
	);
}
