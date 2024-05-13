import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const pathname = usePathname();

	useEffect(
		() => void import('preline/preline')
			.then(module => module.HSStaticMethods.autoInit()),
		[pathname]
	);

	return <Component {...pageProps} />;
}
