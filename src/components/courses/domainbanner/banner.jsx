import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import BannerText from './bannertext';

export default function Banner() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<div className="relative">
				<div className="absolute inset-0 bg-top bg-scroll bg-gradient-to-r from-blue-800 via-blue-500 to-black -z-10">
					<img
						src="/images/course-banner-01.jpg"
						className="opacity-50 inline-block object-cover w-full h-full"
						alt=""
					/>
				</div>
				<div className="place-content-center sm:w-full lg:w-full mx-auto">
					<BannerText />
				</div>
			</div>
		</>
	);
}
