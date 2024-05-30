import OrderList from './orderList';
import SearchBox from './searchBox';

export default function OrderTabs() {
	return (
		<>
			<div className="container my-4">
				{/* 頁面選項 */}
				<div className="border-b border-gray-200 dark:border-neutral-700">
					<nav
						className="-mb-0.5 flex justify-center space-x-6"
						aria-label="Tabs"
						role="tablist">
						<button
							type="button"
							className="hs-tab-active:font-semibold hs-tab-active:border-orange-600 hs-tab-active:text-orange-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-md whitespace-nowrap text-gray-500 hover:text-orange-600 focus:outline-none focus:text-orange-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-orange-500 active"
							id="horizontal-alignment-item-1"
							data-hs-tab="#horizontal-alignment-1"
							aria-controls="horizontal-alignment-1"
							role="tab">
							所有訂單
						</button>
						<button
							type="button"
							className="hs-tab-active:font-semibold hs-tab-active:border-orange-600 hs-tab-active:text-orange-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-md whitespace-nowrap text-gray-500 hover:text-orange-600 focus:outline-none focus:text-orange-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-orange-500"
							id="horizontal-alignment-item-2"
							data-hs-tab="#horizontal-alignment-2"
							aria-controls="horizontal-alignment-2"
							role="tab">
							完成訂單
						</button>
						<button
							type="button"
							className="hs-tab-active:font-semibold hs-tab-active:border-orange-600 hs-tab-active:text-orange-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-md whitespace-nowrap text-gray-500 hover:text-orange-600 focus:outline-none focus:text-orange-600 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:text-orange-500"
							id="horizontal-alignment-item-3"
							data-hs-tab="#horizontal-alignment-3"
							aria-controls="horizontal-alignment-3"
							role="tab">
							失效訂單
						</button>
						{/* <SearchBox /> */}
					</nav>
				</div>
				{/* 頁面列表 */}
				<OrderList />
				{/* 分頁按鈕 */}
				{/* <Pagination /> */}
			</div>
		</>
	);
}
