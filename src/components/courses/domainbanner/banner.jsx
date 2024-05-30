import { useEffect } from 'react';
import styles from '@/styles/banner.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import BannerText from './bannertext';
import Video from '../detailbanvideo/video';


export default function Banner() {
	useEffect(() => { AOS.init(); }
		, []);
	return (
		<>
			<div className="relative  ">
				<div className=" bg-top static inset-0 bg-scroll  bg-gradient-to-r from-blue-800 via-blue-500 to-black  ">
				
					<Image
						src="/img/course-banner-01.jpg"
						className=" opacity-50 inline-block  "
						width={2000}
						height={600}
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
