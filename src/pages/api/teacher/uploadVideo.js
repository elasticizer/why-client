import { createRouter } from "next-connect";
import multer from 'multer';
import { extname, join } from 'path';
import { randomUUID } from 'crypto';
import connection from '@/handlers/sqlite3';
import { onError, onNoMatch } from '@/handlers/router';
import { StatusCodes } from 'http-status-codes';
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router';


const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, join("public", "learner", "LessonVideo"));
	},

	filename: function (req, file, cb) {
		const newFileName = randomUUID() + extname(file.originalname);
		cb(null, newFileName);
	}
});

const router = createRouter();
const upload = multer({ storage });


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

	if (req.body._method) {

		const putInforString = req.body.putInfor;
		const putInforObj = JSON.parse(putInforString);

		console.log(putInforObj);


		const lessonSN = putInforObj.SN;
		const newLessonTitle = req.body.lessonTitle;
		const file = req.file;
		const filename = file.filename;
		const ext = extname(filename).substring(1);
		const contentType = file.mimetype;
		const uuid = randomUUID();
		const user = await Session.associate(sessionId);
		const userSN = user.SN;

		const [[fileResult]] = await connection.execute('INSERT INTO File (Filename,Extension,ContentType,ContentHash,UploaderSN) VALUES (?,?,?,?,?) RETURNING SN', [filename, ext, contentType, uuid, userSN]);

		const newFileSN = fileResult.SN;

		const [result] = await connection.execute('UPDATE LESSON SET Title=?,VideoSN=?,WhenLastEdited=CURRENT_TIMESTAMP WHERE SN=? RETURNING SN', [newLessonTitle, newFileSN, lessonSN]);

		const [[lessonResult]] = await connection.execute('SELECT SN, Title, WhenCreated, WhenLastEdited FROM Lesson WHERE SN=?', [lessonSN]);




		if (result.length > 0) {
			// console.log("成功修改");
			res.status(201).json(lessonResult);
		} else {
			console.log("修改失敗");

		}



	} else {
		const { lessonTitle } = req.body;
		const file = req.file;
		console.log(file);

		const filename = file.filename;
		const ext = extname(filename).substring(1);
		const contentType = file.mimetype;
		const uuid = randomUUID();
		const user = await Session.associate(sessionId);

		const [[fileResult]] = await connection.execute('INSERT INTO File (Filename,Extension,ContentType,ContentHash,UploaderSN) VALUES (?,?,?,?,?) RETURNING SN', [filename, ext, contentType, uuid, user.SN]);

		const viedoSN = fileResult.SN;

		const [[lessonResult]] = await connection.execute(
			'INSERT INTO Lesson (Title, WhenLastEdited, VideoSN) VALUES (?,CURRENT_TIMESTAMP,?) RETURNING SN, Title, WhenCreated, WhenLastEdited',
			[lessonTitle, viedoSN]
		);

		// console.log(lessonResult);

		res.status(200).json(lessonResult);
		// 可以獲得這次上傳的章節的章節SN
	}


});






export default router.handler({ onError, onNoMatch });
