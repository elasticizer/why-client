import { createRouter } from "next-connect";
import multer from 'multer';
import { extname, resolve } from 'path';
import { env } from 'process';
import { randomUUID } from 'crypto';
import connection from '@/handlers/sqlite3';
import { useSession } from '@/contexts/session';


const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, resolve(env.PWD, "public", "learner"));
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
	const { title } = req.body;
	console.log(req.file);
	const file = req.file;
	const filename = file.filename;
	const ext = extname(filename).substring(1);
	const contentType = file.mimetype;
	const uuid = randomUUID();


	// const [writeVideo] = await connection.execute('INSERT INTO File (Filename,Extension,ContentType,ContentHash,UploaderSN) VALUES (?,?,?,?,?)', [filename, ext, contentType,uuid,]);


	// 	const [writeCourse]=await connection.execute(
	// 		'INSERT INTO Lesson (SN,Title,Intro,WhenCreated,WhenLastEdited,CourseSN,VideoSN,) VALUES (,?,,CURRENT_TIMESTAMP,,,)',[title])
	// 	console.log(req.body);
	const { lessonTitle } = req.body;
	const nowDate = new Date();
	res.status(200).json({ lesson: lessonTitle, file: req.file, Date: nowDate });
});

export default router.handler({
	onError: (err, req, res) => {
		console.log(err);
		res.status(err.statusCode || 500).json({ error: err.message });
	},
	onNoMatch: (req, res) => {
		res.status(404).json({ error: `路由 ${req.method} ${req.url} 找不到` });
	}
});
