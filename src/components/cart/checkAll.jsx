export default function CheckAll(props) {
	return (
		<>
			<div className="flex items-center p-4 border-b border-gray-300">
				<input
					type="checkbox"
					className="shrink-0 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none size-4"
					id="hs-default-checkbox"
					checked={props.checked}
					onChange={props.onChange}
				/>
				<label
					htmlFor="hs-default-checkbox"
					className="text-md text-gray-500 ms-2">
					全選
				</label>
			</div>
		</>
	);
}
