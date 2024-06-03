import '@/styles/globals.css';

import { SessionProvider } from '@/contexts/session';
import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';
import NextTopLoader from 'nextjs-toploader';
import { useEffect } from 'react';

export default function App({ Component, pageProps }: AppProps) {
	const pathname = usePathname();

	useEffect(
		() =>
			void import('preline/preline').then(module =>
				module.HSStaticMethods.autoInit()
			),
		[pathname]
	);

	return (
		<SessionProvider>
			<NextTopLoader color="#ff9f0f" height={4} />
			<Component {...pageProps} />
		</SessionProvider>
	);
}
