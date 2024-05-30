import Recommended from './recommended';
import Link from 'next/link';

export default function Finish() {
	return (
		<div className="container mt-8 max-w-[85rem] sm:px-6 lg:px-8 mx-auto my-8" >
			<div className="relative mx-auto max-w-4xl grid space-y-5 sm:space-y-10">
				{/* Title */}
				<div className="text-center">
					<p className="font-semibold text-4xl">感謝你的購買</p>
				</div>
				{/* End Title */}

				{/* 完成結帳卡片 */}
				<div
					className="bg-white border rounded-xl shadow-sm sm:flex lg:flex-row md:flex-col sm:flex-col"
					dir="ltr">
					<div className="w-full">
						<div className="flex flex-col h-full sm:p-7">
							<h3 className="text-3xl font-bold text-gray-800">
								課程已開課，隨時都可以上課唷！
							</h3>
							<h2 className="mt-2 text-3xl font-bold">你可以……</h2>
							<div className="mt-auto flex justify-between items-end">
								<ul className="space-y-3 mt-5">
									<li className="flex space-x-3">
										<svg
											className="flex-shrink-0 size-4 mt-0.5 text-blue-600"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
										<span className="text-gray-800">
											課程學習：觀看影片學習課程內容
										</span>
									</li>
									<li className="flex space-x-3">
										<svg
											className="flex-shrink-0 size-4 mt-0.5 text-blue-600"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
										<span className="text-gray-800">
											留言發問：隨時參與老師同學的討論
										</span>
									</li>
									<li className="flex space-x-3">
										<svg
											className="flex-shrink-0 size-4 mt-0.5 text-blue-600"
											xmlns="http://www.w3.org/2000/svg"
											width={24}
											height={24}
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											strokeWidth={2}
											strokeLinecap="round"
											strokeLinejoin="round">
											<polyline points="20 6 9 17 4 12" />
										</svg>
										<span className="text-gray-800">
											繳交作業：繳交作業驗收你的學習成果
										</span>
									</li>
								</ul>
								<Link href={'/order'}>
									<button
										type="button"
										className="py-0.5 px-2 inline-flex items-center justify-center gap-x-2 font-semibold rounded-lg border border-transparent bg-blue-500 text-white hover:bg-blue-600 disabled:opacity-50 disabled:pointer-events-none">
										查看訂單
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>
				{/* End 完成結帳卡片 */}

				{/* Title */}
				<div className="text-center">
					<p className="font-semibold text-4xl">推薦課程</p>
				</div>
				{/* End Title */}

				{/* 推薦課程 */}
				<div className="flex gap-5">
					<Recommended />
				</div>
				{/* End 推薦課程 */}
			</div>
		</div>
	);
}
