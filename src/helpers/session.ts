import type { SessionData } from '@/contexts/session';
import connection from '@/handlers/sqlite3';
import { randomUUID } from 'crypto';

export default class Session {
	private constructor(user: SessionData) {
		Object.assign(this, user);
	}

	static async associate(id: string) {
		const [[user]] = await connection.execute(
			'SELECT User.SN, User.Email, User.FirstName, User.LastName, User.Nickname FROM User JOIN Session ON Session.UserSN = User.SN WHERE Session.UUID = ?',
			[id]
		);

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
