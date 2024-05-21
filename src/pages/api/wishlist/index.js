// 列出(SELECT) 商品列表用
import connection from '@/handlers/sqlite3';

export default async function handler(req, res) {

    try {
        const limit = req.query.limit ?? 10;
        const [results] = await connection.execute(
            'SELECT c.Name, c.Intro, c.Price, CAST(CASE WHEN c.SN IS NOT NULL THEN 1 ELSE 0 END AS TEXT) AS is_favorite FROM Course AS c LEFT JOIN user AS u ON u.SN = c.SN ORDER BY c.SN ASC LIMIT ?',
            [limit]
        );
        // 將 is_favorite 欄位中的字串 '1' 轉換為布爾值 true
        const resChanges = results.map((row) => ({
            ...row,
            is_favorite: row.is_favorite === '1',
        }));
        res.status(200).json(resChanges);




        
    } catch (error) {
        // 在錯誤發生時回傳錯誤訊息
        res.status(500).json({ message: '資料不正確連線錯誤' });
    }
}