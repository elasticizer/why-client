import { Progenitive } from '@/types/react';
import { MouseEventHandler } from 'react';

type OAuthProps = {
	name: string;
	onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function OAuth({ children: icon, name, onClick }: Progenitive & OAuthProps) {
	return (
		<button
			type="button"
			className="leading-6 w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
			{...{ onClick }}
		>
			{icon}
			使用 {name} 登入
		</button>
	);
}
