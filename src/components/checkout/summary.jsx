import { useState, useEffect } from 'react';
import SummaryItem from './summaryItem';
import { useCart } from '@/hooks/useCart';

export default function Summary() {
	const { cartItem } = useCart();

	return (
		<>
			<div className="border border-gray-300 rounded-lg px-4 pt-4 mb-4">
				<div className="flex pb-4 border-b border-gray-300">
					<div className="flex items-center gap-x-3">
						<p className="text-xl">購買明細</p>
						<p className="text-sm">總共{cartItem.length}件</p>
					</div>
				</div>
				<div className="grid grid-cols-1 divide-y">
					{cartItem.length > 0 ? (
						cartItem.map(item => (
							<SummaryItem
								key={item.SN}
								name={item.Name}
								domainName={item.DomainName}
								price={item.Price}
							/>
						))
					) : (
						<p>購物車是空的</p>
					)}
				</div>
			</div>
		</>
	);
}
