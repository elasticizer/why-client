import { ReactNode } from 'react';

export type Nullable<T> = T | null;

export type Progenitive = {
	children?: ReactNode;
};

export type ApiResponse<T> = {
	done: boolean;
	data: T;
	info?: {
		summary?: string;
		message?: string;
	};
};
