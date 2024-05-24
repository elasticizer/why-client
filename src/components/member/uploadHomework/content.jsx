import React from 'react';
import FileInput from "@/components/member/uploadHomework/fileInput";

export default function Content() {
	return (
		<div className="w-full flex flex-col justify-center items-center">
			<div className="w-3/4 md:w-1/2 flex flex-col items-center">
				{/* 作業資訊 */}
				<div className='mt-10 flex flex-col justify-start'>
					<div className="flex justify-center">
						<div className="font-bold w-24 text-base md:text-lg">課程名稱：</div>
						<div className="text-base text-gray-600 w-3/5 text-wrap text-justify md:text-lg">
							JavaScript 是現今開發者都必須熟悉的程式語言，這可以讓你得到工作、建立好的網站及應用。
						</div>
					</div>
					<div className="flex justify-center mt-2">
						<div className="font-bold w-24 text-base md:text-lg">作業名稱：</div>
						<div className="text-base text-gray-600 w-3/5 text-wrap text-justify md:text-lg">
							前端網頁切版練習
						</div>
					</div>
					<div className="flex justify-center mt-2">
						<div className="font-bold w-24 text-base md:text-lg">作業描述：</div>
						<div className="text-base text-gray-600 w-3/5 text-wrap text-justify md:text-lg">
							設計和實現一個响应式網頁，該網頁能夠在不同尺寸的設備上正確顯示和適應。你可以選擇一個主題，比如個人網站、產品介紹頁面、部落格等，並確保你的網頁在桌面、平板和手機等各種設備上都能良好地顯示。在設計中，你需要考慮到不同設備的螢幕大小、解析度和觸控方式。
						</div>
					</div>
				</div>
				<FileInput />
			</div>
			<div className="mt-20 md:mt-30 w-full flex justify-center md:justify-end">
				<button
					type="submit"
					className=" bg-orange-400 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-600"
				>
					提交作業
				</button>
			</div>
		</div>
	);
}
