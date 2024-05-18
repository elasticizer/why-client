import React from 'react';

export default function Domain() {
	return (
		<div className="flex items-center mt-5 md:mt-0">
			<p className="md:block hidden text-nowrap">領域分類：</p>
			<div className="w-full">
				<select
					id="domain"
					name="domain"
					autoComplete="domain-name"
					className="block w-full  border-0  text-base text-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 sm:leading-6 ps-1 pe-3 hover:ring-orange-300 hover:ring-2 p-2 ps-3 pe-3"
				>
					<option value="default">選擇領域</option>
					<option value="Music">音樂</option>
					<option value="Language">語言</option>
					<option value="Photography">攝影</option>
					<option value="Art">藝術</option>
					<option value="Design">設計</option>
					<option value="Humanities">人文</option>
					<option value="Marketing">行銷</option>
					<option value="Programming">程式</option>
					<option value="InvestingFinance">投資理財</option>
					<option value="WorkplaceSkills">職場技能</option>
					<option value="Diy">手作</option>
					<option value="Lifestyle">生活品味</option>
				</select>
			</div>
		</div>
	);
}
