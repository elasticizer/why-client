import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';

import { createRouter } from "next-connect";
const router = createRouter();

router.get(async (req, res) => {
    const DomainName = req.query.DomainName;
    const [results] = await connection.execute('SELECT Course.*, Course.TeacherSN AS CourseTeacherSN, Course.Name AS CourseName, user.Nickname, File.*, Domain.Name AS DomainName FROM Course JOIN user ON Course.TeacherSN = user.SN JOIN File ON Course.ThumbnailSN = File.SN JOIN Domain ON Course.DomainSN = Domain.SN ', [DomainName]);
    res.status(200).json(results);
});
export default router.handler({ onError, onNoMatch });
