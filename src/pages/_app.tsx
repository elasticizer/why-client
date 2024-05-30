import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { SessionProvider } from '@/contexts/session';

export default function App({ Component, pageProps }: AppProps) {
	const path = usePathname();

	useEffect(
		() => void import('preline/preline')
			.then(module => module.HSStaticMethods.autoInit()),
		[path]
	);

	return (
		<SessionProvider>
			<Component {...pageProps} />
		</SessionProvider>
	);
}
