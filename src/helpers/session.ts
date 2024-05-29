import type { SessionData } from '@/contexts/session';
import { RouteError } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { randomUUID } from 'crypto';
import { StatusCodes } from 'http-status-codes';

export default class Session implements Omit<SessionData, 'Icon'> {
	SN!: number;
	Email!: string;
	FirstName!: string;
	LastName!: string;
	Nickname!: string;

	private constructor(user: SessionData) {
		Object.assign(this, user);
	}

	static async associate(id: string) {
		const [[user]] = await connection.execute(
			'SELECT User.SN, User.Email, User.FirstName, User.LastName, User.Nickname FROM User JOIN Session ON Session.UserSN = User.SN WHERE Session.UUID = ?',
			[id]
		);

		if (!user) {
			throw new RouteError(
				StatusCodes.UNAUTHORIZED,
				'Invalid token received',
				'Please request a new token again.'
			);
		}

		return new this(user as SessionData);
	}

	static async establish() {
		const uuid = randomUUID();
		const [[user]] = await connection.execute(
			'INSERT INTO Session (UUID, ChallengeToken, IP, UserAgent, UserSN) VALUES (?, ?, ?, ?, ?)',
			[uuid,]
		);
	}
}
