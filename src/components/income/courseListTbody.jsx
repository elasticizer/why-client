import React from 'react';

export default function CourseListTbody({ data }) {
	return (
		<>
			{/* tbody */}
			<div className="flex flex-row justify-between items-center px-4 py-2 border">
				<div className="flex flex-col gap-1 w-1/2">
					<p className="text-nowrap text-sm font-bold text-gray-800">
						{data.Name}
					</p>
					<p className="text-xs text-gray-500">{data.Identifier}</p>
				</div>
				<div className="w-1/3 text-center">
					<p className="text-sm">{data.WhenLaunched}</p>
				</div>
				<div
					className="w-1/5 text-center
				">
					<p className="text-sm">NT${data.Income}</p>
				</div>
			</div>
			{/* end tbody */}
		</>
	);
}
