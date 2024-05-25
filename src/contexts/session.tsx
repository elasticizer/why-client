import type { Uncertain } from '@/types';
import type { ApiResponseBody } from '@/types/api';
import type { Progenitive } from '@/types/react';
import { usePathname } from 'next/navigation';
import { createContext, useContext, useEffect, useRef, useState } from 'react';

export type SessionData = Uncertain<{
	SN: number;
	Email: string;
	FirstName: string;
	LastName: string;
	Nickname: string;
	Icon: string;
}>;

const SessionContext = createContext<SessionData>(undefined);

export function useSession() {
	return useContext(SessionContext);
}

export function SessionProvider({ children }: Progenitive) {
	const firstRendering = useRef(true);
	const pathname = usePathname();
	const [session, setSession] = useState<SessionData>();

	useEffect(
		() => firstRendering.current
			? void (firstRendering.current = false)
			: void fetch('/api/auth/status')
				.then(r => r.json())
				.then(({ data }: ApiResponseBody<SessionData>) => setSession(data ?? null)),
		[pathname]
	);

	return (
		<SessionContext.Provider value={session}>
			{session === void 0 ? null : children}
		</SessionContext.Provider>
	);
}
