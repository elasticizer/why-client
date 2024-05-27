import '@/styles/globals.css';
import { AuthProvider } from '@/hooks/use-auth';
import ArtSideBar from '@/components/art/ArtSideBar';
import { Toaster } from 'react-hot-toast';
import type { AppProps } from 'next/app';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }: AppProps) {
	const path = usePathname();
	const router = useRouter();
	const isArt = router.pathname.includes('/art');
	useEffect(
		() =>
			void import('preline/preline').then(module =>
				module.HSStaticMethods.autoInit()
			),
		[path]
	);

	return (
		<AuthProvider>
			{isArt && <ArtSideBar></ArtSideBar>}
			<Component {...pageProps} />
			<Toaster />
		</AuthProvider>
	);
}
