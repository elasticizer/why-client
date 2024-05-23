import React from 'react';

export default function SalesDataTbody(props) {
	return (
		<>
			<div className="flex flex-row justify-between items-center px-4 py-2 border">
				<div className="flex flex-col gap-1 w-1/2">
					<p className="text-nowrap text-sm font-bold text-gray-800">
						原創角色設計全攻略｜從風格定位到 IP 經營
					</p>
					<p className="text-xs text-gray-500">ADUQ2189H1</p>
				</div>
				<div className="w-1/5 text-center">
					<p className="text-sm">NT$500</p>
				</div>
				<div
					className="w-1/5 text-center
				">
					<span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-teal-100 text-teal-800 rounded-full">
						<svg
							className="size-2.5"
							xmlns="http://www.w3.org/2000/svg"
							width={16}
							height={16}
							fill="currentColor"
							viewBox="0 0 16 16">
							<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
						</svg>
						已領取
					</span>
				</div>
				<input
					type="checkbox"
					className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800 me-3 size-4"
					id="hs-default-checkbox"
					checked={props.checked}
					onChange={props.onChange}
				/>
			</div>
			
		</>
	);
}
