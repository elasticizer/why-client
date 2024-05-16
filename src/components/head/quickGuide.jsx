import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function QuickGuide() {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<section
				className="my-10"
				data-aos="fade-right">
				<div className="course max-w-[75rem] mx-auto flex justify-center gap-10 px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
					<div
						class="w-250 flex flex-col bg-transparent border border-t-4 border-t-orange-600 shadow-sm rounded-2xl hover:shadow-lg transition"
						style={{ width: '18.75rem' }}>
						<div class="p-4 md:p-5 hover:scale-105 transition-transform duration-500 ease-in-out">
							<h3 class="text-lg font-bold">立即開始學習</h3>
							<p class="mt-2">
								讓學習成為一種生活風格 開始你的旅程，打開無限可能
							</p>
							<a
								class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-sky-500 hover:text-sky-600 disabled:opacity-50 disabled:pointer-events-none"
								href="#">
								立即前往
								<svg
									class="flex-shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round">
									<path d="m9 18 6-6-6-6"></path>
								</svg>
							</a>
						</div>
					</div>
					<div
						class="w-250 flex flex-col bg-transparent border border-t-4 border-t-orange-600 shadow-sm rounded-2xl hover:shadow-lg transition"
						style={{ width: '18.75rem' }}>
						<div class="p-4 md:p-5 hover:scale-105 transition-transform duration-500 ease-in-out">
							<h3 class="text-lg font-bold">我要開課</h3>
							<p class="mt-2">
								加入 WhySchool 創作者的行列 用你的知識產生影響力
							</p>
							<a
								class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-sky-500 hover:text-sky-600 disabled:opacity-50 disabled:pointer-events-none"
								href="#">
								立即前往
								<svg
									class="flex-shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round">
									<path d="m9 18 6-6-6-6"></path>
								</svg>
							</a>
						</div>
					</div>
					<div
						class="w-250 flex flex-col bg-transparent border border-t-4 border-t-orange-600 shadow-sm rounded-2xl hover:shadow-lg transition"
						style={{ width: '18.75rem' }}>
						<div class="p-4 md:p-5 hover:scale-105 transition-transform duration-500 ease-in-out">
							<h3 class="text-lg font-bold">查看精選作業</h3>
							<p class="mt-2">看看優秀的學員們在課堂後大放異彩！</p>
							<a
								class="mt-3 inline-flex items-center gap-x-1 text-sm font-semibold rounded-lg border border-transparent text-sky-500 hover:text-sky-600 disabled:opacity-50 disabled:pointer-events-none"
								href="#">
								立即前往
								<svg
									class="flex-shrink-0 size-4"
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round">
									<path d="m9 18 6-6-6-6"></path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
