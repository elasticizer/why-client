import SummaryItem from './summaryItem';
import { PiListPlusBold } from 'react-icons/pi';
import { useCart } from '@/contexts/cart';

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
						<div className="flex flex-col items-center justify-center space-y-4 p-24">
							<p className="text-9xl">
								<PiListPlusBold />
							</p>
							<p className="text-lg font-semibold">購物車是空的，去逛逛吧！</p>
							<a
								type="button"
								href="#"
								className="py-2 px-10 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-400 text-white hover:bg-orange-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer">
								前往首頁
							</a>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
