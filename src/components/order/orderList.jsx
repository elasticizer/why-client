import { useState, useEffect } from 'react';
import OrderItem from './orderItem';
import OrderItemNone from './orderItemNone';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function OrderList() {
	const [orders, setOrders] = useState([]);
	const [completedOrders, setCompletedOrders] = useState([]);
	const [invalidOrders, setInvalidOrders] = useState([]);

	useEffect(() => {
		AOS.init();
	}, []);

	useEffect(() => {
		const getOrders = async () => {
			const url = '/api/transaction';
			try {
				const res = await fetch(url);
				const data = await res.json();

				const completed = data.filter(order => order[0].WhenPaid);
				const invalid = data.filter(order => !order[0].WhenPaid);

				setOrders(data);
				setCompletedOrders(completed);
				setInvalidOrders(invalid);
				console.log(data);
			} catch (e) {
				setOrders([]);
				setCompletedOrders([]);
				setInvalidOrders([]);
			}
		};
		getOrders();
	}, []);

	return (
		<>
			<div>
				<div
					data-aos="zoom-in-down"
					id="horizontal-alignment-1"
					role="tabpanel"
					aria-labelledby="horizontal-alignment-item-1">
					{orders.length === 0 ? (
						<OrderItemNone />
					) : (
						orders.map(order => (
							<OrderItem
								key={order[0].SN}
								item={order}
							/>
						))
					)}
				</div>
				<div
					data-aos="zoom-in-down"
					id="horizontal-alignment-2"
					className="hidden"
					role="tabpanel"
					aria-labelledby="horizontal-alignment-item-2">
					{completedOrders.length === 0 ? (
						<OrderItemNone />
					) : (
						completedOrders.map(order => (
							<OrderItem
								key={order[0].SN}
								item={order}
							/>
						))
					)}
				</div>
				<div
					data-aos="zoom-in-down"
					id="horizontal-alignment-3"
					className="hidden"
					role="tabpanel"
					aria-labelledby="horizontal-alignment-item-3">
					{invalidOrders.length === 0 ? (
						<OrderItemNone />
					) : (
						invalidOrders.map(order => (
							<OrderItem
								key={order[0].SN}
								item={order}
							/>
						))
					)}
				</div>
			</div>
		</>
	);
}
