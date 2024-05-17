import React from 'react';
import styles from '@/styles/banner.module.css';

import Image from 'next/image';
import BannerText from './bannertext';


export default function Banner() {
	return (
		<>
			{/* section 1廣告篇幅+所有領域 */}

			<div className="relative  ">
				<div className=" bg-top static inset-0 bg-scroll  bg-gradient-to-r from-blue-800 via-blue-500 to-black  ">
					<Image
						src="/img/course-banner-01.jpg"
						className=" opacity-50 inline-block  "
						width={2000}
						height={500}
						alt=""
					/>
				
				</div>
				<div className="absolute top-10 lg:top-20 place-content-center sm:w-full  lg:w-full mx-auto">
					<BannerText />
				</div>

			</div>
		</>
	);
}
