export default function SummaryItem({ domainName, name, price }) {
	return (
		<>
			<div className="flex flex-row justify-between items-start gap-2 py-4">
				<div className="flex items-center gap-3">
					<span className="inline-flex items-center py-0.5 px-1 rounded-md border border-yellow-400 text-sm font-bold bg-yellow-100 text-yellow-800 text-nowrap">
						{domainName}
					</span>
					<p className="font-semibold tracking-wide">{name} </p>
				</div>
				<div>
					<p className="font-semibold text-lg tracking-wider">NT${price}</p>
				</div>
			</div>
		</>
	);
}
