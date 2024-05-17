import React from 'react';

export default function WorkCover() {
	return (
		<>
			<div className="border border-gray-300 rounded-lg">
				<div className="group flex justify-center dark:border-neutral-700 bg-gray-100">
					<h5 className="group-hover:text-gray-500 text-xl font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200 p-4">
						作品封面
					</h5>
				</div>
				<div className="space-y-4 p-4">
					<a
						className="flex flex-col group bg-white border shadow-sm rounded-xl overflow-hidden hover:shadow-lg transition dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70"
						href="#">
						<div className="relative pt-[50%] sm:pt-[60%] lg:pt-[80%] overflow-hidden">
							<img
								className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
								src="https://images.hahow.in/images/640acbe257e7936d3f477b88"
							/>
						</div>
					</a>
				</div>
			</div>
		</>
	);
}
