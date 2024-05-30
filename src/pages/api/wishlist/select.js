import { onError, onNoMatch, RouteError } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { createRouter } from "next-connect";
import Session from '@/helpers/session';
import { StatusCodes } from 'http-status-codes';

const router = createRouter();

// 定義 GET 請求的處理程序
router.get(async (req, res) => {
    const sessionId = req.cookies.SESSION_ID;
    if (!sessionId) {
        console.error("Session ID is missing.");
        throw new RouteError(StatusCodes.FORBIDDEN, '沒有登入');
    }

    let user;
    try {
        user = await Session.associate(sessionId);
        if (!user) {
            console.error("User not found for session ID:", sessionId);
            return res.status(StatusCodes.UNAUTHORIZED).json({ error: "Invalid session" });
        }
    } catch (error) {
        console.error("Session association error:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Session error" });
    }

    try {
        const {UserSN } = req.query;
        if (UserSN) {
            console.error("MissingUserSN in query parameters.");
            throw new RouteError(StatusCodes.BAD_REQUEST, '缺少UserSN');
        }

        // 查詢所有課程
        const [courses] = await connection.execute("SELECT * FROM Course");
        console.log("Courses retrieved:", courses);

        // 查詢使用者的最愛商品
        const [favCourses] = await connection.execute("SELECT CourseSN FROM CollectedCourse WHERE UserSN = ?", [UserSN]);
        console.log("Favorite courses retrieved:", favCourses);

        const favCourseIds = favCourses.map(fav => fav.CourseSN);

        // 合併商品資訊和最愛狀態
        const courseWithFavs = courses.map(course => ({
            ...course,
            isFav: favCourseIds.includes(course.SN),
        }));

        console.log("Courses with favorite status:", courseWithFavs);

        return res.status(200).json(courseWithFavs);
    } catch (error) {
        console.error("Error handling GET request:", error);
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: "Internal server error" });
    }
});

export default router.handler({ onError, onNoMatch });
