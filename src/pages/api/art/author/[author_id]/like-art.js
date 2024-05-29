import sequelize from "@/configs/db";
import chalk from "chalk";
const { LikeArt, Article } = sequelize.models;
// GET http://localhost:7777/api/art/author/61b2bc3f99f8fa0007b696f5/like-art
export default async function handler(req, res) {
  if (req.method === "GET") {
    const id = req.query.author_id;

    try {
      let data = await LikeArt.findAll({
        where: { uid: id },
        raw: true,
        attributes: ["pid"],
      });

      if (data) {
        //物件陣列
        // [
        //   { pid: '6214a34bd6a9990007161f51' },
        //   { pid: '606bd2cc19128583b5765bd8' },
        //   { pid: '611c8c99cbcf8f00070ad1bf' }
        // ]
        const pidArr = data.map((v) => v.pid);
        data = await Article.findAll({
          where: { id: pidArr },
          raw: true,
        });
      }
      // 找沒找到都回200，沒的話data是空陣列
      return res.status(200).json({ data });
    } catch (error) {
      console.log(chalk.bgRed(error.message));
      res.status(404).json({ error: error.message });
    }
  }
}
