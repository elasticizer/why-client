import React from 'react';

export default function QuickGuideCard({ title, content }) {
	return (
		<>
			<div class="flex flex-1 flex-col bg-transparent border border-t-4 border-t-orange-600 shadow-sm rounded-2xl hover:shadow-lg transition">
				<div class=" p-4 md:p-5 hover:transition-transform duration-500 ease-in-out">
					<h3 class="text-lg font-bold">{title}</h3>
					<p class="mt-2">{content}</p>
					<a
						class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-sky-500 hover:text-sky-600 disabled:opacity-50 disabled:pointer-events-none"
						href="#">
						立即前往
						<svg
							class="flex-shrink-0 size-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<path d="m9 18 6-6-6-6"></path>
						</svg>
					</a>
				</div>
			</div>
		</>
	);
}
