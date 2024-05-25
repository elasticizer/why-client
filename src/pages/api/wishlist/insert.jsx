import { onError, onNoMatch, RouteError } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { createRouter } from 'next-connect';
import Session from '@/helpers/session';
import { StatusCodes } from 'http-status-codes';

const router = createRouter();

// 定义 GET 请求的处理程序
router.get(async (req, res) => {

    try {
        const sessionId = req.cookies.SESSION_ID;
        if (!sessionId) {
            throw new RouteError(
                StatusCodes.FORBIDDEN,
                '没有登入'
            );
        }
        const user = await Session.associate(sessionId);
        if (!user) {
            throw new RouteError(
                StatusCodes.UNAUTHORIZED,
                '不可收藏'
            );
            
        }
        console.log(user);
        const { courseSN } = req.query;
        if (!courseSN) {
            throw new RouteError(
                StatusCodes.BAD_REQUEST,
                '缺少课程编号'
            );
        }

        // 插入数据到 CollectedCourse 表
        const [results] = await connection.execute(
            "INSERT INTO CollectedCourse (UserSN, CourseSN) VALUES (?, ?)",
            [user.SN, courseSN]
        );
        

        res.status(200).json({ message: "成功了" });
    } catch (err) {
        // 捕捉所有错误并调用 onError 处理
        onError(err, req, res);
    }
});

// 使用 next-connect 处理程序来导出 API 路由
export default router.handler({
    onError: (err, req, res) => {
        console.error(err);
        res.status(err.statusCode || 500).json({ error: err.message });
    },
    onNoMatch: (req, res) => {
        res.status(404).json({ error: `路由 ${req.method} ${req.url} 找不到` });
    },
});