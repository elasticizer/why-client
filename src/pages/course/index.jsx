import React, { useState } from 'react'
import Category from '../../components/courses/category/category';
import CourseList from '../../components/courses/card/cardseclist';
import Pages from '../../components/courses/Pagination/pages';
import Banner from '../../components/courses/domainbanner/banner';
import Home from '../../layouts/home';
import Slideshow from '../../components/courses/slideShow/slideshow';



export default function Course() {


	return (
		<Home>

			<Banner />
			<Slideshow />
			<div className="bg-[#fdf9f7]">
				<Category />
				<div className=" flex container justify-center">
					<Pages />
				</div>
			</div>
		</Home>
	);
}
