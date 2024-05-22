import SessionLayout from '@/layouts/session';
import type { ApiResponseBody } from '@/types/api';
import { sleep } from '@/utilities';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Index() {
	const router = useRouter();
	const [done, setDone] = useState(false);

	useEffect(
		() => void fetch('/api/auth/signout', { method: 'POST' })
			.then(r => sleep(1000n, r))
			.then(r => r.json())
			.then(({ done }: ApiResponseBody<{}>) => setDone(done))
			.then(() => sleep(1000n))
			.then(() => router.replace('/')),
		[]
	);

	return (
		<SessionLayout>
			<div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
				<div className="p-4 md:p-10">
					<h3 className="text-lg font-bold text-gray-800 dark:text-white">
						{done ? '您已經登出' : '您正在登出'}
					</h3>

					<p className="mt-2 text-gray-500 dark:text-neutral-400">
						{done ? '正在將您導向至首頁。' : '請稍後。'}
					</p>
				</div>
			</div>
		</SessionLayout>
	);
}
