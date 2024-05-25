import { createRouter } from "next-connect";
import React from 'react';
import connection from '@/handlers/sqlite3';


const router = createRouter();


router.post(async (req, res) => {
	const userSN = req.body.SN;
	const [userCourse] = await connection.execute('SELECT COUNT(*) AS Total FROM UserCourse WHERE UserSN=?', [userSN]);
	console.log(userCourse[0]);
	const [userUploadCourse] = await connection.execute('SELECT COUNT(*) AS Total  FROM Course WHERE TeacherSN=?', [userSN]);
	console.log(userUploadCourse[0]);


	res.status(200).json({
		message: "連線成功",
		results: {
			userCourse: userCourse[0],
			userUploadCourse: userUploadCourse[0]
		}
	});
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
