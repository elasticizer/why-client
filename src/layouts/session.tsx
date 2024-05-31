import { Progenitive } from '@/types/react';

export default function SessionLayout({ children }: Progenitive) {
	const backgroundImage =
		'url(https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=1920)';

	return (
		<div
			className="bg-gray-100 flex h-screen items-center py-16 dark:bg-neutral-800"
			style={{ backgroundImage }}>
			<main className="w-full max-w-md mx-auto p-4">{children}</main>
		</div>
	);
}
