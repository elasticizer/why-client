import { useEffect, useState } from 'react';
import SecurityRow from './security-row';

export default function SecurityTable({ interactive = false }) {
	const [page, setPage] = useState(1);
	const [data, setData] = useState([]);
	const [stat, setStat] = useState({ Count: 0, Total: 0 });

	useEffect(
		() => void fetch(`/api/account/security?page=${page}`)
			.then(r => r.json())
			.then(({ done, data, stat }) => done && (setData(data), setStat(stat))),
		[page]
	);

	return (
		<>
			{/* Card */}
			<div className="flex flex-col">
				<div className="-m-1.5 overflow-x-auto">
					<div className="p-1.5 min-w-full inline-block align-middle">
						<div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden dark:bg-neutral-800 dark:border-neutral-700">
							{/* Header */}
							<div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 dark:border-neutral-700">
								<div>
									<h2 className="text-xl font-semibold text-gray-800 dark:text-neutral-200">
										工作階段
									</h2>
									<p className="text-sm text-gray-600 dark:text-neutral-400">
										管理您的帳戶最近 28 日活動。
									</p>
								</div>
							</div>
							{/* End Header */}
							{/* Table */}
							<table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
								<thead className="bg-gray-50 dark:bg-neutral-800">
									<tr>
										<th
											scope="col"
											className="ps-6 py-3 text-start">
											<label
												htmlFor="hs-at-with-checkboxes-main"
												className="flex">
												<input
													type="checkbox"
													className="shrink-0 border-gray-300 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-600 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
												/>
												<span className="sr-only">Checkbox</span>
											</label>
										</th>
										<th
											scope="col"
											className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
											<div className="flex items-center gap-x-2">
												<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
													裝置
												</span>
											</div>
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-start">
											<div className="flex items-center gap-x-2">
												<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
													狀態
												</span>
											</div>
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-start">
											<div className="flex items-center gap-x-2">
												<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
													IP 位址
												</span>
											</div>
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-start">
											<div className="flex items-center gap-x-2">
												<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
													登入日期
												</span>
											</div>
										</th>
										<th
											scope="col"
											className="px-6 py-3 text-start">
											<div className="flex items-center gap-x-2">
												<span className="text-xs font-semibold uppercase tracking-wide text-gray-800 dark:text-neutral-200">
													登出日期
												</span>
											</div>
										</th>
									</tr>
								</thead>
								<tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
									{data.map((v, i) => <SecurityRow key={i} data={v} />)}
								</tbody>
							</table>
							{/* End Table */}
							{/* Footer */}
							{interactive && <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-t border-gray-200 dark:border-neutral-700">
								<div>
									<p className="text-sm text-gray-600 dark:text-neutral-400">
										<span className="font-semibold text-gray-800 dark:text-neutral-200">
											12
										</span>{' '}
										results
									</p>
								</div>
								<div>
									<div className="inline-flex gap-x-2">
										<button
											type="button"
											className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
											<svg
												className="flex-shrink-0 size-4"
												xmlns="http://www.w3.org/2000/svg"
												width={24}
												height={24}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round">
												<path d="m15 18-6-6 6-6" />
											</svg>
											Prev
										</button>
										<button
											type="button"
											className="py-1.5 px-2 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
											Next
											<svg
												className="flex-shrink-0 size-4"
												xmlns="http://www.w3.org/2000/svg"
												width={24}
												height={24}
												viewBox="0 0 24 24"
												fill="none"
												stroke="currentColor"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round">
												<path d="m9 18 6-6-6-6" />
											</svg>
										</button>
									</div>
								</div>
							</div>}
							{/* End Footer */}
						</div>
					</div>
				</div>
			</div>
			{/* End Card */}
		</>);
}
