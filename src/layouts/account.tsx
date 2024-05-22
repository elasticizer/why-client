import Header from '@/components/account/header';
import Sidebar from '@/components/account/sidebar';
import type { Progenitive } from '@/types';
import { useId } from 'react';

export default function AccountLayout({ children }: Progenitive) {
	const sidebar = useId();

	return (
		<>
			<Header />
			<Sidebar id={sidebar} />
			{children}
		</>
	);
}
