import { RouteError, onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { serialize } from 'cookie';
import { randomUUID } from 'crypto';
import { StatusCodes } from 'http-status-codes';
import { verify } from 'jsonwebtoken';
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
	id_token: string;
	refresh_token?: string;
	scope: string;
	token_type: 'Bearer';
};

type UserInfo = {
	amr: string[];
	aud: string;
	auth_time?: number;
	email?: string;
	exp: number;
	iat: number;
	iss: string;
	name: string;
	nonce: string;
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

	const { id_token } = await getAccessToken(code as string);
	const info = getUserInfo(id_token);
	const identifier = randomUUID();

	const [[user]] = await connection.execute(
		'REPLACE INTO User (Email, FirstName, LastName) VALUES (?, ?, ?) RETURNING SN',
		[info.email ?? info.sub.concat('@line'), info.name, '']
	);

	await connection.execute(
		`INSERT INTO Session (UUID, ChallengeToken, IP, UserAgent, UserSN) VALUES (?, ?, ?, ?, ?)`,
		[identifier, id_token, ip ?? '', agent, user.SN]
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
	const source = 'https://api.line.me/oauth2/v2.1/token';
	const init: RequestInit = {
		method: 'POST',
		body: new URLSearchParams({
			client_id: env.LINE_CHANNEL_ID as string,
			client_secret: env.LINE_CHANNEL_SECRET as string,
			code: code as string,
			grant_type: 'authorization_code',
			redirect_uri: (env.APP_URL as string).concat(
				env.LINE_REDIRECT_URI as string
			)
		} as OAuthRequest)
	};

	return fetch(source, init).then(r => r.json());
}

function getUserInfo(idToken: string) {
	try {
		return verify(idToken, env.LINE_CHANNEL_SECRET as string) as UserInfo;
	} catch (e) {
		throw new RouteError(StatusCodes.BAD_REQUEST, 'Token not verified');
	}
}
