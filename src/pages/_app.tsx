import '@/styles/globals.css';

import { SessionProvider } from '@/contexts/session';
import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, type EffectCallback } from 'react';

type EffectProps = {
	callback: EffectCallback;
};

const Effect = ({ callback }: EffectProps) => (
	useEffect(callback, [callback]), null
);

export default function App({ Component, pageProps }: AppProps) {
	const pathname = usePathname();
	const callback = useCallback(
		() =>
			void import('preline/preline').then(module =>
				module.HSStaticMethods.autoInit()
			),
		[pathname]
	);

	return (
		<>
			<SessionProvider>
				<Component {...pageProps} />
			</SessionProvider>
			<Effect {...{ callback }} />
		</>
	);
}
