import { createRouter } from "next-connect";
import connection from '@/handlers/sqlite3';
import React from 'react';

const router = createRouter();

router.get(async (req, res) => {
	const { domain, search } = req.query;
	let sql = `SELECT
	Course.*,
	Domain.SN,
	Domain.Name AS DomainName,
	File.Filename,
	User.Nickname
FROM
	UserCourse
JOIN
	Course ON UserCourse.CourseSN = Course.SN
JOIN
	Domain ON Course.DomainSN = Domain.SN
JOIN
	File ON Course.ThumbnailSN = File.SN
JOIN
	User ON Course.TeacherSN=User.SN
WHERE
	UserCourse.UserSN=1
	`;

	let params = [];
	if (domain) {
		sql += ' AND Domain.SN = ?';
		params.push(domain);
	}

	if (search) {
		sql += 'AND Course.Name LIKE ?';
		params.push(`%${search}%`);
	}

	let [results] = await connection.execute(sql, params);

	res.json(results);
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
