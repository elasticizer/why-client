import Breadcrumb from '@/components/account/breadcrumb';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FaShieldHalved, FaCircleUser } from 'react-icons/fa6';

type SidebarProps = {
	id: string;
};

export default function Sidebar({ id }: SidebarProps) {
	const pathname = usePathname();

	return (
		<>
			<Breadcrumb sidebar={id} />
			<div
				{...{ id }}
				className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform w-[260px] hidden fixed inset-y-0 start-0 z-[60] bg-white border-e border-gray-200 lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 dark:bg-neutral-800 dark:border-neutral-700">
				<div className="px-8 pt-4">
					<Link
						className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
						href="/account"
						aria-label="Why Academy">
						<img
							className="w-12"
							src="/images/why_mini_icon.png"
							alt="Why Academy"
						/>
					</Link>
				</div>
				<nav
					className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
					data-hs-accordion-always-open>
					<ul className="space-y-1.5">
						<li>
							<Link
								className={`${pathname === '/account/information' ? 'bg-gray-100 dark:bg-neutral-700' : ''} w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300`}
								href="/account/information">
								<FaCircleUser size={24} />
								個人資訊
							</Link>
						</li>
						<li>
							<Link
								className={`${pathname === '/account/security' ? 'bg-gray-100 dark:bg-neutral-700' : ''} w-full flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-neutral-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300`}
								href="/account/security">
								<FaShieldHalved size={24} />
								帳戶安全
							</Link>
						</li>
					</ul>
				</nav>
			</div>
		</>
	);
}
