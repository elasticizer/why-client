import React, { useState } from 'react'
import Category from '../../components/category/category';
import CourseList from '../../components/card/cardseclist';
import Pages from '@/components/course/pages';
import Banner from '../../components/banner/banner';
import Home from '../../layouts/home';
import Slideshow from '../../components/slideShow/slideshow';


export default function Course() {

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
