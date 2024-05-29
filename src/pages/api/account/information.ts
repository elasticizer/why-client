import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import Session from '@/helpers/session';
import type { Long } from '@/types';
import { createHash, randomUUID } from 'crypto';
import { type PathLike, createReadStream } from 'fs';
import { StatusCodes } from 'http-status-codes';
import multer from 'multer';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';
import { extname, join } from 'path';

const router = createRouter<NextApiRequest & Record<string, unknown>, NextApiResponse>();
const upload = multer({
	storage: multer.diskStorage({
		destination: join('public', 'profile'),

		filename(_, file, callback) {
			callback(null, randomUUID().concat(extname(file.filename)));
		}
	}),

	fileFilter(_, file, callback) {
		callback(null, file.mimetype.startsWith('image/'));
	}
});

router.get(async (req, res) => {
	const session = await Session.associate(req.cookies.SESSION_ID ?? '');
	const [[data]] = await connection.execute(
		'SELECT * FROM User WHERE SN = ?',
		[session.SN]
	);

	res.status(StatusCodes.OK).json({
		done: true,
		data
	});
});

router.patch(<any>upload.single('picture'), async (req, res) => {
	const session = await Session.associate(req.cookies.SESSION_ID ?? '');
	const body = req.body;
	const file = req.file as Express.Multer.File;

	await connection.execute(
		'UPDATE User'.concat(
			'SET `E-mail` = IFNULL(?, `E-mail`)',
			'SET FirstName = IFNULL(?, FirstName)',
			'SET LastName = IFNULL(?, LatName)',
			'SET Nickname = IFNULL(?, Nickname)',
			'SET PFPSN = (', ''.concat(
				'INSERT INTO File (Filename, Extension, ContentType, ContentHash, UploaderSN)',
				'VALUES (?, ?, ?, ?, ?)',
				'RETURNING SN'
			), ')',
			'WHERE SN = ?'
		),
		[
			body.email,
			body.first_name,
			body.last_name,
			body.nickname,
			file.filename,
			extname(file.filename).slice(1),
			file.mimetype,
			await checksum(file.path),
			session.SN,
			session.SN
		]
	);

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
