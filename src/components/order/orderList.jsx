import React from 'react';
import OrderItem from './orderItem';
import OrderItemNone from './orderItemNone';

export default function OrderList() {
	return (
		<>
			<div>
				<div
					id="horizontal-alignment-1"
					role="tabpanel"
					aria-labelledby="horizontal-alignment-item-1">
					<OrderItemNone />
				</div>
				<div
					id="horizontal-alignment-2"
					className="hidden"
					role="tabpanel"
					aria-labelledby="horizontal-alignment-item-2">
					<OrderItem />
					<OrderItem />
				</div>
				<div
					id="horizontal-alignment-3"
					className="hidden"
					role="tabpanel"
					aria-labelledby="horizontal-alignment-item-3">
					<OrderItem />
				</div>
				<div
					id="horizontal-alignment-4"
					className="hidden"
					role="tabpanel"
					aria-labelledby="horizontal-alignment-item-4">
					<OrderItem />
				</div>
			</div>
		</>
	);
}
