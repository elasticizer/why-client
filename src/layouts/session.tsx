import { Progenitive } from '@/types';

export default function SessionLayout({ children }: Progenitive) {
	return (
		<div className="bg-gray-100 flex h-screen items-center py-16 dark:bg-neutral-800">
			<main className="w-full max-w-md mx-auto p-4">
				{children}
			</main>
		</div>
	);
}
