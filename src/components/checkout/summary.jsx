import React from 'react';
import SummaryItem from './summaryItem';

export default function Summary() {
	return (
		<>
			<div className="border border-gray-300 rounded-lg px-4 pt-4 mb-4">
				<div className="flex pb-4 border-b border-gray-300">
					<div className="flex items-center gap-x-3">
						<p className="text-xl">購買明細</p>
						<p className="text-sm">總共1件</p>
					</div>
				</div>
				<div className="grid grid-cols-1 divide-y">
					<SummaryItem />
				</div>
			</div>
		</>
	);
}
