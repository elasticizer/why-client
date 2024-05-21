import React from 'react';
import Link from 'next/link';

export default function PrevPageBtn({ href, prev }) {
	return (
		<>
			<div className="flex items-center mb-4">
				<Link href={href}>
					<button className="flex items-center gap-1 text-md text-gray-500 hover:text-orange-500 focus:outline-none focus:text-orange-600 dark:text-neutral-500 dark:hover:text-orange-500 dark:focus:text-orange-500">
						<svg
							className="flex-shrink-0 size-4"
							xmlns="http://www.w3.org/2000/svg"
							width="24"
							height="24"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round">
							<path d="m15 18-6-6 6-6"></path>
						</svg>
						回到{prev}
					</button>
				</Link>
			</div>
		</>
	);
}
