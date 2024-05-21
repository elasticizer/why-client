import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';

export default function FaqCard({ question, children }) {
	return (
		<>
			<div
				class="hs-accordion pb-3 active"
				id="hs-basic-with-title-and-arrow-stretched-heading-one">
				<button
					class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 dark:text-neutral-200 dark:hover:text-neutral-400"
					aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
					{question}
					<IoIosArrowDown class="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" />
					<IoIosArrowUp class="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500 dark:text-neutral-400" />
				</button>
				<div
					id="hs-basic-with-title-and-arrow-stretched-collapse-one"
					class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
					aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
					<div class="text-gray-600 dark:text-neutral-400">{children}</div>
				</div>
			</div>
			{/* <div
				class="hs-accordion pb-3 active"
				id="hs-basic-with-title-and-arrow-stretched-heading-one">
				<button
					class="s-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500"
					aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one">
					{question}
					<IoIosArrowDown className="hs-accordion-active:hidden block flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500" />
					<IoIosArrowUp className="hs-accordion-active:block hidden flex-shrink-0 size-5 text-gray-600 group-hover:text-gray-500" />
				</button>
				<div
					id="hs-basic-with-title-and-arrow-stretched-collapse-one"
					class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
					aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one">
					<div class="text-gray-600 dark:text-neutral-400">{children}</div>
				</div>
			</div> */}
		</>
	);
}
