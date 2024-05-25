import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { createRouter } from "next-connect";
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router';
import { StatusCodes } from 'http-status-codes';

const router = createRouter();

router.get(async (req, res) => {
    const sessionId = req.cookies.SESSION_ID;
    if (!sessionId) {
        throw new RouteError(
            StatusCodes.FORBIDDEN,
            '沒有登入'
        );
    }

    const user = await Session.associate(sessionId);

    console.log(req.query);
    try {
        const { User, collectedCoursSN } = req.query;
    const sql = `DELETE FROM CollectedCourse where UserSN=? AND CourseSN=?
	`;
    const [results] = await connection.execute(sql, [User, collectedCoursSN]); // TODO

    res.status(200).json({ status: 'success', message: '刪除成功' });
    } catch (error) {
        console.error("Error handling GET request:", error);
        res.status(500).json({ error: "Internal server error" });
    }
    res.status(200).json(results);
});
export default router.handler({ onError, onNoMatch });
