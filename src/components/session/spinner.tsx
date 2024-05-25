export default function Spinner() {
	return (
		<>
			<div className="absolute top-0 start-0 size-full bg-white/50 rounded-lg dark:bg-neutral-800/40" />
			<div className="absolute top-1/2 start-1/2 transform -translate-x-1/2 -translate-y-1/2">
				<div
					className="animate-spin inline-block size-16 border-[8px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
					role="status"
					aria-label="loading">
					<span className="sr-only">Loading...</span>
				</div>
			</div>
		</>
	);
}
