import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import QuickGuideCard from '@/components/home/card-modules/quickGuideCard';

export default function QuickGuide() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<section
				className="my-10"
				data-aos="fade-right">
				<div className="flex course max-w-[75rem] mx-auto flex-col md:flex-row justify-center gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
					<QuickGuideCard
						title={'立即開始學習'}
						content={'讓學習成為一種生活風格 開始你的旅程，打開無限可能'}
					/>
					<QuickGuideCard
						title={'我要開課'}
						content={'加入 WhySchool 創作者的行列 用你的知識產生影響力'}
					/>
					<QuickGuideCard
						title={'查看精選作業'}
						content={'看看優秀的學員們在課堂後大放異彩！'}
					/>
				</div>
			</section>
		</>
	);
}
