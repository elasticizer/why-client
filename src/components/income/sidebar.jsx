import { useSession } from '@/contexts/session';

export default function Sidebar({ data }) {
	const session = useSession();

	return (
		<>
			<div className="mb-10 lg:col-span-1 lg:w-full lg:h-fit bg-gray-100 lg:from-gray-50 rounded-xl lg:via-transparent lg:to-transparent dark:from-neutral-800">
				<div className="sm:p-4 lg:px-8 flex lg:flex-col md:flex-row justify-center md:gap-6 lg:gap-1 md:items-center sm:justify-around sm:items-center">
					{/* 會員 */}
					<div className="group m-2 flex sm:flex-col lg:flex-row items-center gap-x-2 gap-y-3 lg:mb-5 dark:border-neutral-700">
						<a
							className="block flex-shrink-0"
							href="#">
							<img
								className="size-10 rounded-full"
								src={session?.Icon}
								alt="Image Description"
							/>
						</a>
						<a
							className="group grow block"
							href="">
							<h5 className="group-hover:text-gray-600 text-sm font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200">
								{session?.Nickname || session?.FirstName}
							</h5>
						</a>
					</div>
					{/* 會員狀態 */}
					<div className="flex gap-2 p-2 lg:flex-col lg:space-y-4 lg:space-x-0 md:flex-row md:space-x-4 sm:space-x-4">
						{/* Card */}
						<div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
							<div className="p-2 md:p-3 lg:w-48 md:w-32 sm:w-32">
								<div className="flex items-center gap-x-2">
									<p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
										已開設
									</p>
								</div>
								<div className="mt-1 flex items-center gap-x-2">
									<p className="text-sm sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
										{data.length} 堂課程
									</p>
								</div>
							</div>
						</div>
						{/* End Card */}
						{/* Card */}
						<div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-800 dark:border-neutral-700">
							<div className="p-2 md:p-3 md:w-32 sm:w-32">
								<div className="flex items-center gap-x-2">
									<p className="text-xs uppercase tracking-wide text-gray-500 dark:text-neutral-500">
										您的總收益為
									</p>
								</div>
								<div className="mt-1 flex items-center gap-x-2">
									<p className="text-sm sm:text-2xl font-medium text-gray-800 dark:text-neutral-200">
										NT${data.reduce((total, value) => total + value.Income, 0)}
									</p>
								</div>
							</div>
						</div>
						{/* End Card */}
					</div>
				</div>
			</div>
		</>
	);
}
