export type ApiResponseBody<T> = {
	done: boolean;
	data?: T;
	info?: {
		summary?: string;
		message?: string;
	};
};
