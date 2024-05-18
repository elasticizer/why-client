import React from 'react';
import { MdAccessTime } from 'react-icons/md';

export default function UploadCard() {
	return (
		<div className="bg-white border shadow-sm md:flex mt-10 ">
			<div className="flex-shrink-0 relative w-full overflow-hidden pt-[25%] md:pt-[15%] md:max-w-60">
				<img
					className="size-full absolute top-0 start-0 object-cover"
					src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
					alt="Image Description"
				/>
			</div>
			<div className="flex flex-wrap">
				<div className="p-4 flex flex-col h-full sm:p-7">
					<h3 className="text-lg font-bold text-gray-800">課程：切版設計</h3>
					<p className="mt-1 text-gray-500">審核進度：目前還在審核中...</p>
					<div className="mt-2">
						<div className="text-xs text-gray-500 flex content-center	mt-1">
							<MdAccessTime />
							創建時間-2024.02.18 02:12
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
