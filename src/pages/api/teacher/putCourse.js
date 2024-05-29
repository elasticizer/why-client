import { createRouter } from "next-connect";
import multer from 'multer';
import { extname, join } from 'path';
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


// 取得表單舊資料
router.get(async (req, res) => {
	const sessionId = req.cookies.SESSION_ID;
	if (!sessionId) {
		throw new RouteError(
			StatusCodes.FORBIDDEN,
			'沒有登入'
		);
	}
	const user = await Session.associate(sessionId);

	const userSN = user.SN;
	const courseSN = req.query.courseSN;

	const [results] = await connection.execute(`
	SELECT
    Course.SN AS CourseSN,
    Course.Name AS CourseName,
    Course.Intro AS CourseIntro,
    Course.Syllabus,
    Course.Price,
    Domain.SN AS DomainSN,
    Lesson.SN,
    Lesson.Title,
    Lesson.WhenCreated,
    Lesson.WhenLastEdited,
    Lesson.VideoSN,
    File1.Filename AS ThumbnailFilename,
    File2.Filename AS DailyFilename
FROM
    Course
    JOIN Domain ON Course.DomainSN = Domain.SN
    JOIN Lesson ON Course.SN = Lesson.CourseSN
    JOIN File AS File1 ON Course.ThumbnailSN = File1.SN
    JOIN File AS File2 ON Course.DailySN = File2.SN
WHERE
    Course.SN = ?;`, [courseSN]);


	res.status(200).json({ message: "查詢成功", results: results });



});


// 修改表單
router.use(upload.fields([{ name: 'courseCover', maxCount: 1 }, { name: 'promotionalVideo', maxCount: 1 }])).post(async (req, res) => {
	const sessionId = req.cookies.SESSION_ID;
	if (!sessionId) {
		throw new RouteError(
			StatusCodes.FORBIDDEN,
			'沒有登入'
		);
	}
	const user = await Session.associate(sessionId);

	const courseSN = req.body.courseSN;
	const title = req.body.title;
	const domainSN = req.body.domain;
	const intro = req.body.courseDescription;
	const Syllabus = req.body.syllabuse;
	const price = req.body.price;
	const teacherSN = user.SN;
	const lesson = req.body.lesson || "";

	//封面
	const thumbnailName = req.files.courseCover[0].filename;
	const thumbnailExt = extname(thumbnailName).substring(1);
	const thumbnailType = req.files.courseCover[0].mimetype;
	const thumbnailHash = randomUUID();


	//宣傳影片
	const promotionalVideoHash = randomUUID();
	const promotionalVideolName = req.files.promotionalVideo[0].filename;
	const promotionalVideoExt = extname(promotionalVideolName).substring(1);
	const promotionalVideoType = req.files.promotionalVideo[0].mimetype;





	// 寫入封面到File 查詢FileSN
	const [[thumbnailData]] = await connection.execute('INSERT INTO File (Filename,Extension,ContentType,ContentHash,WhenUploaded,UploaderSN) VALUES (?,?,?,?,CURRENT_TIMESTAMP,?) RETURNING SN', [thumbnailName, thumbnailExt, thumbnailType, thumbnailHash, teacherSN]);

	const thumbnailDataSN = thumbnailData.SN;


	// // 寫入樣片到File 取得FileSN
	const [[DailyData]] = await connection.execute('INSERT INTO File (Filename,Extension,ContentType,ContentHash,WhenUploaded,UploaderSN) VALUES (?,?,?,?,CURRENT_TIMESTAMP,?) RETURNING SN', [promotionalVideolName, promotionalVideoExt, promotionalVideoType, promotionalVideoHash, teacherSN]);


	const DailySN = DailyData.SN;


	// 修改Course
	await connection.execute(`
	UPDATE Course SET
	Name=?,
	Intro=?,
	Syllabus=?,
	Price=?,
	TeacherSN=?,
	DomainSN=?,
	ThumbnailSN=?,
	DailySN=?,
	WhenLaunched=CURRENT_TIMESTAMP
	WHERE SN=?
	`, [title, intro, Syllabus, price, teacherSN, domainSN, thumbnailDataSN, DailySN, courseSN]);


	// 修改Lesson
	if (lesson) {
		for (const v of lesson) {
			await connection.execute('UPDATE Lesson set CourseSN=? WHERE SN=?', [courseSN, v]);
		}
	}

	res.status(200).json({ message: "上傳成功" });
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
