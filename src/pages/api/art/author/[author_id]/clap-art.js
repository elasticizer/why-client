import sequelize from "@/configs/db";
import chalk from "chalk";
const { Author } = sequelize.models;
const { Clap, Article } = sequelize.models;
// GET http://localhost:7777/api/art/author/61b2bc3f99f8fa0007b696f5/clap-art
export default async function handler(req, res) {
  if (req.method === "GET") {
    const id = req.query.author_id;

    try {
      let data = await Clap.findAll({
        where: { uid: id },
        raw: true,
        attributes: ["art_id"],
      });

      if (data) {
        const pidArr = data.map((v) => v.art_id);
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
