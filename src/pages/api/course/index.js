import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';

import { createRouter } from "next-connect";

const router = createRouter();

router.get(async (req, res) => {
    
 
    const limit = req.query.limit ?? 10;
   

    const [results] = await connection.execute('SELECT *, user.Nickname, File.* FROM Course INNER JOIN user ON Course.TeacherSN=user.SN JOIN File ON Course.ThumbnailSN=File.SN LIMIT ?', [limit]);

    res.status(200).json(results);
});
export default router.handler({ onError, onNoMatch })
