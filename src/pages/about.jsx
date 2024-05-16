import Image from 'next/image';
import Navbar from '@/components/head/navbar';
import React from 'react';
import Intro from '@/components/aboutUs/intro';
import Faq from '../components/faq/faq';
import Footer from '@/components/head/footer';

export default function About() {
	return (
		<>
			<Navbar />
			<Intro />
			<Faq />
			<Footer />
		</>
	);
}
