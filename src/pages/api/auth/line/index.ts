import { onError, onNoMatch } from '@/handlers/router';
import { serialize } from 'cookie';
import { randomUUID } from 'crypto';
import { StatusCodes } from 'http-status-codes';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { env } from 'process';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (_, res) => {
	const uuid = randomUUID();
	const target = 'https://access.line.me/oauth2/v2.1/authorize';
	const search = new URLSearchParams({
		client_id: env.LINE_CHANNEL_ID as string,
		prompt: 'consent',
		redirect_uri: env.LINE_REDIRECT_URI as string,
		response_type: 'code',
		scope: ['email', 'openid', 'profile'].join(' '),
		state: uuid
	});

	const cookie = serialize('CSRF_TOKEN', uuid, {
		maxAge: 3600,
		httpOnly: true,
		path: '/',
		sameSite: 'lax'
		// secure: true
	});

	res.setHeader('Set-Cookie', cookie);
	res.redirect(StatusCodes.SEE_OTHER, `${target}?${search.toString()}`);
});

export default router.handler({ onError, onNoMatch });
