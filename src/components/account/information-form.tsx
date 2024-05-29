import { useSession } from '@/contexts/session';
import type { Nullable } from '@/types';
import type { ApiResponseBody } from '@/types/api';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useId, useState } from 'react';

export default function InformationForm() {
	const router = useRouter();
	const session = useSession();

	const ids = {
		firstName: useId(),
		email: useId(),
		icon: useId()
	};
	const [icon, setIcon] = useState<Nullable<string>>(null);
	const [done, setDone] = useState<Nullable<boolean>>(null);

	return (
		<>
			{/* Card Section */}
			<div className="max-w-4xl mx-auto">
				{/* Card */}
				<div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-neutral-800">
					<div className="mb-8">
						<h2 className="text-xl font-bold text-gray-800 dark:text-neutral-200">
							個人資訊
						</h2>
						<p className="text-sm text-gray-600 dark:text-neutral-400">
							管理您的個人資訊和帳戶設定。
						</p>
					</div>

					<form
						onSubmit={async e => {
							e.preventDefault();

							const method = 'PATCH';
							const form = e.currentTarget;
							const body = new FormData(form);
							const init = { method, body };
							const data = await fetch('/api/account/information', init).then(
								r => r.json()
							);

							setDone((data as ApiResponseBody<null>).done);
						}}>
						{/* Grid */}
						<div className="grid sm:grid-cols-12 gap-2 sm:gap-6">
							<div className="sm:col-span-3">
								<label className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
									個人資訊圖片
								</label>
							</div>
							{/* End Col */}
							<div className="sm:col-span-9">
								<div className="flex items-center gap-5">
									<Image
										className="inline-block size-16 rounded-full ring-2 ring-white dark:ring-neutral-900"
										src={icon ?? session?.Icon ?? ''}
										alt="Profile Picture"
									/>
									<div className="flex gap-x-2">
										<div>
											<label
												htmlFor={ids.icon}
												className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800">
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
													<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
													<polyline points="17 8 12 3 7 8" />
													<line
														x1={12}
														x2={12}
														y1={3}
														y2={15}
													/>
												</svg>
												上傳照片
											</label>
											<input
												type="file"
												name="icon"
												id={ids.icon}
												className="hidden"
												hidden
												onChange={e =>
													setIcon(
														e.currentTarget.files
															? URL.createObjectURL(e.currentTarget.files[0])
															: null
													)
												}
											/>
										</div>
									</div>
								</div>
							</div>
							{/* End Col */}
							<div className="sm:col-span-3">
								<label
									htmlFor={ids.firstName}
									className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
									全名
								</label>
								<div className="hs-tooltip inline-block">
									<button
										type="button"
										className="hs-tooltip-toggle ms-1">
										<svg
											className="inline-block size-3 text-gray-400 dark:text-neutral-600"
											xmlns="http://www.w3.org/2000/svg"
											width={16}
											height={16}
											fill="currentColor"
											viewBox="0 0 16 16">
											<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
											<path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
										</svg>
									</button>
									<span
										className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
										role="tooltip">
										Displayed on public forums, such as Preline
									</span>
								</div>
							</div>
							{/* End Col */}
							<div className="sm:col-span-9">
								<div className="sm:flex">
									<input
										type="text"
										name="first_name"
										id={ids.firstName}
										placeholder="名字"
										value={session?.FirstName}
										required
										className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									/>
									<input
										type="text"
										name="last_name"
										placeholder="姓氏"
										value={session?.LastName}
										required
										className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									/>
								</div>
							</div>
							{/* End Col */}
							<div className="sm:col-span-3">
								<label
									htmlFor={ids.email}
									className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
									電子郵件地址
								</label>
							</div>
							{/* End Col */}
							<div className="sm:col-span-9">
								<input
									type="email"
									name="email"
									id={ids.email}
									placeholder="example@loclahost"
									value={session?.Email}
									required
									className="py-2 px-3 pe-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
								/>
							</div>
							{/* End Col */}
							<div className="sm:col-span-3">
								<label
									htmlFor="af-account-bio"
									className="inline-block text-sm text-gray-800 mt-2.5 dark:text-neutral-200">
									BIO
								</label>
							</div>
							{/* End Col */}
							<div className="sm:col-span-9">
								<textarea
									id="af-account-bio"
									className="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
									rows={6}
									placeholder="Type your message..."
									defaultValue={''}
								/>
							</div>
							{/* End Col */}
						</div>
						{/* End Grid */}
						<div className="mt-5 flex justify-end gap-x-2">
							<button
								type="button"
								className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
								onClick={router.back}>
								取消
							</button>
							<button
								type="submit"
								className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
								儲存
							</button>
						</div>
					</form>
				</div>
				{/* End Card */}
			</div>
			{/* End Card Section */}
		</>
	);
}
