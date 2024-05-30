import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { MdAccessTime } from 'react-icons/md';
import { stripHtml } from "string-strip-html";


export default function UploadCard({
	Name,
	Intro,
	Filename,
	WhenCreated }) {

		const whencreated = new Date(WhenCreated + "Z").toLocaleString();

	return (
		<Link href="#" className="bg-white ring-1 ring-gray-300 shadow-sm md:flex mt-10 ">
			<div className="flex-shrink-0 relative w-full overflow-hidden pt-[50%] md:pt-[15%] md:max-w-60">
				<img
					className="size-full absolute top-0 start-0 object-cover"
					src={`/learner/LessonVideo/${Filename}`}
					alt="Image Description"
				/>
			</div>
			<div className="flex flex-wrap">
				<div className="p-4 flex flex-col h-full sm:p-7">
					<h3 className="text-lg font-bold text-gray-800">最新課程</h3>
					<p className="mt-1 text-gray-500 line-clamp-1 text-justify"><span className="font-extrabold text-gray-800">課程：</span>{Name}</p>
					<p className="mt-1 text-gray-500 line-clamp-2 text-justify break-all"><span className="font-extrabold text-gray-800">課程簡介：</span>{Intro && stripHtml(Intro).result}</p>
					<div className="mt-2">
						<div className="text-xs text-gray-500 flex mt-1 items-center">
							<MdAccessTime />
							{whencreated}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
}
