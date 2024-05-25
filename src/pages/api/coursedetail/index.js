import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';

import { createRouter } from "next-connect";

const router = createRouter();

router.get(async (req, res) => {
   
    const limit = req.query.limit ?? 1;

    const [results] = await connection.execute('SELECT Course.*,Course.ThumbnailSN AS CourseThumbnailSN, User.SN AS UserSN, User.Nickname, File.* FROM Course INNER JOIN User ON Course.TeacherSN=User.SN JOIN File ON Course.ThumbnailSN=File.SN WHERE Course.SN = 11 LIMIT ?', [limit]);

    res.status(200).json(results);

});
export default router.handler({ onError, onNoMatch });

