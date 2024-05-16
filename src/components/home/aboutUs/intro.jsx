import React from 'react';
import Image from 'next/image';

export default function Intro() {
	return (
		<>
			<section>
				<div className="course max-w-[75rem] mx-auto flex justify-center flex-col px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
					<div className="flex mb-10">
						<Image
							src="/image/why-question.jpeg"
							width={1200}
							height={100}
						/>
					</div>
					<div className="flex flex-col">
						<h1 className="mb-5 text-center text-xl text-gray-600 sm:text-4xl">
							關於我們
						</h1>
						<div className="flex justify-center">
							<p className="text-center text-lg max-w-[50rem]">
								讓每個有意追求理想生活的人，都有機會透過持續探索、分享學習，創造更多選擇與可能性，學有所成，成為理想的自己。讓我們以學習賦能，自定義自我價值。
							</p>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
