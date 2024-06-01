import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import QuickGuideCard from '@/components/home/card-modules/quickGuideCard';
import WaveBackground from './waveBackground';
import { useSession } from '@/contexts/session';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export default function QuickGuide() {
	const session = useSession();
	const MySwal = withReactContent(Swal);

	useEffect(() => {
		AOS.init();
	}, []);

	const handleTeacherLink = () => {
		if (!session) {
			MySwal.fire({
				icon: 'error',
				text: '請先登入'
			});
		} else {
			window.location.href = '/teacher';
		}
	};

	const handleCourseLink = () => {
		window.location.href = '/course';
	};
	return (
		<>
			<section data-aos="fade-right">
				<div className="flex course max-w-[75rem] mx-auto flex-col md:flex-row justify-center gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
					<QuickGuideCard
						title={'立即開始學習'}
						content={'讓學習成為一種生活風格 開始你的旅程，打開無限可能'}
						onclick={handleCourseLink}
					/>
					<QuickGuideCard
						title={'我要開課'}
						content={'加入 WhySchool 創作者的行列 用你的知識產生影響力'}
						onclick={handleTeacherLink}
					/>
					<QuickGuideCard
						title={'查看精選作業'}
						content={'透過作品追蹤學習成效，看看優秀的學員們在課堂後大放異彩！'}
					/>
				</div>
				<WaveBackground />
			</section>
		</>
	);
}
