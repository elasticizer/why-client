import { useId, useRef, useState } from 'react';
import Modal from './Modal';
import type { Nullable } from '@/types';

export default function SigninForm() {
	const modal = useRef(null);
	const emailField = useId();
	const persistent = useId();
	const [emailValid, setEmailValid] = useState<Nullable<boolean>>(null);

	return (
		<>
			<form onSubmit={async (e) => {
				e.preventDefault();

				const form = e.currentTarget;
				const method = 'POST';
				const body = new URLSearchParams(new FormData(form) as unknown as Record<string, string>);
				const data = await fetch('/api/auth/signin', { method, body }).then(r => r.json());

				alert(data.done && '請前往收件匣收取驗證信，並按照指示登入。');
			}}>
				<div className="grid gap-y-4">
					<div>
						<label
							htmlFor={emailField}
							className="block text-sm mb-2 dark:text-white"
						>
							電子郵件地址
						</label>
						<div className="relative">
							<input
								type="email"
								name="email"
								required
								id={emailField}
								className={`${emailValid === false ? 'pe-10 border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:ring-red-500' : 'border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:focus:ring-neutral-600'} leading-6 py-3 px-4 block w-full rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500`}
								aria-describedby="email-error"
								onInput={e => setEmailValid(e.currentTarget.checkValidity())}
							/>
							<div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
								<svg
									className="size-5 text-red-500"
									width={16}
									height={16}
									fill="currentColor"
									viewBox="0 0 16 16"
									aria-hidden="true"
								>
									<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
								</svg>
							</div>
						</div>
						<p className={`${emailValid === false ? '' : 'hidden'} text-xs text-red-600 mt-2`} id="email-error">
							請提供正確的電子郵件地址。
						</p>
					</div>

					<div className="flex items-center">
						<div className="flex">
							<input
								type="checkbox"
								name="remember-me"
								value=""
								id={persistent}
								className="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
							/>
						</div>
						<div className="ms-3">
							<label htmlFor={persistent} className="text-sm dark:text-white">
								保持登入狀態 28 日
							</label>
						</div>
					</div>

					<button
						type="submit"
						className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
						disabled={![emailValid].every(Boolean)}
					>
						使用電子郵件地址登入
					</button>
				</div>
			</form>

			{/* <Modal
				ref={modal}
				summary="驗證信"
				message="請前往收件匣收取驗證信，並按照指示登入。" /> */}
		</>
	);
}
