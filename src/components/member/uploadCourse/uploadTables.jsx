import React from 'react';



export default function UploadTables({ SetUploadFileAlertDisplay, lessonData,putData, setPutData }) {

	return (
		<div className="flex flex-col w-full">
			<div className="-m-1.5 overflow-x-auto">
				<div className="p-1.5 min-w-full inline-block align-middle">
					<div className="overflow-hidden">
						<table className="min-w-full divide-y divide-gray-200 bg-slate-900">
							<thead>
								<tr>
									<th scope="col"
										className="px-6 py-3 text-start text-md font-medium text-white uppercase text-nowrap">章節總覽</th>
									<th scope="col"
										className="px-6 py-3 text-end text-xs font-medium text-white	 uppercase" colSpan={5}><button className="bg-orange-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={(e) => {
											e.preventDefault();
											SetUploadFileAlertDisplay("");
										}}>新增章節</button></th>
								</tr>
							</thead>
							<thead>
								<tr>
									<th
										scope="col"
										className="px-6 py-3 text-start text-xs font-medium text-slate-100 uppercase text-nowrap	"
									>
										章節
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-start text-xs font-medium text-slate-100 uppercase"
									>
										主題
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-start text-xs font-medium text-slate-100 uppercase"
									>
										上傳日期
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-start text-xs font-medium text-slate-100 uppercase"
									>
										最後編輯日期
									</th>
									<th
										scope="col"
										className="px-6 py-3 text-end text-xs font-medium text-slate-100 uppercase"
									>
										編輯
									</th>
								</tr>
							</thead>
							<tbody className="divide-y divide-gray-200">
								{lessonData && lessonData.map((v, i) => {
									return (
										<tr key={v.SN}>
											<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-slate-200">
												{i + 1}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-200">
												{v.Title}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-200">
												{v.WhenCreated}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-sm text-slate-200">
												{v.WhenLastEdited}
											</td>
											<td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
												<button className="bg-amber-400 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-amber-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" onClick={(e) => {
													e.preventDefault();
													SetUploadFileAlertDisplay("");
													setPutData(v);
												}}>編輯</button>
											</td>
										</tr>
									);

								})}


							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>

	);
}
