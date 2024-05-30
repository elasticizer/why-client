import { useEffect } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HiXCircle, HiCheckCircle } from 'react-icons/hi';

export default function OrderItem({ item }) {
	useEffect(() => {
		AOS.init();
	}, []);

	const totalAmount = item.reduce(
		(sum, currentItem) => sum + currentItem.Amount,
		0
	);
	return (
		<>
			<div className="container">
				<div
					className="border-2 border-dashed rounded-lg p-4 mt-4 mx-auto"
					data-aos="fade-down">
					{/* 訂單標頭 */}
					<div className="flex justify-between items-center border-b-2 pb-2">
						<div className="flex flex-col gap-y-1">
							{/* 訂單編號 */}
							<p className="text-xl font-semibold">
								#{Date.parse(item[0].WhenCheckedOut) / 1000}
							</p>
							{/* 訂單日期 */}
							<p className="text-sm">
								{new Date(item[0].WhenCheckedOut + 'Z').toLocaleString().slice(0, 9)}
							</p>
						</div>
						{item[0].WhenPaid ? (
							<div className="flex items-center gap-x-1">
								<p className="font-bold">已完成</p>
								<p className="text-xl text-green-500">
									<HiCheckCircle />
								</p>
							</div>
						) : (
							<div className="flex items-center gap-x-1">
								<p className="font-bold">已失效</p>
								<p className="text-xl text-red-500">
									<HiXCircle />
								</p>
							</div>
						)}
					</div>
					{/* 訂單內容 */}
					<div className="pt-4 flex justify-between">
						{/* 訂單內容 */}
						<div className="flex gap-3 lg:flex-row sm:flex-col md:flex-col max-w-max">
							{/* 課程圖片 */}
							<div className="rounded-xl flex relative group overflow-hidden transition w-48 mx-2">
								<img
									className="absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
									src={item[0].Filename}
									alt={item[0].Name}
								/>
							</div>
							{/* 訂單資料 */}
							<div className="flex sm:flex-col md:flex-col lg:flex-row sm:gap-3 md:gap-6 lg:gap-3">
								<div className="flex flex-col gap-3 lg:w-96 md:w-48 sm:w-24">
									<div>
										<p className="font-bold lg:text-lg md:text-base sm:text-base">
											課程名稱
										</p>
										<div className="inline-flex items-center">
											<ul>
												{item.map((course, i) => (
													<li key={i}>
														<Link href={`/course/${course.CourseSN}`}>
															<p className="mt-1 -ms-1 p-1 inline-flex items-center text-sm gap-x-2 rounded-lg border border-transparent text-gray-500 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none text-nowrap">
																<span className="size-2 inline-block bg-orange-300 rounded-full"></span>
																{course.Name}
															</p>
														</Link>
													</li>
												))}
											</ul>
										</div>
									</div>
									<div>
										<p className="font-bold lg:text-lg md:text-base sm:text-base">
											付款方式
										</p>
										<p className="text-gray-600 text-sm">LINE Pay付款</p>
									</div>
								</div>
								<div className="flex justify-end lg:flex-col md:flex-row sm:flex-row gap-x-6 gap-y-3">
									<div>
										<p className="font-bold lg:text-lg md:text-base sm:text-base">
											總額
										</p>
										<p className="text-gray-600 lg:text-base md:text-sm sm:text-sm">
											NT${totalAmount}
										</p>
									</div>
									<div>
										<p className="font-bold lg:text-lg md:text-base sm:text-base">
											折扣
										</p>
										<p className="text-gray-600 lg:text-base md:text-sm sm:text-sm">
											NT$100
										</p>
									</div>
									<div>
										<p className="font-bold lg:text-lg md:text-base sm:text-base text-nowrap">
											付款金額
										</p>
										<p className="text-gray-600 lg:text-base md:text-sm sm:text-sm">
											NT${totalAmount - 100}
										</p>
									</div>
								</div>
							</div>
						</div>
						{/* 訂單時間條 */}
						<div className="ms-4 me-4">
							<div className="flex gap-x-3">
								<div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
									<div className="relative z-10 size-7 flex justify-center items-center">
										<div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600" />
									</div>
								</div>
								<div className="grow pt-0.5 pb-4">
									<h3 className="flex gap-x-1.5 font-semibold text-gray-800 text-nowrap">
										<svg
											className="flex-shrink-0 size-4 mt-1"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
											<polyline points="14 2 14 8 20 8" />
											<line
												x1={16}
												x2={8}
												y1={13}
												y2={13}
											/>
											<line
												x1={16}
												x2={8}
												y1={17}
												y2={17}
											/>
											<line
												x1={10}
												x2={8}
												y1={9}
												y2={9}
											/>
										</svg>
										訂單成立時間
									</h3>
									<p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
										{new Date(item[0].WhenCheckedOut + 'Z').toLocaleString()}
									</p>
								</div>
							</div>
							<div className="flex gap-x-3">
								<div className="relative last:after:hidden after:absolute after:top-7 after:bottom-0 after:start-3.5 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
									<div className="relative z-10 size-7 flex justify-center items-center">
										<div className="size-2 rounded-full bg-gray-400 dark:bg-neutral-600" />
									</div>
								</div>
								<div className="grow pt-0.5 pb-4">
									<h3 className="flex gap-x-1.5 font-semibold text-gray-800 dark:text-white">
										付款時間
									</h3>
									<p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
										{item[0].WhenPaid
											? new Date(item[0].WhenPaid + 'Z').toLocaleString()
											: '付款失敗'}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
