import React from 'react';
import Navbar from '@/components/home/navbar.jsx';
import Footer from '@/components/home/footer.jsx';

export default function MainLayout({ children }) {
	return (
		<>
			<Navbar />
			{children}
			<Footer />
		</>
	);
}
