import React from 'react';
import WorkBreadcrumb from './workBreadcrumb';
import WorkTitle from './workTitle';
import WorkContent from './workContent';
import WorkAside from './workAside';

export default function List() {
	return (
		<>
			<div className="container">
				<div className="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto my-8 relative">
					<WorkBreadcrumb />
					<div className="grid lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:gap-x-6 mt-5">
						<div className="lg:col-span-3">
							<div className="border border-gray-300 rounded-lg">
								<WorkTitle />
								<WorkContent />
							</div>
						</div>
						<div className="lg:col-span-1 ">
								<WorkAside />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
