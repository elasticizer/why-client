import React, { useEffect, useState } from 'react';
import styles from '@/styles/learner.module.css';
import Card from '@/components/member/learner/card';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination, Autoplay } from 'swiper/modules';


export default function Content() {
	const [data, setData] = useState([]);

	console.log(data);

	useEffect(() => {
		const handleData = async () => {
			const res = await fetch('/api/learner/').then(r => r.json()).catch(err => err);
			setData(res.results);
		};
		handleData();
	}, []);

	return (
		<div className={styles.content}>
			<div className={`${styles.textStyleTitle} ${styles.contentDiv}`}>
				正在進行的課程
			</div>
			<div className={`${styles.textStyleTitle} ${styles.contentDiv}`}>
				接下去的課程更精彩，快來完成他吧
			</div>
			<div className={`grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-4 md:gap-x-8 md:gap-y-8 md:gap-y-16 mt-10  md:hidden`}>
				{data.map((v) => {
					return (
						<Card
							key={v.SN}
							CourseSN={v.SN}
							Name={v.Name}
							Nickname={v.Nickname}
							DomainName={v.DomainName}
							Filename={v.Filename}
						/>
					);
				})}

			</div>

			<Swiper
				slidesPerView={3}
				spaceBetween={30}
				freeMode={true}
				autoplay={{ delay: 4000 }}
				pagination={{
					clickable: true,
				}}
				modules={[FreeMode, Pagination, Autoplay]}
				className="mySwiper w-full md:!flex !hidden mt-16"
			>
				{data.map((v) => {
					return (
						<SwiperSlide key={v.SN} >
							<Card
								CourseSN={v.SN}
								Name={v.Name}
								Nickname={v.Nickname}
								DomainName={v.DomainName}
								Filename={v.Filename}
							/>

						</SwiperSlide>
					);
				})}


			</Swiper>
			<Link href="/learner/myCourse">
				<button className={styles.contentButton}>查看更多</button>
			</Link>
		</div>
	);
}
