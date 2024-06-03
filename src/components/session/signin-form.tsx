import { useId, useRef, useState } from 'react';
import Modal from './modal';
import type { Nullable, Uncertain } from '@/types';
import type { ApiResponseBody } from '@/types/api';
import { sleep } from '@/utilities';
import Spinner from './spinner';
import Filler from '../filler';

export default function SigninForm() {
	const ids = {
		email: useId(),
		error: useId(),
		persistent: useId()
	};
	const [done, setDone] = useState<Uncertain<boolean>>(undefined);
	const [emailValid, setEmailValid] = useState<Nullable<boolean>>(null);

	return (
		<>
			<form
				onSubmit={async e => {
					e.preventDefault();
					(document.activeElement as Nullable<HTMLElement>)?.blur();
					setDone(null);

					const method = 'POST';
					const form = e.currentTarget;
					const body = new URLSearchParams(
						new FormData(form) as unknown as Record<string, string>
					);
					const data = await fetch('/api/auth/signin', { method, body }).then(
						r => r.json()
					);

					await sleep(1000n);

					setDone((data as ApiResponseBody<null>).done);
				}}>
				<div className="grid gap-y-4">
					<div>
						<label
							htmlFor={ids.email}
							className="block text-sm mb-2 dark:text-white">
							電子郵件地址
						</label>
						<div className="relative">
							<input
								type="email"
								name="email"
								id={ids.email}
								required
								className={`${emailValid === false
									? 'pe-10 border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:ring-red-500'
									: 'border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:focus:ring-neutral-600'
									} leading-6 py-3 px-4 block w-full rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500`}
								aria-describedby={ids.error}
								onInput={e => setEmailValid(e.currentTarget.checkValidity())}
							/>
							<div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
								<svg
									className="size-5 text-red-500"
									width={16}
									height={16}
									fill="currentColor"
									viewBox="0 0 16 16"
									aria-hidden="true">
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
								</svg>
							</div>
						</div>
						<p
							id={ids.error}
							className={`${emailValid === false ? '' : 'hidden'
								} text-xs text-red-600 mt-2`}>
							請輸入正確的電子郵件地址。
						</p>
					</div>

					<div className="flex items-center">
						<div className="flex">
							<input
								type="checkbox"
								name="persistent"
								id={ids.persistent}
								value=""
								className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
							/>
						</div>
						<div className="ms-3">
							<label
								htmlFor={ids.persistent}
								className="text-sm dark:text-white">
								保持登入狀態 28 日
							</label>
						</div>
					</div>

					<button
						type="submit"
						className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
						disabled={![emailValid].every(Boolean) || done === null}>
						使用電子郵件地址登入
					</button>
				</div>

				<Filler data={{ [ids.email]: 'felix@localhost' }} />
				{done === null && <Spinner />}
			</form>

			<Modal
				{...{ done }}
				summary={done ? '登入驗證' : '登入失敗'}
				message={
					done
						? '請前往收件匣，按照驗證信的指示登入。'
						: '電子郵件地址未被註冊，請註冊帳戶並再試一次。'
				}
			/>
		</>
	);
}
