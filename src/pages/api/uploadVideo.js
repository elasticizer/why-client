import { createRouter } from "next-connect";
import multer from 'multer';
import { extname, resolve } from 'path';
import { env } from 'process';
import { randomUUID } from 'crypto';
import connection from '@/handlers/sqlite3';
import { onError, onNoMatch } from '@/handlers/router';
import { StatusCodes } from 'http-status-codes';
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router'

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, resolve(env.PWD, "public", "learner","LessonVideo"));
	},

	filename: function (req, file, cb) {
		const newFileName = randomUUID() + extname(file.originalname);
		cb(null, newFileName);
	},
});

const router = createRouter();
const upload = multer({ storage: storage });


export const config = {
	api: {
		bodyParser: false
	}
};

router.use(upload.single("video")).post(async (req, res) => {
	const sessionId = req.cookies.SESSION_ID;

	if (!sessionId) {
		throw new RouteError(
			StatusCodes.FORBIDDEN,
			'沒有登入'
		);
	}


	const { lessonTitle } = req.body;
	const file = req.file;
	const filename = file.filename;
	const ext = extname(filename).substring(1);
	const contentType = file.mimetype;
	const uuid = randomUUID();
	const user = await Session.associate(sessionId);


	await connection.execute('INSERT INTO File (Filename,Extension,ContentType,ContentHash,UploaderSN) VALUES (?,?,?,?,?)', [filename, ext, contentType, uuid, user.SN]);

	const [fileResult] = await connection.execute('SELECT SN AS fileSN FROM File WHERE Filename =?', [filename]);

	const viedoSN = fileResult[0].fileSN;

	await connection.execute(
		'INSERT INTO Lesson (Title,WhenCreated,CourseSN,VideoSN) VALUES (?,CURRENT_TIMESTAMP,?,?)', [lessonTitle, user.SN, viedoSN]);

	const [lessonResult] = await connection.execute('SELECT SN AS lessonSN FROM Lesson WHERE VideoSN =?', [viedoSN]);

	const lessonSN = lessonResult[0].lessonSN;

	res.status(200).json({ lessonSN: lessonSN });
	// 可以獲得這次上傳的章節的章節SN
});

export default router.handler({ onError, onNoMatch });
