import React from 'react';

export default function SummaryItem() {
	return (
		<>
			<div className="flex flex-row justify-between items-start gap-2 py-4">
				<div className="flex items-center gap-3">
					<span className="inline-flex items-center py-0.5 px-1 rounded-md border border-yellow-400 text-sm font-bold bg-yellow-100 text-yellow-800 text-nowrap">
						設計
					</span>
					<p className="font-semibold tracking-wide">
						原創角色設計全攻略｜從風格定位到 IP 經營
					</p>
				</div>
				<div>
					<p className="font-semibold text-lg tracking-wider">NT$1000</p>
				</div>
			</div>
		</>
	);
}
