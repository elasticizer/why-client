import { useRef, useState } from 'react';
import { BsCloudUploadFill, BsX } from "react-icons/bs";
import Quill from "@/components/member/uploadCourse/Quill";
import Dropzone from "@/components/member/uploadCourse/dropzone";
import axios from 'axios';
import Link from 'next/link';


export default function UploadFileAlert({ UploadFileAlertDisplay, SetUploadFileAlertDisplay, courseClass, setCourseClass, onSubmit }) {
	const [displayForm, setDisplayForm] = useState("");
	const [uploadDuring, setUploadDuring] = useState("hidden");
	const [video, setVideo] = useState(null);
	const [progress, setProgress] = useState(0);
	const [chapterName, setChapterName] = useState("");
	const [homeworkName, setHomeworkName] = useState("");
	const [text, setText] = useState('');
	const formEl = useRef(null);

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!video) {
			alert('請選擇要上傳的影片');
			return;
		}

		const formData = new FormData(formEl.current);
		try {
			formData.append('video', video);
			formData.append('assignmentTitle', text);
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

		<div className={`bg-white flex flex-col items-center  shadow-sm ring-1 ring-gray-300 fixed w-3/5 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-5 overflow-scroll h-2/3 ${UploadFileAlertDisplay}
		`}>

			<div className="mt-5 relative"><BsCloudUploadFill size="80px" color="#FFAF60" /></div>
			<div className="block text-md font-semibold leading-6 text-gray-900 mt-5">請填入上傳所需的資料</div>



			{/* 表單開關 */}
			<form className={`flex w-full flex-col items-center my-5 ${displayForm}`} onSubmit={async e => onSubmit(await handleSubmit(e))} ref={formEl}>
				<Dropzone video={video} setVideo={setVideo} />
				<div className="flex  shadow-sm ring-1 ring-gray-300 sm:max-w-md w-full mt-5">
					<input
						type="text"
						name="Introduction"
						autoComplete="Introduction "
						className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6"
						placeholder="輸入章節名稱..."
						value={chapterName}
						onChange={(e) => {
							setChapterName(e.target.value);
						}}
					/>
				</div>
				<div className={(courseClass == "video") ? "hidden" : ""}>
					{/* 填寫作業名稱 */}
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
					{/* 編輯器 */}
					<div className="sm:max-w-md w-full mt-5">
						<Quill setText={setText} text={text} />
					</div>
				</div>
				<div className="mt-10">
					<button
						type="button"
						className=" ring-1 ring-orange-500 text-orange-500 px-6 py-2 text-sm font-semibold  shadow-sm hover:text-orange-300  hover:ring-orange-300 me-5" onClick={(e) => {
							e.preventDefault();
							SetUploadFileAlertDisplay("hidden");
							setVideo(null);
							setChapterName("");
							setHomeworkName("");
							setText("");
						}}
					>
						離開
					</button>
					{!!video && <button
						type="submit"
						className=" bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-300" onClick={(e) => {
							setDisplayForm("hidden");
							setUploadDuring("");
						}}
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
								setHomeworkName("");
								setText("");
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
