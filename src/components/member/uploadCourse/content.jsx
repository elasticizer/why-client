import React from 'react';
import styles from '@/styles/teacher.module.css';
import Form from "@/components/member/uploadCourse/form";

export default function Content({ UploadFileAlertDisplay, SetUploadFileAlertDisplay, courseClass, setCourseClass, lesson, lessonData, setCourseProgress, SetUploadCourseAlertDisplay, setPutData, setLessonData }) {
	return (
		<div className={`${styles.content} md:ps-10 md:pe-10`}>
			<div className="flex justify-center">
				<Form UploadFileAlertDisplay={UploadFileAlertDisplay} SetUploadFileAlertDisplay={SetUploadFileAlertDisplay} courseClass={courseClass} setCourseClass={setCourseClass} {...{ lesson }} {...{ lessonData }} setCourseProgress={setCourseProgress} SetUploadCourseAlertDisplay={SetUploadCourseAlertDisplay} setPutData={setPutData} {...{ setLessonData }} />
			</div>
		</div>

	);
}
