import React from 'react';
import Category from '@/components/course/category';
import CardFirst from '../../components/card/cardfirst';
import CourseList from '../../components/card/courselist';

import Pages from '@/components/course/pages';

import Banner from '@/components/course/banner';
import Home from '../../layouts/home';
import Slideshow from '../../components/slideShow/slideshow';


export default function Group() {
	return (
		<>
			<Home>

				<Banner />
				<Slideshow />
				<div className="bg-[#fdf9f7]">
					<Category />
					<div className=" py-5">
						<CourseList />
					</div>
					<div className=" flex container items-center">
						<Pages />
					</div>
				</div>
			</Home>
		</>
	);
}
