import React from 'react';
import { CartProvider } from '@/contexts/cart';
import { CouponProvider } from '../contexts/coupon';

export default function CartLayout({ children }) {
	return (
		<CartProvider>
			<CouponProvider>
				{children}
			</CouponProvider>
		</CartProvider>
	);
}
