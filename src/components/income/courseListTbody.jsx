import React from 'react';

export default function CourseListTbody() {
	return (
		<>
			{/* tbody */}
			<div className="flex flex-row justify-between items-center px-4 py-2 border">
				<div className="flex flex-col gap-1 w-1/2">
					<p className="text-nowrap text-sm font-bold text-gray-800">
						原創角色設計全攻略｜從風格定位到 IP 經營
					</p>
				</div>
				<div className="w-1/5 text-center">
					<p className="text-sm">2024/05/01</p>
				</div>
				<div
					className="w-1/5 text-center
				">
					<p className="text-sm">NT$500</p>
				</div>
			</div>
			{/* end tbody */}
		</>
	);
}
