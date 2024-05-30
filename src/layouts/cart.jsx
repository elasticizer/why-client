import React from 'react';
import Navbar from '@/components/home/navbar.jsx';
import Footer from '@/components/home/footer.jsx';
import { CartProvider } from '@/contexts/cart';
import { CouponProvider } from '../contexts/coupon';
import 'animate.css';

export default function CartLayout({ children }) {
	return (
		<CartProvider>
			<CouponProvider>
				<Navbar />
				<div className=' animate__animated animate__fadeInLeft'>{children}</div>
				<Footer />
			</CouponProvider>
		</CartProvider>
	);
}
