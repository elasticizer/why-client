import { useState, useEffect } from 'react';

export default function WorkAuthor() {
	const [author, setAuthor] = useState(null);

	useEffect(() => {
		getAuthor();
	}, []);

	const getAuthor = async () => {
		const url = '/api/work';
		try {
			const res = await fetch(url);
			const data = await res.json();
			console.log(data);
			if (data) {
				setAuthor(data);
			}
		} catch (e) {
			setAuthor(null);
		}
	};

	return (
		<>
			{author && (
				<div className="border border-gray-300 rounded-lg">
					<div className="group flex justify-center dark:border-neutral-700 bg-gray-100">
						<h5 className="group-hover:text-gray-500 text-xl font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200 py-3">
							{author.Nickname}
						</h5>
					</div>
					<div className="space-y-4 p-4 hs-tooltip [--placement:right]">
						<a
							className="flex flex-col group bg-white rounded-full shadow-sm hover:shadow-lg transition hs-tooltip-toggle size-full"
							href="#">
							<div className="relative p-[50%] rounded-full overflow-hidden">
								<img
									className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
									src="https://images.unsplash.com/photo-1541130292430-a832637ddc0d?q=80&w=2427&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								/>
							</div>
							<span
								className="hs-tooltip-content hs-tooltip-shown:opacity-50 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-50 py-1 px-2 bg-gray-600 text-white text-sm rounded-lg"
								role="tooltip">
								前往個人頁面
							</span>
						</a>
						<p className="font-semibold px-2 line-clamp-2">
						{author.Resume}
						</p>
					</div>
				</div>
			)}
			{/* <div className="border border-gray-300 rounded-lg">
				<div className="group flex justify-center dark:border-neutral-700 bg-gray-100">
					<h5 className="group-hover:text-gray-500 text-xl font-semibold text-gray-800 dark:group-hover:text-neutral-400 dark:text-neutral-200 py-3">
						Joy
					</h5>
				</div>
				<div className="space-y-4 p-4 hs-tooltip inline-block [--placement:right]">
					<a
						className="flex flex-col group bg-white rounded-full shadow-sm hover:shadow-lg transition hs-tooltip-toggle"
						href="#">
						<div className="relative p-[50%] rounded-full overflow-hidden">
							<img
								className="size-full absolute top-0 start-0 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-t-xl"
								src="https://images.unsplash.com/photo-1541130292430-a832637ddc0d?q=80&w=2427&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
								alt="Image Description"
							/>
							<span
								className="hs-tooltip-content hs-tooltip-shown:opacity-50 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-50 py-1 px-2 bg-gray-600 text-white text-sm rounded-lg"
								role="tooltip">
								前往個人頁面
							</span>
						</div>
					</a>
					<p className="font-semibold px-2 line-clamp-2">
						我一直在程式圈打滾，程式開發到現在寫了 30
						年，歷經多次的程式變革。擔任程式設計師、軟體部經理、技術顧問、總監等職。
						完成數十個業界專案，包括即時聊天、企業 SIP 通訊、社群分享等 APP
						應用系統。 擔任各學校課程與軟體公司、新創團隊企業內訓課程講師。
						全球第 18 順位取得 Google 認證 Android
						開發員認證，是綠豆湯技術部落格的發起者，發表許多 Android、Java 與
						Firebase 等技術文章。
					</p>
				</div>
			</div> */}
		</>
	);
}
