import Link from 'next/link';
import React from 'react';
import { MdAccessTime } from 'react-icons/md';
import { stripHtml } from 'string-strip-html';

export default function ContentCard({
	SN,
	Name,
	Intros,
	Filename,
	WhenCreated
}) {
	return (
		<>
			<Link
				href={`/teacher/uploadCourse?CourseSN=${SN}`}
				className="flex w-full  ring-1  ring-gray-300 relative overflow-hidden hover:bg-gray-100 shadow-sm">
				<div className="w-36 md:w-52 h-28 md:h-36 overflow-hidden">
					<img
						className="w-full me-3 object-cover size-full hover:scale-125 ease-in duration-300"
						src={
							Filename && Filename.startsWith('h')
								? Filename
								: `/learner/LessonVideo/${Filename}`
						}
						alt=""
					/>
				</div>

				<div className="flex-col items-start w-full p-2 md:p-5">
					<h3 className="text-base font-bold text-gray-800 line-clamp-1">
						課程：{Name}
					</h3>
					<div className="mt-1 text-gray-500 text-sm text-wrap md:text-base line-clamp-2">
						{Intros && stripHtml(Intros).result}
					</div>
					<div className="md:mt-auto">
						<div className="text-xs text-gray-500 flex mt-2 items-center">
							<MdAccessTime />
							創建時間{WhenCreated}
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}
