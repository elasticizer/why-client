import connection from '@/handlers/sqlite3';

export default async function handler(req, res) {

    const limit = req.query.limit ?? 10;
    
    const [results] = await connection.execute('SELECT *, user.Nickname, File.* FROM Course INNER JOIN user ON Course.TeacherSN=user.SN JOIN File ON Course.ThumbnailSN=File.SN LIMIT ?', [limit]);

    //原本的篩選結果
    // const [results] = await connection.execute('SELECT course.SN, course.Name, course.Intro, course.Price FROM Course LIMIT ?', [limit]);

    res.status(200).json(results);
    

}
