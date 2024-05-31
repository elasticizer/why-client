import SignupForm from '@/components/session/signup-form';
import { useSession } from '@/contexts/session';
import SessionLayout from '@/layouts/session';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Signup() {
	const router = useRouter();
	const session = useSession();

	if (session) {
		router.replace('/');
	}

	return (
		<>
			<Head>
				<title>註冊</title>
			</Head>

			<SessionLayout>
				<div className="relative bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
					<div className="p-4 sm:p-8">
						<div className="text-center">
							<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
								註冊
							</h1>
							<p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
								已有帳戶？
								<Link
									href="signin"
									className="text-blue-600 decoration-2 hover:underline font-medium dark:text-blue-500">
									前往登入
								</Link>
							</p>
						</div>

						<div className="flex flex-col gap-3 mt-5">
							<SignupForm />
						</div>
					</div>
				</div>
			</SessionLayout>
		</>
	);
}
