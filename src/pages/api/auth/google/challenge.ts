import { RouteError, onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { serialize } from 'cookie';
import { randomUUID } from 'crypto';
import { StatusCodes } from 'http-status-codes';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { env } from 'process';

type OAuthRequest = {
	client_id: string;
	client_secret: string;
	code: string;
	grant_type: string;
	redirect_uri: string;
};

type OAuthResponse = {
	access_token: string;
	expires_in: number;
	refresh_token?: string;
	scope: string;
	token_type: 'Bearer';
};

type UserInfo = {
	email: string;
	email_verified: boolean;
	family_name?: string;
	given_name: string;
	name: string;
	locale: string;
	picture: string;
	sub: string;
};

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {
	const ip = req.socket.remoteAddress;
	const agent = req.headers['user-agent'];
	const { code, state } = req.query;
	const cookie = serialize('CSRF_TOKEN', '', {
		maxAge: 0,
		httpOnly: true,
		path: '/',
		sameSite: 'lax'
		// secure: true
	});

	res.setHeader('Set-Cookie', cookie);

	if (state !== req.cookies.CSRF_TOKEN) {
		throw new RouteError(StatusCodes.BAD_REQUEST, 'CSRF token not matched');
	}

	const { access_token } = await getAccessToken(code as string);
	const info = await getUserInfo(access_token);
	const identifier = randomUUID();

	const [[user]] = await connection.execute(
		'REPLACE INTO User (Email, FirstName, LastName) VALUES (?, ?, ?) RETURNING SN',
		[info.email, info.given_name, info.family_name]
	);

	await connection.execute(
		`INSERT INTO Session (UUID, ChallengeToken, IP, UserAgent, UserSN) VALUES (?, ?, ?, ?, ?)`,
		[identifier, access_token, ip, agent, user.SN]
	);

	const cookie1 = serialize('SESSION_ID', identifier, {
		maxAge: 24 * 60 * 60,
		httpOnly: true,
		path: '/',
		sameSite: 'lax'
		// secure: true
	});

	res.setHeader('Set-Cookie', cookie1);
	res.redirect(StatusCodes.SEE_OTHER, '/');
});

export default router.handler({ onError, onNoMatch });

function getAccessToken(code: string): Promise<OAuthResponse> {
	const source = 'https://oauth2.googleapis.com/token';
	const init: RequestInit = {
		method: 'POST',
		body: new URLSearchParams({
			client_id: env.GOOGLE_CLIENT_ID as string,
			client_secret: env.GOOGLE_CLIENT_SECRET as string,
			code: code as string,
			grant_type: 'authorization_code',
			redirect_uri: env.GOOGLE_REDIRECT_URI as string
		} as OAuthRequest)
	};

	return fetch(source, init).then(r => r.json());
}

function getUserInfo(accessToken: string): Promise<UserInfo> {
	const source = 'https://www.googleapis.com/oauth2/v3/userinfo';
	const init: RequestInit = {
		method: 'GET',
		headers: { Authorization: `Bearer ${accessToken}` }
	};

	return fetch(source, init).then(r => r.json());
}
