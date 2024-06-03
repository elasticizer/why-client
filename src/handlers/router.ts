import chalk from 'chalk';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import type { NextApiRequest, NextApiResponse } from 'next';

export function onError(e: unknown, _: NextApiRequest, res: NextApiResponse) {
	console.log(e);
	const { code, summary, message } =
		e instanceof RouteError
			? e
			: new RouteError(
				StatusCodes.INTERNAL_SERVER_ERROR,
				e instanceof Error ? e.message : String(e)
			);

	res.status(code).json({
		done: false,
		info: {
			summary,
			message
		}
	});
}

export function onNoMatch(_: NextApiRequest, res: NextApiResponse) {
	res.status(StatusCodes.METHOD_NOT_ALLOWED).json({
		done: false,
		info: {
			summery: 'Method not allowed',
			message: 'Please request with allowed method again.'
		}
	});
}

export class RouteError extends Error {
	public name = 'RouteError';

	constructor(
		public code: number = StatusCodes.INTERNAL_SERVER_ERROR,
		public summary: string = 'Internal server error encountered',
		public message: string = 'Please try again later.'
	) {
		super();
	}
}
