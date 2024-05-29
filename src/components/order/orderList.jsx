import { useState, useEffect } from 'react';
import OrderItem from './orderItem';
import OrderItemNone from './orderItemNone';

export default function OrderList() {
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const getOrder = async () => {
			const url = '/api/transaction';
			try {
				const res = await fetch(url);
				const data = await res.json();
				setOrders(data);
			} catch (e) {
				setOrders([]);
			}
		};
		getOrder();
	}, []);

	// // 合併訂單依 SN 的函式
	// const mergeOrdersBySN = data => {
	// 	const mergedOrders = {};
	// 	data.forEach(obj => {
	// 		const sn = obj.SN;
	// 		if (!mergedOrders[sn]) {
	// 			mergedOrders[sn] = obj; // 為 SN 建立新條目
	// 		} else {
	// 			// 將現有資料與當前物件合併 (自訂邏輯在此)
	// 			mergedOrders[sn] = {
	// 				SN: sn,
					
	// 				amount: mergedOrders[sn].amount + obj.amount 
	// 				// ...
	// 			};
	// 		}
	// 	});
	// 	return Object.values(mergedOrders); // 轉換回陣列
	// };

	orders.forEach(obj => {
		console.log(obj);
		const name = obj[0].Name;
		const amount = obj[0].Amount;
		const sn = obj[0].SN;
		console.log('SN:', sn);
		console.log('Name:', name);
		console.log('Amount:', amount);
	});

	return (
		<>
			<div>
				<div
					id="horizontal-alignment-1"
					role="tabpanel"
					aria-labelledby="horizontal-alignment-item-1">
					{orders.length === 0 ? (
						<OrderItemNone />
					) : (
						orders.map(order => {
							return order.map(item => (
								<OrderItem
									key={item.SN}
									item={item}
								/>
							));
						})
					)}
				</div>
				<div
					id="horizontal-alignment-2"
					className="hidden"
					role="tabpanel"
					aria-labelledby="horizontal-alignment-item-2">
					{orders.length === 0 ? (
						<OrderItemNone />
					) : (
						orders.map(order => {
							return order.map(item => (
								<OrderItem
									key={item.SN}
									item={item}
								/>
							));
						})
					)}
				</div>
				<div
					id="horizontal-alignment-3"
					className="hidden"
					role="tabpanel"
					aria-labelledby="horizontal-alignment-item-3">
					{/* <OrderItem /> */}
				</div>
			</div>
		</>
	);
}
