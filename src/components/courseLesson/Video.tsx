import React from 'react';
import { FaHeart, FaStar } from 'react-icons/fa';
import { MdPeopleAlt } from 'react-icons/md';
import '@/styles/test.module.css';
// import videoSource from "./design01.mp4"; // 將影片檔案導入

export function video() {
	return (
		<div className="video-background backdrop-filter backdrop-saturate-125 backdrop-opacity-20">
			<video
				autoPlay
				loop
				muted
				className=" rounded-lg h-60">
				<source
					src="/video/design01.mp4"
					type="video/mp4"
				/>
				Your browser does not support the video tag.
			</video>
			<div className="content"></div>
		</div>
	);
}

export default video;
