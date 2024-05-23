import React from 'react';

export default function Tags({ children }) {
	return (
		<>
			<span className="py-1.5 px-1 mr-2 bg-orange-100 text-gray-600 border border-gray-200 text-xs sm:text-sm rounded-xl">
				{children}
			</span>
		</>
	);
}
