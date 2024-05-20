import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/home/navbar';
import Slideshow from '@/components/home/slideshow';
import Slideshow2 from '@/components/home/slideshow2';
import Course from '@/components/home/course';
import Article from '@/components/home/article';
import Rating from '@/components/home/rating';
import Footer from '@/components/home/footer';
import Card from '@/components/home/card';
import Slogan from '@/components/home/slogan';
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
			<Modal
				show={showModal}
				onClose={toggleModal}
			/>
			<Slideshow />
			<Course />
			<QuickGuide />
			{/* <Card /> */}
			<Article />
			<Rating />
		</Home>
	);
}
