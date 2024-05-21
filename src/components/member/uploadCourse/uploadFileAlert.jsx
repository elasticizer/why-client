import { useRef, useState, useEffect } from 'react';
import { BsCloudUploadFill, BsX } from "react-icons/bs";
import Quill from "@/components/member/uploadCourse/Quill";
import Dropzone from "@/components/member/uploadCourse/dropzone";
import axios from 'axios';
import 'animate.css';
import { extname } from 'path';
import { errorAlert } from "@/components/member/errorAlert";




export default function UploadFileAlert({ UploadFileAlertDisplay, SetUploadFileAlertDisplay, onSubmit }) {
	const [displayForm, setDisplayForm] = useState("");
	const [uploadDuring, setUploadDuring] = useState("hidden");
	const [video, setVideo] = useState(null);
	const [progress, setProgress] = useState(0);
	const [chapterName, setChapterName] = useState("");
	// const [homeworkName, setHomeworkName] = useState("");
	// const [text, setText] = useState('');
	const [videoLimit, setVideoLimit] = useState('');
	const [videoLimitMetion, setVideoLimitMetion] = useState('white');
	const [chapterNameLimit, setChapterNameLimit] = useState('');
	const [chapterNameLimitMetion, setChapterNameLimitMetion] = useState('white');


	const formEl = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		let isValid = "ture";
		// 影片上傳判斷
		if (extname(video.name).substring(1) !== "mp4") {
			console.log("沒通過");
			setVideoLimit("ring ring-red-400");
			setVideoLimitMetion('red-500');
			setVideo("");
			isValid = false;
		} else {
			console.log("通過");
			setVideoLimit("");
			setVideoLimitMetion('white');
		}

		// 章節名稱判斷
		if (chapterName.length < 5) {
			setChapterNameLimit("ring ring-red-400");
			setChapterNameLimitMetion('red-500');
			isValid = false;
		} else {
			setChapterNameLimit("");
			setChapterNameLimitMetion('white');
		}

		if (!isValid) {
			errorAlert('有欄位未達標準, 請全部填寫完成再次送出');
			return false;
		}

		// 通過就打開進度條
		setDisplayForm("hidden");
		setUploadDuring("");

		const formData = new FormData(formEl.current);
		try {
			formData.append('video', video);
			const response = await axios.post('/api/uploadVideo', formData, {
				headers: {
					'Content-Type': 'multipart/form-data', // 設置標頭，表明傳送的是 FormData
				},
				onUploadProgress: (progressEvent) => {
					const progressPercent = Math.round(
						(progressEvent.loaded * 100) / progressEvent.total
					); // 計算上傳進度的百分比
					setProgress(progressPercent); // 更新進度狀態
				},
			});
			console.log('影片上傳成功');
			return response.data;
		} catch (error) {
			console.error('影片上傳失敗', error);
		}
	};

	return (

		<div className={`bg-white flex flex-col items-center shadow-sm ring-1 ring-gray-300 fixed w-3/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 overflow-scroll h-3/6  ${UploadFileAlertDisplay}
		`}>

			<div className="mt-5 relative"><BsCloudUploadFill size="80px" color="#FFAF60" /></div>
			<div className="block text-md font-semibold leading-6 text-gray-900 mt-5">請填入上傳所需的資料</div>



			{/* 表單開關 */}
			<form className={`flex w-full flex-col items-center my-5 ${displayForm}`} onSubmit={async e => onSubmit(await handleSubmit(e))} ref={formEl}>
				<Dropzone video={video} setVideo={setVideo} metion={videoLimit} />
				<p className={`text-xs leading-6 text-${videoLimitMetion} `}>
					請上傳mp4檔</p>
				<div className="flex  shadow-sm ring-1 ring-gray-300 sm:max-w-md w-full mt-5">
					<input
						type="text"
						name="Introduction"
						autoComplete="Introduction "
						className={`block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${chapterNameLimit}`}
						placeholder="輸入章節名稱..."
						value={chapterName}
						onChange={(e) => {
							setChapterName(e.target.value);
						}}
					/>
				</div>
				<p className={`text-xs leading-6 text-${chapterNameLimitMetion} `}>
				輸入內容不能低於5個字元</p>


				{/* 填寫作業 */}
				{/* <div className={(courseClass == "video") ? "hidden" : ""}>
					<div className="flex  shadow-sm ring-1 ring-gray-300 sm:max-w-md w-full mt-5">
						<input
							type="text"
							name="practiceName"
							autoComplete="practiceName"
							className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
							placeholder="填寫作業名稱..."
							value={homeworkName}
							onChange={(e) => {
								setHomeworkName(e.target.value);
							}}
						/>
					</div>
					<div className="sm:max-w-md w-full mt-5">
						<Quill setText={setText} text={text} />
					</div>
				</div> */}
				<div className="mt-10">
					<button
						type="button"
						className=" ring-1 ring-orange-500 text-orange-500 px-6 py-2 text-sm font-semibold  shadow-sm hover:text-orange-300  hover:ring-orange-300" onClick={(e) => {
							e.preventDefault();
							SetUploadFileAlertDisplay("hidden");
							setVideo(null);
							setChapterName("");
							setVideoLimit("");
							setVideoLimitMetion('white');
							setChapterNameLimit("");
							setChapterNameLimitMetion('white');
							// setHomeworkName("");
							// setText("");
						}}
					>
						離開
					</button>
					{(!!video && !!chapterName) && <button
						type="submit"
						className=" bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300 ms-5"
					>
						開始上傳
					</button>}

				</div>
			</form>
			<div className={uploadDuring}>
				{!!video && (
					<div className="text-center">
						<p>已選擇影片：{video.name}</p>
						<progress value={progress} max={100} className="flex border h-3 rounded-full sm:max-w-md w-full  mt-5" />
					</div>
				)}
				{(progress !== 100) && <div className="my-5">請不要未完成檔案上傳就關閉頁面，避免出錯</div>}
				{(progress === 100) &&
					<div className="flex flex-col items-center my-5">
						<p>檔案已上傳完成</p>

						<button
							type="submit"
							className=" bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm mt-10 hover:bg-orange-300" onClick={() => {
								SetUploadFileAlertDisplay("hidden");
								setDisplayForm("");
								setVideo(null);
								setProgress(0);
								setChapterName("");
								setUploadDuring("hidden");
								// setHomeworkName("");
								// setText("");
							}}
						>
							離開
						</button>
					</div>
				}
			</div>
			<button className="hidden">上傳檔案</button>
			<style jsx>{`
			progress[value]::-webkit-progress-bar {
  			background-color: white;
  			border-radius: 9999px;
			}

			progress[value]::-webkit-progress-value {
  background-image:
	   -webkit-linear-gradient(-45deg,
	                           transparent 33%, rgba(0, 0, 0, .1) 33%,
	                           rgba(0,0, 0, .1) 66%, transparent 66%),
	   -webkit-linear-gradient(top,
	                           rgba(255, 255, 255, .25),
	                           rgba(0, 0, 0, .25)),
	   -webkit-linear-gradient(left, #09c, #f44);

    border-radius: 9999px;
    background-size: 35px 20px, 100% 100%, 100% 100%;
}

			`}</style>
		</div>
	);
}
