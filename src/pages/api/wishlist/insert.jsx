import connection from '@/handlers/sqlite3';
import { createRouter } from "next-connect";
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router';

const router = createRouter();

// 定義 GET 請求的處理程序
router.get(async (req, res) => {
    const sessionId = req.cookies.SESSION_ID;

    if (!sessionId) {
        throw new RouteError(
            StatusCodes.FORBIDDEN,
            '沒有登入'
        );
    }
    const user = await Session.associate(sessionId);
    
    try {
        const { userid, courseSN } = req.query
        const [results] = await connection.execute("INSERT INTO CollectedCourse VALUES (?,?)", [userid, courseSN])
        res.status(200).json({message:"成功了"});
    } catch (error) {
        console.error("Error handling GET request:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

// 使用 next-connect 處理程序來導出 API 路由
export default router.handler();
