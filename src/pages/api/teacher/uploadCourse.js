import { createRouter } from "next-connect";
import multer from 'multer';
import { extname, join } from 'path';
import { env } from 'process';
import { randomUUID } from 'crypto';
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router';
import connection from '@/handlers/sqlite3';


const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, join("public", "learner", "LessonVideo"));
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

router.use(upload.fields([{ name: 'courseCover', maxCount: 1 }, { name: 'promotionalVideo', maxCount: 1 }])).post(async (req, res) => {
	const sessionId = req.cookies.SESSION_ID;
	if (!sessionId) {
		throw new RouteError(
			StatusCodes.FORBIDDEN,
			'沒有登入'
		);
	}
	const user = await Session.associate(sessionId);
	console.log(req.files);
	console.log(req.body);



	const Identigier = randomUUID();
	const title = req.body.title;
	const domainSN = req.body.domain;
	const intro = req.body.courseDescription;
	const Syllabus = req.body.syllabuse;
	const price = req.body.price;
	const teacherSN = user.SN;
	const lesson = req.body.lesson;
	const thumbnailName = req.files.courseCover[0].filename;
	const thumbnailExt = extname(thumbnailName).substring(1);
	const thumbnailType = req.files.courseCover[0].mimetype;
	const thumbnailHash = randomUUID();
	const promotionalVideoHash = randomUUID();



	const promotionalVideolName = req.files.promotionalVideo[0].filename;
	const promotionalVideoExt = extname(promotionalVideolName).substring(1);
	const promotionalVideoType = req.files.promotionalVideo[0].mimetype;
	// console.log(req.body,req.files);

// 名字相同不能上傳
	// const [repeatData] = await connection.execute('SELECT Name FROM Course WHERE Name=?', [title]);
	// if (repeatData.length > 0) {
	// 	res.status(500).json({ message: "課程上傳失敗，已有相同課程名稱" });
	// 	return false;
	// }


	// 寫入封面到File 查詢FileSN
	await connection.execute('INSERT INTO File (Filename,Extension,ContentType,ContentHash,WhenUploaded,UploaderSN) VALUES (?,?,?,?,CURRENT_TIMESTAMP,?)', [thumbnailName, thumbnailExt, thumbnailType, thumbnailHash, teacherSN]);

	const [thumbnailData] = await connection.execute('SELECT SN FROM File WHERE Filename=?', [thumbnailName]);
	// 拿到封面的SN
	const thumbnailSN = thumbnailData[0].SN;



	// 寫入樣片到File 取得FileSN
	await connection.execute('INSERT INTO File (Filename,Extension,ContentType,ContentHash,WhenUploaded,UploaderSN) VALUES (?,?,?,?,CURRENT_TIMESTAMP,?)', [promotionalVideolName, promotionalVideoExt, promotionalVideoType, promotionalVideoHash, teacherSN]);

	const [promotionalVideoData] = await connection.execute('SELECT SN FROM File WHERE Filename=?', [promotionalVideolName]);
	// 拿到樣片的SN
	const DailySN = promotionalVideoData[0].SN;

	// 寫入Course


	await connection.execute('INSERT INTO Course (Identifier,Name,Intro,Syllabus,Price,WhenCreated,TeacherSN,DomainSN,ThumbnailSN,DailySN,ApproverSN) VALUES (?,?,?,?,?, CURRENT_TIMESTAMP,?,?,?,?,0)', [Identigier, title, intro, Syllabus, price, teacherSN, domainSN, thumbnailSN, DailySN]);


	const [courseData] = await connection.execute('SELECT SN FROM Course WHERE Name=? AND Price=? AND TeacherSN=?', [title, price, teacherSN]);
	// 拿到課程的SN
	const courseSN = courseData[0].SN;

	for (const v of lesson) {
		await connection.execute('UPDATE Lesson set CourseSN=? WHERE SN=?', [courseSN, v]);
	}


	res.status(200).json({message:"上傳成功" });
});

export default router.handler({
	onError: (err, req, res) => {
		console.log('Daddy', err);
		res.status(err.statusCode || 500).json({ error: err.message });
	},
	onNoMatch: (req, res) => {
		res.status(404).json({ error: `路由 ${req.method} ${req.url} 找不到` });
	}
});
