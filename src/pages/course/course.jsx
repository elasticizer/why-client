import React from 'react';
import Category from '@/components/course/category';
import CardFirst from '@/components/course/cardfirst';
import CourseList from '@/components/course/courselist';
import Pages from '@/components/course/pages';
import Navbar from '@/components/Navbar/navbar';
import Banner from '@/components/course/banner';
import Hot from '@/components/course/hot';

export default function Group() {
	return (
		<>
			<Navbar />
			<Banner />
			<Category />
			<div className='bg-orange-500/25'><Hot />	</div>
					
			<div className=" py-5">
				<CourseList />
			</div>
			<div className=" flex container items-center">
				<Pages />
			</div>
		</>
	);
}
