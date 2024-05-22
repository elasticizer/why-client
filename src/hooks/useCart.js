import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
	const [cartItem, setCartItem] = useState([]);

	const addItemToCart = course => {
		if (!cartItem.some(item => item.SN === course.SN)) {
			const newItem = { ...course, qty: 1 };
			const nextItem = [newItem, ...cartItem];
			setCartItem(nextItem);
		} else {
			alert(`${course.Name} 已經在購物車`);
		}
	};

	const removeItem = id => {
		const nextItems = cartItem.filter(item => item.SN !== id);
		setCartItem(nextItems);
	};

	const totalQty = cartItem.reduce((acc, v) => acc + v.qty, 0);
	const totalPrice = cartItem.reduce((acc, v) => acc + v.qty * v.Price, 0);

	return (
		<CartContext.Provider
			value={{
				cartItem,
				setCartItem,
				addItemToCart,
				removeItem,
				totalQty,
				totalPrice
			}}>
			{children}
		</CartContext.Provider>
	);
}

export const useCart = () => useContext(CartContext);
