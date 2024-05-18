import React from 'react';
import { MdAccessTime } from 'react-icons/md';


export default function ContentCard() {
	return (
		<>
			<div className="conteneCard bg-white border  shadow-sm sm:flex w-full flex-col mb-2">
				<div className="contentItem flex overflow-hidden">
					<img
						className="contentItemPic w-20 h-auto sm:w-32 m-1 me-5"
						src="/learner/code.jpg"
						alt=""
					/>

					<div className="contentItemText">
						<h3 className="text-lg font-bold text-gray-800 sm:text-xl">
							課程：切版設計
						</h3>
						<p className="mt-1 text-gray-500 text-sm	sm:text-base ">
							描述：Loc nisl. Tortor muris ip nunc
						</p>
						<div className="sm:mt-auto">
							<div className="text-xs text-gray-500 flex content-center	mt-1 sm:text-sm items-center">
								<MdAccessTime />
								創建時間-2024.02.18 02:12
							</div>
						</div>
					</div>
				</div>
			</div>
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
