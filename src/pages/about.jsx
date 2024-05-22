import { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/head/navbar';
import React from 'react';
import Intro from '@/components/home/aboutUs/intro';
import Faq from '../components/home/faq/faq';
import Faq2 from '../components/home/faq/faq2';
import Home from '@/layouts/home';
import Modal from '@/components/home/modal';
import styles from '@/styles/modal.module.css';

export default function About() {
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
			<Modal show={showModal} />
			<Intro />
			<Faq />
			<Footer />
		</>
	);
}