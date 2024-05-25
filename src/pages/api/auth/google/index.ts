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
	const target = 'https://accounts.google.com/o/oauth2/v2/auth';
	const search = new URLSearchParams({
		client_id: env.GOOGLE_CLIENT_ID as string,
		prompt: 'select_account',
		redirect_uri: env.GOOGLE_REDIRECT_URI as string,
		response_type: 'code',
		scope: [
			'https://www.googleapis.com/auth/userinfo.email',
			'https://www.googleapis.com/auth/userinfo.profile'
		].join(' '),
		state: uuid
	});

	const cookie = serialize('CSRF_TOKEN', uuid, {
		maxAge: 3600,
		httpOnly: true,
		path: '/',
		sameSite: 'lax',
		secure: true
	});

	res.setHeader('Set-Cookie', cookie);
	res.redirect(StatusCodes.SEE_OTHER, `${target}?${search.toString()}`);
});

export default router.handler({ onError, onNoMatch });
