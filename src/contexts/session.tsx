import type { Uncertain } from '@/types';
import type { ApiResponseBody } from '@/types/api';
import type { Progenitive } from '@/types/react';
import { usePathname } from 'next/navigation';
import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

export type SessionData = Uncertain<{
	SN: number;
	Email: string;
	FirstName: string;
	LastName: string;
	Nickname: string;
	Intro: string;
	Icon: string;
}>;

export type SessionContextType = Uncertain<SessionData & {
	refresh: () => void;
}>;

const SessionContext = createContext<SessionContextType>(undefined);

export function useSession() {
	return useContext(SessionContext);
}

export function SessionProvider({ children }: Progenitive) {
	const firstRendering = useRef(true);
	const pathname = usePathname();
	const [session, setSession] = useState<SessionData>();
	const callback = useCallback(
		() =>
			firstRendering.current
				? void (firstRendering.current = false)
				: void fetch('/api/auth/status')
					.then(r => r.json())
					.then(({ data }: ApiResponseBody<SessionData>) =>
						setSession(data ?? null)
					),
		[pathname]
	);

	useEffect(callback, [callback]);

	return (
		<SessionContext.Provider value={session && { ...session, refresh: callback }}>
			<div className={`${session === void 0 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-500`}>
				{children}
			</div>
		</SessionContext.Provider >
	);
}
