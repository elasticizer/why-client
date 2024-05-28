import Header from '@/components/member/teacher/header';
import Sidebar from '@/components/member/teacher/sidebar';
import Tabbar from '@/components/member/tabbarTeacher';
import Content from '@/components/member/uploadCourse/content';
import UploadFileAlert from "@/components/member/uploadCourse/uploadFileAlert";
import UploadCourseAlert from "@/components/member/uploadCourse/uploadCourseAlert";
import { useState } from "react";

import React from 'react';
import styles from '@/styles/teacher.module.css';

export default function UploadCourse() {
	const [windowNav, setWindowNav] = useState("hidden");
	const [UploadFileAlertDisplay, SetUploadFileAlertDisplay] = useState("hidden");
	const [UploadCourseAlertDisplay, SetUploadCourseAlertDisplay] = useState("hidden");
	const [courseClass, setCourseClass] = useState("video");
	const [lesson, setLesson] = useState([]);
	const [lessonData, setLessonData] = useState([]);
	const [courseProgress, setCourseProgress] = useState(0);
	const [putData, setPutData] = useState([]);


	return (
		<>
			<div className={`${styles.container}`}>
				{/* header */}
				<Header />

				<h1 className="text-2xl md:text-3xl font-semibold mt-10">上傳課程</h1>
				<Content UploadFileAlertDisplay={UploadFileAlertDisplay} SetUploadFileAlertDisplay={SetUploadFileAlertDisplay} courseClass={courseClass} setCourseClass={setCourseClass}  {...{ lesson }} {...{ lessonData }} setCourseProgress={setCourseProgress} SetUploadCourseAlertDisplay={SetUploadCourseAlertDisplay} putData={putData} setPutData={setPutData} {...{ setLessonData }} />
				<UploadFileAlert UploadFileAlertDisplay={UploadFileAlertDisplay} SetUploadFileAlertDisplay={SetUploadFileAlertDisplay} courseClass={courseClass} setCourseClass={setCourseClass} {...{ lesson }} {...{ setLesson }} {...{ lessonData }} {...{ setLessonData }} putData={putData} setPutData={setPutData} />
				<UploadCourseAlert courseProgress={courseProgress} UploadCourseAlertDisplay={UploadCourseAlertDisplay} SetUploadCourseAlertDisplay={SetUploadCourseAlertDisplay} />
			</div>
			<Tabbar setWindowNav={setWindowNav} windowNav={windowNav} />

			{/* SECTION mobileWindowNavbar */}
			<Sidebar WindowNav={windowNav} setWindowNav={setWindowNav} />
		</>
	);
}
