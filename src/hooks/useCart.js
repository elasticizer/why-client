import { createContext, useContext, useState } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
	const [cartItem, setCartItem] = useState([]);

	const addItemToCart = async course => {
		if (!cartItem.some(item => item.SN === course.SN)) {
			const fd = new FormData();

			fd.append('user', 1);
			fd.append('course', course.SN);

			const data = await fetch('/api/cart', {
				method: 'POST',
				body: new URLSearchParams(fd)
			}).then(r => r.json());

			if (!data.done) {
				return;
			}

			const newItem = { ...course, qty: 1 };
			const nextItem = [newItem, ...cartItem];

			setCartItem(nextItem);
		} else {
			alert(`${course.Name} 已經在購物車`);
		}
	};

	const removeItem = async course => {
		const fd = new FormData();

		fd.append('user', 1);

		if (course) {
			fd.append('course', course.SN);
			console.log(course);
		}

		const data = await fetch('/api/cart', {
			method: 'DELETE',
			body: new URLSearchParams(fd)
		});

		if (data.done) {
			const nextItems = cartItem.filter(item => item.SN !== course.SN);
			setCartItem(nextItems);
		}
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
