import sequelize from "@/configs/db";
import chalk from "chalk";
const { Article } = sequelize.models;
// 文章clap數
export default async function handler(req, res) {
  if (req.method === "GET") {
    const id = req.query.art_id;
    try {
      const data = await Article.findOne({
        attributes: ["clap_total"],
        where: { _id: id },
        raw: true,
      });
      console.log(data);
      if (data) {
        return res.status(200).json({ data });
      }
      throw new Error("沒有資料");
    } catch (error) {
      console.log(chalk.bgRed(error.message));
      res.status(404).json({ error: error.message });
    }
  }
  
}
