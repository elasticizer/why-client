import { useSession } from '@/contexts/session';

export default function Sidebar({ data }) {
	const session = useSession();
	console.log(data);

	return (
		<div className="w-full lg:col-span-1 lg:w-full lg:h-fit bg-gray-100 lg:from-gray-50 rounded-xl lg:via-transparent lg:to-transparent dark:from-neutral-800">
			<div className="w-full flex lg:flex-col md:flex-row justify-center md:gap-6 lg:gap-1">
				{/* 會員 */}
				<div className="group m-2 flex flex-row justify-center items-center gap-x-2 lg:mb-5">
					<div className="block flex-shrink-0">
						<img
							className="size-15 rounded-full"
							src={session?.Icon}
							alt="Image Description"
						/>
					</div>
					<div className="inline-block">
						<h5 className="text-xl sm:text-2xl font-semibold">
							{session?.Nickname || session?.FirstName}
						</h5>
					</div>
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
	);
}
