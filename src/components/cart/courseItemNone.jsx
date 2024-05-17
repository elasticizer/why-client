import React from 'react';

export default function CourseItemNone() {
	return (
		<>
			<div className="flex flex-col items-center justify-center space-y-4 p-36">
        <img src='https://hahow.in/static/media/empty-icon.ffab5b384149efd3fad5979bde7a0f52.svg'/>
				<p className='text-lg font-semibold'>購物車是空的，去逛逛吧！</p>
				<a
					type="button"
					href='#'
					className="py-2 px-10 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-400 text-white hover:bg-orange-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer">
					前往首頁
				</a>
			</div>
		</>
	);
}
