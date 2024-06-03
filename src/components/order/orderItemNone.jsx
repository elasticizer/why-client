import { PiListPlusBold } from 'react-icons/pi';
import Link from 'next/link';
export default function OrderItemNone() {
	return (
		<>
			<div className="flex flex-col items-center justify-center space-y-4 p-36">
				<p className="text-9xl ">
					<PiListPlusBold />
				</p>
				<p>尚未有訂單</p>
				<Link href={'/'}>
					<p className="py-2 px-10 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-orange-400 text-white hover:bg-orange-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer">
						前往首頁
					</p>
				</Link>
			</div>
		</>
	);
}
