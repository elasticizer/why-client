import { createContext, useContext, useState } from 'react';

const CouponContext = createContext();

export function CouponProvider({ children }) {
	const [selectedCoupon, setSelectedCoupon] = useState(null);

	return (
		<CouponContext.Provider value={{ selectedCoupon, setSelectedCoupon }}>
			{children}
		</CouponContext.Provider>
	);
}

export const useCoupon = () => useContext(CouponContext);
