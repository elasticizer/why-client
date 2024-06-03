import React from 'react';
import Card from '../card/card';

export default function Slide({ data }) {
	return (
		<div className="hs-carousel-slide pt-5 lg:py-5">
			<div className="inline-flex  justify-center gap-3 h-full w-full ">
				<span className="w-full lg:w-[575px]">
					<Card data={data[0]} />
				</span>
				{data[1] && (
					<span className="hidden lg:block lg:w-[575px]">
						<Card data={data[1]} />
					</span>
				)}
			</div>
		</div>
	);
}
