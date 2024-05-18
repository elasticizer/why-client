import React from 'react';
import CourseList from '@/components/cart/courseList';
import Summary from '@/components/cart/summary';
import PrevPageBtn from './prevPageBtn';

export default function Cart() {
	return (
		<>
			<div className="container mt-8 max-w-[85rem] sm:px-6 lg:px-8 mx-auto my-8">
				<PrevPageBtn />
				<div className="grid lg:grid-cols-4 gap-y-8 lg:gap-y-0 lg:gap-x-6">
					<div className="lg:col-span-3">
						<CourseList />
					</div>
					<div className="lg:col-span-1 lg:w-full lg:h-fit lg:via-transparent lg:to-transparent dark:from-neutral-800 border border-gray-300 rounded-lg">
						<Summary />
					</div>
				</div>
			</div>
		</>
	);
}
