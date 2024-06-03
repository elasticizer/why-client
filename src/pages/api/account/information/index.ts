import MagicLinkEmail from '@/emails/magic-link';
import { send } from '@/handlers/mailer';
import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import Session from '@/helpers/session';
import type { Long } from '@/types';
import { render } from '@react-email/components';
import chalk from 'chalk';
import { createHash, randomUUID } from 'crypto';
import { type PathLike, createReadStream } from 'fs';
import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { extname, join } from 'path';
import { env } from 'process';

export const config = {
	api: {
		bodyParser: false
	}
};

const router = createRouter<
	NextApiRequest & Record<string, unknown>,
	NextApiResponse
>();
const upload = multer({
	storage: multer.diskStorage({
		destination: join('public', 'profile'),

		filename(_, file, callback) {
			callback(null, randomUUID().concat(extname(file.originalname)));
		}
	}),

	fileFilter(_, file, callback) {
		callback(null, file.mimetype.startsWith('image/'));
	}
});

router.get(async (req, res) => {
	const session = await Session.associate(req.cookies.SESSION_ID ?? '');
	const [[data]] = await connection.execute('SELECT * FROM User WHERE SN = ?', [
		session.SN
	]);

	res.status(StatusCodes.OK).json({
		done: true,
		data
	});
});

router.use(<any>upload.single('icon')).patch(async (req, res) => {
	const session = await Session.associate(req.cookies.SESSION_ID ?? '');
	const body = req.body;
	const icon = req.file as Express.Multer.File;

	const [[file]] = icon ? await connection.execute(
		`INSERT INTO File (Filename, Extension, ContentType, ContentHash, UploaderSN)
		VALUES (?, ?, ?, ?, ?)
		RETURNING SN`,
		[
			icon.filename,
			extname(icon.filename).slice(1),
			icon.mimetype,
			randomUUID(),
			session.SN,
		]
	) : [[null]];

	await connection.execute(
		`UPDATE User
		SET FirstName = IFNULL(?, FirstName),
			LastName = IFNULL(?, LastName),
			Nickname = IFNULL(?, Nickname),
			Intro = IFNULL(?, Intro),
			PFPSN = IFNULL(?, PFPSN)
		WHERE SN = ?`,
		[
			body.first_name,
			body.last_name,
			body.nickname,
			body.intro,
			file?.SN,
			session.SN
		]
	);

	if (body.email !== session.Email) {
		const token = jwt.sign({ sn: session.SN, email: body.email }, env.APP_KEY as string, {
			expiresIn: 15 * 60
		});
		const link = `${env.APP_URL}/account/information/verification?token=${token}`;

		send({
			html: render(MagicLinkEmail({ link })),
			recipient: body.email,
			subject: '驗證您的 Why Academy 電子郵件地址'
		});

		console.info(chalk.bgYellowBright('Magic link:', link));
	}

	res.status(StatusCodes.OK).json({
		done: true,
		data: null
	});
});

export default router.handler({ onError, onNoMatch });

function checksum(file: PathLike) {
	const hash = createHash('sha256');
	const stream = createReadStream(file);

	stream.on('data', hash.update);

	return new Promise<Long<64>>((resolve, reject) => {
		stream.once('end', () => resolve(hash.digest('hex') as Long<64>));
		stream.once('error', e => reject(e));
	});
}
