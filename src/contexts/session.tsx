import type { ApiResponse, Progenitive } from '@/types';
import { createContext, useContext, useEffect, useState } from 'react';

export type SessionData = null | {
	SN: number;
	Email: string;
	FirstName: string;
	LastName: string;
	Nickname: string;
	Icon: string;
};

const SessionContext = createContext<SessionData>(null);

export function useSession() {
	return useContext(SessionContext);
}

export function SessionProvider({ children }: Progenitive) {
	const [session, setSession] = useState<SessionData>(null);

	useEffect(
		() => void fetch('/api/auth/status')
			.then(r => r.json())
			.then(({ done, data }: ApiResponse<SessionData>) => done && setSession(data)),
		[]
	);

	return (
		<SessionContext.Provider value={session}>
			{children}
		</SessionContext.Provider>
	);
}
