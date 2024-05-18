import { createRouter } from "next-connect";
import multer from 'multer';
import { extname, resolve } from 'path';
import { env } from 'process';
import { randomUUID } from 'crypto';

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

router.use(upload.fields([{ name: 'courseCover', maxCount: 1 }, { name: 'promotionalVideo', maxCount: 1 }])).post(async (req, res) => {
	console.log(req.body, req.files);
	res.status(200).json({});
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
