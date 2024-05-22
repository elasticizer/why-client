import Break from '@/components/account/break';
import Google from '@/components/account/oauth/google';
import Line from '@/components/account/oauth/line';
import SigninForm from '@/components/session/SigninForm';
import { useSession } from '@/contexts/session';
import SessionLayout from '@/layouts/session';
import { useRouter } from 'next/router';

export default function Index() {
	const router = useRouter();
	const session = useSession();

	if (session) {
		router.replace('/');
	}

	return (
		<SessionLayout>
			<div className="bg-white border border-gray-200 rounded-xl shadow-sm dark:bg-neutral-900 dark:border-neutral-700">
				<div className="p-4 sm:p-8">
					<div className="text-center">
						<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
							登入
						</h1>
					</div>

					<div className="flex flex-col gap-3 mt-5">
						<Google />
						<Line />
						<Break>或</Break>
						<SigninForm />
					</div>
				</div>
			</div>
		</SessionLayout>
	);
}
