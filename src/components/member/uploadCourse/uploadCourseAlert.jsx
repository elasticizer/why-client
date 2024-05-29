import { BsCloudUploadFill } from "react-icons/bs";
import 'animate.css';
import { useRouter } from 'next/router';

export default function UploadCourseAlert({ uploadCourseAlertDisplay, SetUploadCourseAlertDisplay, progressEl, done }) {

	const router = useRouter();

	return (
		<div className={`bg-white flex flex-col items-center justify-center shadow-sm ring-1 ring-gray-300 fixed w-full h-full top-0 left-0 md:w-3/5 md:top-1/2 md:left-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2 px-5  md:h-4/6  ${uploadCourseAlertDisplay ? "flex" : "hidden"}`}>
			<div className="mt-5 relative"><BsCloudUploadFill size="80px" color="#FFAF60" /></div>
			<div className="block text-md font-semibold leading-6 text-gray-900 mt-5">課程資料上傳中...</div>

			<div className={`flex w-full flex-col items-center my-5`}>
				<progress ref={progressEl} value={0} max={100} className="flex border h-3 rounded-full sm:max-w-md w-full  mt-5" />
				{done || <div className="my-5">請不要未完成檔案上傳就關閉頁面，避免出錯</div>}
				{done &&
					<div className="flex flex-col items-center my-5">
						<p>檔案已上傳完成</p>
						<button
							type="submit"
							className=" bg-orange-400 px-3 py-2 text-sm font-semibold text-white shadow-sm mt-10 hover:bg-orange-300" onClick={() => {
								SetUploadCourseAlertDisplay(false);
								router.push('/teacher');
							}}
						>
							離開
						</button>
					</div>
				}
			</div>
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
