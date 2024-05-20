import React from 'react';
import Image from 'next/image';

export default function RatingCard({ title, content, image }) {
	return (
		<>
			<a
				class="group block rounded-xl"
				href="#">
				<img
					class="w-full h-auto rounded-t-xl"
					width={100}
					height={100}
					src={image}
					alt="Image Description"
				/>
				<div class="p-4 md:p-5">
					<h3 class="text-lg font-bold text-gray-800 dark:text-white">
						{title}
					</h3>
					<p class="mt-1 text-gray-500 dark:text-neutral-400">{''}</p>
				</div>
				<h3 class="mt-2 text-lg font-medium text-gray-800 group-hover:text-blue-600 dark:text-neutral-300 dark:group-hover:text-white">
					{title}
				</h3>
				<p class="mt-2 text-sm text-gray-600 dark:text-neutral-400">
					{content}
				</p>
			</a>
		</>
	);
}
