import { useId, useState } from 'react';
import Modal from './modal';
import type { Nullable, Uncertain } from '@/types';
import type { ApiResponseBody } from '@/types/api';
import Filler from '../filler';
import Spinner from './spinner';
import { sleep } from '@/utilities';

export default function SigninForm() {
	const ids = {
		firstName: useId(),
		lastName: useId(),
		email: useId(),
		error: useId(),
		persistent: useId(),
		modal: 'hs-vertically-centered-modal'
	};
	const [done, setDone] = useState<Uncertain<boolean>>(undefined);
	const [firstNameValid, setFirstNameValid] = useState<Nullable<boolean>>(null);
	const [lastNameValid, setLastNameValid] = useState<Nullable<boolean>>(null);
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
					const data = await fetch('/api/auth/signup', { method, body }).then(
						r => r.json()
					);

					await sleep(1000n);

					setDone((data as ApiResponseBody<null>).done);
					import('preline/preline').then(module =>
						module.HSOverlay.open(
							document.getElementById(ids.modal) as HTMLElement
						)
					);
				}}>
				<div className="grid gap-y-4">
					<div className="flex gap-4">
						<div className="sm:flex rounded-lg shadow-sm">
							<label
								htmlFor={ids.firstName}
								className="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
								名字
							</label>
							<input
								type="text"
								name="first_name"
								id={ids.firstName}
								required
								className={`${
									firstNameValid === false
										? 'pe-10 border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:ring-red-500'
										: 'border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:focus:ring-neutral-600'
								} py-3 px-4 pe-11 block w-full shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500`}
								onInput={e =>
									setFirstNameValid(e.currentTarget.checkValidity())
								}
							/>
						</div>

						<div className="sm:flex rounded-lg shadow-sm">
							<label
								htmlFor={ids.lastName}
								className="py-3 px-4 inline-flex items-center min-w-fit w-full border border-gray-200 bg-gray-50 text-sm text-gray-500 -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:w-auto sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg dark:bg-neutral-700 dark:border-neutral-700 dark:text-neutral-400">
								姓氏
							</label>
							<input
								type="text"
								name="last_name"
								id={ids.lastName}
								required
								className={`${
									lastNameValid === false
										? 'pe-10 border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:ring-red-500'
										: 'border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:focus:ring-neutral-600'
								} py-3 px-4 pe-11 block w-full shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500`}
								onInput={e => setLastNameValid(e.currentTarget.checkValidity())}
							/>
						</div>
					</div>

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
								className={`${
									emailValid === false
										? 'pe-10 border-red-500 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:focus:ring-red-500'
										: 'border-gray-200 focus:border-blue-500 focus:ring-blue-500 dark:border-neutral-700 dark:focus:ring-neutral-600'
								} leading-6 py-3 px-4 block w-full rounded-lg text-sm disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500`}
								aria-describedby={ids.error}
								onInput={e => setEmailValid(e.currentTarget.checkValidity())}
							/>
							<div
								className={`${
									emailValid === false ? '' : 'hidden'
								} flex items-center absolute inset-y-0 end-0 pointer-events-none pe-3`}>
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
							className={`${
								emailValid === false ? '' : 'hidden'
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
						disabled={
							![firstNameValid, lastNameValid, emailValid].every(Boolean)
						}>
						使用電子郵件地址註冊
					</button>
				</div>

				<Filler
					data={{
						[ids.firstName]: 'Felix',
						[ids.lastName]: 'Chang',
						[ids.email]: 'felix@localhost'
					}}
				/>
				{done === null && <Spinner />}
			</form>

			<Modal
				{...{ done }}
				summary={done ? '註冊成功' : '註冊失敗'}
				message={
					done
						? '請前往收件匣，按照驗證信的指示登入。'
						: '電子郵件地址已被註冊，請檢查資訊並再試一次。'
				}
			/>
		</>
	);
}
