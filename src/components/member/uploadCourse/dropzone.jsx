import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { BsCheckLg, BsX } from "react-icons/bs";

export default function Dropzone({ video, setVideo,metion }) {


	const onDrop = (acceptedFiles) => {
		const selectedVideo = acceptedFiles[0];
		setVideo(selectedVideo); // 將選擇的影片存放到狀態中
	};

	const { getRootProps, getInputProps } = useDropzone({ onDrop });
	const dropzoneStyle = {
		border: '2px dashed #ccc',
		padding:video?'4px':'50px',
		textAlign: 'center',
		cursor: 'pointer',

	};

	return (
		<div {...getRootProps()} style={dropzoneStyle} className={`sm:max-w-md w-full ${metion}`}>
			<input {...getInputProps()} type='file' name="video" />
			<p>{(!video) ?
				"拖放影片到這裡，或點擊選擇影片" :
				<div className="flex flex-col items-center">
					<BsCheckLg color='#28FF28' size="60px" />
					<p className="mt-2">{video.name}</p>
					<p>已經準備好上傳</p>
				</div>
			}</p>
		</div>
	);
};
