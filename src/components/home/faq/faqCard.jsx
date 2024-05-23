import React, { useId } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

export default function FaqCard({ question, children }) {
	const headingId = useId();
	const contentId = useId();

	return (
		<>
			<div
				class="hs-accordion pt-6 pb-3"
				id={headingId}>
				<button
					class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
					aria-controls={contentId}>
					{question}
					<IoIosArrowDown class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" />
					<IoIosArrowUp class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" />
				</button>
				<div
					id={contentId}
					class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
					aria-labelledby={headingId}>
					<div class="text-gray-600 dark:text-neutral-400">{children}</div>
				</div>
			</div>
		</>
	);
}
