import Bowser from 'bowser';

type SecurityRowProps = {
	data: Record<string, string>;
};

export default function SecurityRow({ data }: SecurityRowProps) {
	const bowser = Bowser.parse(data.UserAgent);

	return (
		<tr>
			<td className="whitespace-nowrap">
				<div className="ps-6 py-3">
					<label className="flex">
						<input
							type="checkbox"
							className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
							disabled={Boolean(data.Current)}
						/>
						<span className="sr-only">Checkbox</span>
					</label>
				</div>
			</td>
			<td className="whitespace-nowrap">
				<div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
					<div className="flex items-center gap-x-3">
						<div className="grow">
							<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
								{bowser.os.name}
							</span>
							<span className="block text-sm text-gray-500 dark:text-neutral-500">
								{bowser.browser.name}
							</span>
						</div>
					</div>
				</div>
			</td>
			<td className="whitespace-nowrap">
				<div className="px-6 py-3">
					{Boolean(data.Current) && <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full dark:bg-teal-500/10 dark:text-teal-500">
						<svg
							className="size-2.5"
							xmlns="http://www.w3.org/2000/svg"
							width={16}
							height={16}
							fill="currentColor"
							viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
						</svg>
						目前的工作階段
					</span>}
				</div>
			</td>
			<td className="whitespace-nowrap">
				<div className="px-6 py-3">
					<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
						{data.IP}
					</span>
				</div>
			</td>
			<td className="w-72 whitespace-nowrap">
				<div className="px-6 py-3">
					<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
						{new Date(`${data.WhenCreated}Z`).toLocaleDateString('zh-TW', { dateStyle: 'long' })}
					</span>
				</div>
			</td>
			<td className="w-72 whitespace-nowrap">
				<div className="px-6 py-3">
					<span className="block text-sm font-semibold text-gray-800 dark:text-neutral-200">
						{data.WhenRevoked
							&& new Date(`${data.WhenRevoked}Z`).toLocaleDateString('zh-TW', { dateStyle: 'long' })}
					</span>
				</div>
			</td>
		</tr>
	);
}
