import { useState } from 'react';
import Image from 'next/image';
import Slideshow from '@/components/home/slideshow';
import Course from '@/components/home/course';
import Article from '@/components/home/article';
import Rating from '@/components/home/rating';
import QuickGuide from '@/components/home/quickGuide';
import Home from '@/layouts/home';
import Modal from '@/components/home/modal';
import styles from '@/styles/modal.module.css';

export default function Index() {
	const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		setShowModal(!showModal);
	};
	return (
		<Home>
			<title>WhyAcademy</title>
			<button
				className={styles.floatingButton}
				onClick={toggleModal}>
				<Image
					className={styles.floatingIcon}
					src="/image/why_icon.png"
					width={50}
					height={50}
					alt="按鈕圖片"
				/>
			</button>
			<Modal show={showModal} />
			<Slideshow />
			<Course />
			<QuickGuide />
			<Article />
			<Rating />
		</Home>
	);
}
