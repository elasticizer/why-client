import { useEffect, useRef, useState } from 'react';
import Quill from "@/components/member/uploadCourse/Quill";
import UploadTables from "@/components/member/uploadCourse/uploadTables";
import { errorAlert } from "@/components/member/errorAlert";
import { extname } from 'path';
import axios from 'axios';


export default function Form({ UploadFileAlertDisplay, SetUploadFileAlertDisplay, lesson, lessonData, courseProgress, setCourseProgress, SetUploadCourseAlertDisplay, setPutData, setLessonData }) {
	const [courseTitle, setCourseTitle] = useState("");
	const [domain, setDomain] = useState("");
	const [price, setPrice] = useState("");
	const [selectFile, setSelectFile] = useState(null);
	const [previewURL, setPreviewURL] = useState("/learner/upload.png");
	const [selectVideoFile, setSelectVideoFile] = useState(null);
	const [previewVideo, setPreviewVideo] = useState("/learner/upload.png");
	const [courseDescription, setCourseDescription] = useState("");
	const [instructorExperience, setInstructorExperience] = useState('');
	const [selectData, setSelectData] = useState([]);
	const [courseSN, setCourseSN] = useState("");


	// 帶入已加入過的值
	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const answer = urlParams.get('CourseSN');
		if (answer) {
			const handleData = async () => {
				const response = await fetch(`/api/teacher/putCourse?courseSN=${answer}`).then(r => r.json()).catch(err => err);
				const results = response.results;
				console.log(results);
				setCourseTitle(results[0].CourseName);
				setDomain(results[0].DomainSN);
				setPreviewURL(`/learner/LessonVideo/${results[0].ThumbnailFilename}`);
				setPreviewVideo(`/learner/LessonVideo/${results[0].DailyFilename}`);
				setCourseDescription(results[0].CourseIntro);
				setPrice(results[0].Price);
				setInstructorExperience(results[0].Syllabus);
				setLessonData(results);
				setCourseSN(answer);
			};
			handleData();
		}
	}, []);



	const handleData = async () => {
		try {
			const response = await fetch('/api/teacher/domain');
			const results = await response.json();
			setSelectData(results);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		handleData();
	}, []);

	// 判斷式的部分
	const [titleLimit, setTitleLimit] = useState('');
	const [titleMetion, setTitleMetion] = useState('white');
	const [selectLimit, setSelectLimit] = useState('');
	const [selectMetion, setSelectMetion] = useState('white');
	const [priceLimit, setPriceLimit] = useState('');
	const [priceMetion, setPriceMetion] = useState('white');

	const [courseDescriptionLimite, setCourseDescriptionLimite] = useState('');
	const [courseDescriptionLimiteMetion, setCourseDescriptionLimiteMetion] = useState('white');

	const [instructorExperienceLimite, setInstructorExperienceLimite] = useState('');
	const [instructorExperienceLimiteMetion, setInstructorExperienceLimiteMetion] = useState('white');
	const [selectFileLimite, setSelectFileLimite] = useState('');
	const [selectFileLimiteMetion, setSelectFileLimiteMetion] = useState('white');
	const [selectVideoFileLimite, setSelectVideoFileLimite] = useState('');
	const [selectVideoFileLimiteMetion, setSelectVideoFileLimiteMetion] = useState('white');


	const formEl = useRef();
	const ext = ["jpg", "png", "jpeg"];
	const videoExt = "mp4";

	const handleFileChange = (e) => {
		//files[0]提供多檔上傳功能才會有files[]，單檔案上傳只會有file
		const file = e.target.files[0];
		if (file) {
			// 將檔案物件設定到狀態裡
			setSelectFile(file);
			// 產生預覽網址
			setPreviewURL(URL.createObjectURL(file));
		} else {
			// else是因為取消選擇圖片的情況
			setSelectFile(null);
			// 要回預設值或是用預設值照片
			setPreviewURL("/learner/upload.png");
		}
	};

	const handleVideoFileChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setSelectVideoFile(file);
			setPreviewVideo(URL.createObjectURL(file));
		} else {
			setSelectVideoFile(null);
			setPreviewVideo("/learner/upload.png");
		}
	};


	const handleSumbit = async (e) => {
		e.preventDefault();

		let isValid = true;
		// 表格判斷式
		if (courseTitle.length < 5) {
			setTitleLimit('ring ring-red-400');
			setTitleMetion('red-500');
			isValid = false;
		} else {
			setTitleLimit("");
			setTitleMetion('white');
		}
		if (domain === "") {
			setSelectLimit('ring ring-red-400');
			setSelectMetion('red-500');
			isValid = false;
		} else {
			setSelectLimit('');
			setSelectMetion('white');
		}
		if (courseDescription.length < 200) {
			setCourseDescriptionLimite('ring ring-red-400');
			setCourseDescriptionLimiteMetion('red-500');
			isValid = false;
		} else {
			setCourseDescriptionLimite('');
			setCourseDescriptionLimiteMetion('white');
		}

		if (price === "") {
			setPriceLimit('ring ring-red-400');
			setPriceMetion('red-500');
			isValid = false;
		} else if (price < 1) {
			setPriceLimit('ring ring-red-400');
			setPriceMetion('red-500');
		}
		else {
			setPriceLimit('');
			setPriceMetion('white');
		}

		if (instructorExperience.length < 200) {
			setInstructorExperienceLimite('ring ring-red-400');
			setInstructorExperienceLimiteMetion('red-500');
			isValid = false;
		} else {
			setInstructorExperienceLimite('');
			setInstructorExperienceLimiteMetion('white');
		}
		if (selectFile === null) {
			// console.log("空的");
			setSelectFileLimite('ring ring-red-400');
			setSelectFileLimiteMetion('red-500');
			isValid = false;
		} else if (ext.some((v) => { return v === extname(selectFile.name).substring(1); })) {
			console.log("符合");
			setSelectFileLimite('');
			setSelectFileLimiteMetion('white');
		} else {
			// console.log("不符合");
			setSelectFileLimite('ring ring-red-400');
			setSelectFileLimiteMetion('red-500');
			isValid = false;
		}
		if (selectVideoFile === null) {
			setSelectVideoFileLimite('ring ring-red-400');
			setSelectVideoFileLimiteMetion('red-500');
			isValid = false;
		} else if (videoExt === extname(selectVideoFile.name).substring(1)) {
			console.log("符合");
			setSelectVideoFileLimite('');
			setSelectVideoFileLimiteMetion('white');
		} else {
			console.log("不符合");
			setSelectVideoFileLimite('ring ring-red-400');
			setSelectVideoFileLimiteMetion('red-500');
			isValid = false;
		}


		if (!isValid) {
			errorAlert('有欄位未達標準, 請全部填寫完成再次送出');
			return false;
		}

		SetUploadCourseAlertDisplay('');

		const formdata = new FormData(formEl.current);

		lesson.forEach(v => formdata.append("lesson[]", v));




		if (courseSN) {
			formdata.append("_method", "POST");
			formdata.append("courseSN", courseSN);
			formdata.append("courseDescription", courseDescription);
			formdata.append("syllabuse", instructorExperience);
			try {
				await axios.post("/api/teacher/putCourse", formdata, {
					headers: {
						'Content-Type': 'multipart/form-data', // 設置標頭，表明傳送的是 FormData
					},
					onUploadProgress: (progressEvent) => {
						if (courseProgress === 100) return;
						const progressPercent = Math.round(
							(progressEvent.loaded * 100) / progressEvent.total
						); // 計算上傳進度的百分比
						setCourseProgress(progressPercent); // 更新進度狀態
					},
				}).then(response => setCourseProgress(100));
				console.log("上傳成功");
			} catch (err) {
				console.log(err);
			}

		} else {

			formdata.append("courseDescription", courseDescription);
			formdata.append("syllabuse", instructorExperience);

			try {
				const response = await axios.post("/api/teacher/uploadCourse", formdata, {
					headers: {
						'Content-Type': 'multipart/form-data', // 設置標頭，表明傳送的是 FormData
					},
					onUploadProgress: (progressEvent) => {
						if (courseProgress === 100) return;
						const progressPercent = Math.round(
							(progressEvent.loaded * 100) / progressEvent.total
						); // 計算上傳進度的百分比
						setCourseProgress(progressPercent); // 更新進度狀態
					},
				}).then(response => setCourseProgress(100));
				console.log("上傳成功");
			} catch (err) {
				console.log(err);
			}
		}

	};




	return (
		<>
			<form ref={formEl} onSubmit={handleSumbit}>
				<div className="space-y-12">
					<div className="border-b border-gray-900/10 pb-12">
						<h2 className="text-xl font-semibold leading-7 text-gray-900">
							課程資訊
						</h2>

						<div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
							{/* SECTION 課程標題 */}
							<div className="sm:col-span-4">
								<label
									htmlFor="title"
									className="block text-md font-semibold leading-6 text-gray-900"
								>
									課程標題
								</label>
								<div className="mt-2">
									<div className="flex  shadow-sm ring-1 ring-gray-300 sm:max-w-md">
										<input
											type="text"
											name="title"
											id="title"
											autoComplete="title"
											className={`block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${titleLimit}`}
											placeholder="輸入課程標題"
											value={courseTitle}
											onChange={(e) => {
												setCourseTitle(e.target.value);
											}}
										/>
									</div>
									<p className="mt-1 text-xs leading-6 text-gray-400">
										課程名稱應該要能吸引目光、方便查詢</p>
									<p className={`text-xs leading-6 text-${titleMetion} `}>
										輸入內容不能低於5個字元</p>
								</div>
							</div>

							{/* SECTION 課程類別 */}
							<div className="sm:col-span-3">
								<label
									htmlFor="domain"
									className="block text-md font-semibold leading-6 text-gray-900"
								>
									課程類別
								</label>
								<div className="mt-2">
									<select
										id="domain"
										name="domain"
										autoComplete="domain-name"
										className={`block w-full  border-1 border-gray-300 py-1.5 text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6 ps-1 pe-3 ${selectLimit}`}
										value={domain}
										onChange={(e) => {
											setDomain(e.target.value);
										}}
									>
										<option value="">請選擇</option>
										{selectData.map((v) => {
											return (
												<option key={v.SN} value={v.SN}>{v.Name}</option>
											);
										})}
									</select>
								</div>
								<p className="mt-1 text-xs leading-6 text-gray-400">
									歸類課程類別方便查詢</p>
								<p className={`text-xs leading-6 text-${selectMetion} `}>
									此欄位必填</p>
							</div>

							{/* SECTION 課程說明 得用append加進formdata*/}
							<div className="col-span-full">
								<label
									htmlFor="courseDescription"
									className="block text-md font-semibold leading-6 text-gray-900"
								>
									課程說明
								</label>
								<div className="mt-2">
									<Quill setText={setCourseDescription} text={courseDescription} metion={courseDescriptionLimite} />
								</div>
								<p className="mt-1 text-xs leading-6 text-gray-400">
									輸入說明至少達200字元以上</p>
								<p className={`text-xs leading-6 text-${courseDescriptionLimiteMetion}`}>
									內容未達200字元</p>
							</div>

							<div className="sm:col-span-4">
								<label
									htmlFor="title"
									className="block text-md font-semibold leading-6 text-gray-900"
								>
									課程定價
								</label>
								<div className="mt-2">
									<div className="flex  shadow-sm ring-1 ring-gray-300 sm:max-w-md">
										<input
											type="number"
											min="0"
											name="price"
											autoComplete="price"
											className={`block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400  sm:text-sm sm:leading-6 ${priceLimit}`}
											placeholder="輸入課程標售價格"
											value={price}
											onChange={(e) => {
												setPrice(e.target.value);
											}}
										/>
									</div>
									<p className="mt-1 text-xs leading-6 text-gray-400">
										建議可先參考其他類似課程的售價再做決定</p>
									<p className={`text-xs leading-6 text-${priceMetion} `}>
										{!price ? "此欄位必填" : price < 1 && "價格不能低於1"}</p>
								</div>
							</div>


							{/* SECTION 講師經歷 得用append加進formdata*/}
							<div className="col-span-full">
								<label
									htmlFor="syllabus"
									className="block text-md font-semibold leading-6 text-gray-900"
								>
									課程大綱
								</label>
								<div className="mt-2  shadow-sm">
									<Quill setText={setInstructorExperience} text={instructorExperience} metion={instructorExperienceLimite} />
								</div>
								<p className="mt-1 text-xs leading-6 text-gray-400">
									輸入說明至少達200字元以上</p>
								<p className={`text-xs leading-6 text-${instructorExperienceLimiteMetion} `}>
									內容未達200字元</p>
							</div>

							{/* SECTION 課程封面 得用append加進formdata*/}
							<div className=" col-span-full">
								<label
									htmlFor="title"
									className="block text-md font-semibold leading-6 text-gray-900"
								>
									課程封面
								</label>
								<div className="mt-2">
									<div className="sm:flex ">
										<div className="mb-5 sm:mb-0 sm:me-5 w-full sm:w-6/12 md:h-72 overflow-y-scroll">
											<img src={previewURL} alt="" style={{ "width": "100%" }} />
										</div>
										<div className="sm:w-6/12">
											<p className="text-base text-justify">在此上傳您的課程圖片。必須符合我們的課程圖片品質標準方可使用。重要規範：1920x1080 像素；jpg、jpeg、png 檔案類型，圖片上不可有文字。</p>
											<div className="mt-5">
												<label htmlFor="file-input" className="sr-only">
													Choose file
												</label>
												<input
													onChange={handleFileChange}
													type="file"
													name="courseCover"
													className={`block w-full border border-gray-200 shadow-sm text-sm focus:z-10 focus:border-black-500 focus:ring-black-500 disabled:opacity-50 disabled:pointer-events-none
    											file:bg-gray-50 file:border-0
    											file:me-4
    											file:py-3 file:px-4
													${selectFileLimite}
    											`}

												/>
												<p className={`text-xs leading-6 text-${selectFileLimiteMetion} `}>
													{selectFile === null ? "此欄位必填" : "請上傳jpg、jpeg、png檔"}</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							{/* SECTION 行銷影片 得用append加進formdata*/}
							<div className=" col-span-full">
								<label
									htmlFor="title"
									className="block text-md font-semibold leading-6 text-gray-900"
								>
									行銷影片
								</label>
								<div className="mt-2">
									<div className="sm:flex ">
										<div className="mb-5 sm:mb-0 sm:me-5 w-full sm:w-6/12	md:h-72">
											<video src={previewVideo} alt="" style={{ "width": "100%" }} controls />
											{/* controls autoPlay */}
										</div>
										<div className="sm:w-6/12">
											<p className="text-base text-justify" >製作一部引人入勝的宣傳影片，能夠吸引學生的注意力，並迅速介紹您課程的內容，讓他們對所學內容有更清晰的預覽。若影片製作精良，學生報名您課程的可能性將大大提高。重要規範：請上傳 mp4 檔案類型。</p>
											<div className="mt-5">
												<label htmlFor="file-input" className="sr-only">
													Choose file
												</label>
												<input
													onChange={handleVideoFileChange}
													type="file"
													name="promotionalVideo"
													className={`block w-full border border-gray-200 shadow-sm text-sm focus:z-10 focus:border-black-500 focus:ring-black-500 disabled:opacity-50 disabled:pointer-events-none
    											file:bg-gray-50 file:border-0
    											file:me-4
    											file:py-3 file:px-4
													${selectVideoFileLimite}
    											`}
												/>
												<p className={`text-xs leading-6 text-${selectVideoFileLimiteMetion} `}>
													{selectVideoFile === null ? "此欄位必填" : "請上傳mp4檔"}</p>
											</div>
										</div>
									</div>
								</div>
							</div>
							{/* SECTION 上傳課程 */}
							<div className="col-span-full">
								<label
									htmlFor="title"
									className="block text-md font-semibold leading-6 text-gray-900"
								>
									上傳課程
								</label>
								<div className="mt-2">
									<div className="sm:flex overflow-y-scroll">
										<UploadTables UploadFileAlertDisplay={UploadFileAlertDisplay} SetUploadFileAlertDisplay={SetUploadFileAlertDisplay} {...{ lessonData }} setPutData={setPutData}
										/>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-4 flex items-center justify-center  md:justify-end gap-x-6">
					<button
						type="button"
						className="ring-1 ring-orange-500 px-3 py-2 text-sm font-semibold text-orange-500 shadow-sm hover:ring-orange-300 hover:text-orange-300" onClick={() => {
							window.location.href = "/teacher";
						}}
					>
						取消
					</button>
					<button
						type="submit"
						className=" bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500"
					>
						送出
					</button>
				</div>
			</form>

		</>

	);
}
