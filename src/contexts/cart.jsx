import { createContext, useContext, useState, useEffect } from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const CartContext = createContext(null);

const MySwal = withReactContent(Swal);

export function CartProvider({ children }) {
	const [cartItem, setCartItem] = useState([]);

	const addItemToCart = async course => {
		if (!cartItem.some(item => item.SN === course.SN)) {
			const fd = new FormData();

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
			const notifyAndRemove = () => {
				MySwal.fire({
					title: `<p style="font-size: 1.5rem;">${course.Name}<br />已經在購物車囉！</p>`
				});
			};
			notifyAndRemove();
		}
	};

	const removeItem = async course => {
		const fd = new FormData();

		if (course) {
			fd.append('course', course.SN);
		}

		const response = await fetch('/api/cart', {
			method: 'DELETE',
			body: new URLSearchParams(fd)
		});

		if (response.ok) {
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
			if (data) {
				setCartItem(data);
			}
		};
		fetchCartItems();
	}, []);

	const totalQty = cartItem && cartItem.reduce(acc => acc + 1, 0);
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
