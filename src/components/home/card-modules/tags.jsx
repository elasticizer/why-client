import React from 'react';

export default function Tags({ children }) {
	return (
		<>
			<span class="py-1.5 px-3 mr-2 bg-orange-100 text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
				{children}
			</span>
		</>
	);
}
