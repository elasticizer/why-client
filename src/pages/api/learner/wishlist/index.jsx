import { createRouter } from "next-connect";
import connection from '@/handlers/sqlite3';
import React from 'react';

const router = createRouter();

router.get(async (req, res) => {
	const {id}=req.query
	const sql = `
	SELECT CollectedCourse.UserSN,CollectedCourse.CourseSN AS CollectedCoursSN, Course.SN, Course.Name, Course.Price, Teacher.Nickname, File.Filename, Domain.SN AS DomainSN,Domain.Name AS DomainName, COUNT(*) AS Total
	FROM
    Course
    JOIN UserCourse ON UserCourse.CourseSN = Course.SN
    JOIN User AS Teacher ON Teacher.SN = Course.TeacherSN
    JOIN File ON File.SN = Course.ThumbnailSN
    JOIN Domain ON Domain.SN = Course.DomainSN
		JOIN CollectedCourse ON CollectedCourse.CourseSN=Course.SN
	WHERE
    Course.SN IN (
        SELECT CourseSN
        FROM CollectedCourse
        WHERE
            UserSN = ?
    )
	GROUP BY
    Course.SN;

	`;
	let [results] = await connection.execute(sql, [id]); // TODO

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
