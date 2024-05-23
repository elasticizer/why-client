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
				</div>
				<div className="w-1/5 text-center">
					<p className="text-sm">{data.WhenApproved}</p>
				</div>
				<div
					className="w-1/5 text-center
				">
					<p className="text-sm">NT${data.Price * data.SN}</p>
				</div>
			</div>
			{/* end tbody */}
		</>
	);
}
