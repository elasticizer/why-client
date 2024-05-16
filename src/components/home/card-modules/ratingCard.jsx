import React from 'react';
import Image from 'next/image';

export default function RatingCard({ title, content }) {
	return (
		<>
			<a
				class="group block rounded-xl"
				href="#">
				<div class="aspect-w-16 aspect-h-9">
					<Image
						class="w-full object-cover rounded-xl"
						width={100}
						height={100}
						src="/image/course.jpg"
						alt={title}
					/>
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
