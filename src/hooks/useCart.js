import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext(null);

export function CartProvider({ children }) {
	const [cartItem, setCartItem] = useState([]);
	const [currentItem, setCurrentItem] = useState([]);

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
			// console.log(course);
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

	useEffect(() => {
		const fetchCartItems = async () => {
			const res = await fetch('/api/cart', {
				method: 'GET'
			});
			const data = await res.json();
			// console.log(data);
			if (data) {
				setCartItem(data);
			}
		};
		fetchCartItems();
	}, []);
	console.log(cartItem);

	const totalQty = cartItem.reduce((acc, v) => acc + 1, 0);
	const totalPrice = cartItem.reduce((acc, v) => acc + 1 * v.Price, 0);
	
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
