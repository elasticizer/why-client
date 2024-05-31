import SessionLayout from '@/layouts/session';
import type { Undefinable } from '@/types';
import type { ApiResponseBody } from '@/types/api';
import { sleep } from '@/utilities';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';

export default function Challenge() {
	const firstRendering = useRef(true);
	const router = useRouter();
	const [done, setDone] = useState<Undefinable<boolean>>(undefined);

	useEffect(
		() =>
			firstRendering.current
				? void (firstRendering.current = false)
				: void sleep(1000n)
						.then(() => fetch(`/api/auth/signin/challenge${location.search}`))
						.then(r => r.json())
						.then(({ done }: ApiResponseBody<{}>) => setDone(done))
						.then(() => sleep(1000n))
						.then(() => router.replace('/')),
		[]
	);

	return (
		<>
			<Head>
				<title>登入驗證</title>
			</Head>

			<SessionLayout>
				<div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:shadow-neutral-700/70">
					<div className="p-4 md:p-10">
						<h3 className="text-lg font-bold text-gray-800 dark:text-white">
							{done === void 0 ? '登入中' : done ? '登入成功' : '登入失敗'}
						</h3>

						<p className="mt-2 text-gray-500 dark:text-neutral-400">
							{done === void 0
								? '請稍後'
								: done
								? '正在將您導向至首頁'
								: '請再試一次'}
							。
						</p>
					</div>
				</div>
			</SessionLayout>
		</>
	);
}
