import { useState } from 'react';
import SalesDataTbody from './salesDataTbody';
import DropDownList from './dropDownList';

export default function SalesData() {
	const courseItems = [SalesDataTbody, SalesDataTbody, SalesDataTbody];

	const initState = courseItems.map((v, i) => {
		return { id: i + 1, checked: false };
	});

	const [courseItem, setCourseItem] = useState(initState);

	//
	const handleToggleChecked = id => {
		const nextCourseItems = courseItem.map((v, i) => {
			if (v.id === id) return { ...v, checked: !v.checked };
			else return v;
		});
		setCourseItem(nextCourseItems);
	};

	// 全選
	const handleToggleCheckAll = e => {
		const nextCourseItems = courseItem.map((v, i) => {
			return { ...v, checked: e.target.checked };
			// 讓所有選項與checkAll一樣
		});
		setCourseItem(nextCourseItems);
	};
	return (
		<>
			<DropDownList />
			{/* table */}
			{/* thead */}
			<div className="flex flex-row justify-between items-center px-4 py-2 border rounded-t-lg font-semibold bg-yellow-50">
				<div className="w-1/2">課程名稱</div>
				<div className="w-1/5 text-center">收益金額</div>
				<div className="w-1/5 text-center">領取狀態</div>
				<input
					type="checkbox"
					className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 me-3 size-4"
					id="hs-default-checkbox"
					checked={courseItem.every(v => v.checked)}
					onChange={handleToggleCheckAll}
				/>
			</div>
			{/* end thead */}
			{/* tbody */}
			{courseItem.map((v, i) => {
				return (
					<SalesDataTbody
						key={v.id}
						checked={v.checked}
						onChange={() => {
							handleToggleChecked(v.id);
						}}
					/>
				);
			})}
			{/* end tbody */}
		</>
	);
}
