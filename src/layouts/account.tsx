import Header from '@/components/account/header';
import Sidebar from '@/components/account/sidebar';
import type { Progenitive } from '@/types/react';
import { useId } from 'react';

export default function AccountLayout({ children }: Progenitive) {
	const sidebar = useId();

	return (
		<>
			<Header />
			<Sidebar id={sidebar} />
			<div className="w-full lg:ps-64">
				<div className="p-4 sm:p-6 space-y-4 sm:space-y-6">
					{children}
				</div>
			</div>
		</>
	);
}
