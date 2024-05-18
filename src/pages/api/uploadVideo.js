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

router.use(upload.single("video")).post(async (req, res) => {
	console.log(req.body)
	const { Introduction } = req.body;
	const nowDate = new Date();
	res.status(200).json({ Introduction: Introduction, Date: nowDate });
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
