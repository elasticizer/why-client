import sequelize from "@/configs/db";
import chalk from "chalk";
const { Article } = sequelize.models;

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const data = await Article.findAll({
        limit: 3,
        order: [["clap_total", "desc"]],
      });
      if (data) {
        return res.status(200).json({ data });
      }
      throw new Error(`找不到Article${id}`);
    } catch (error) {
      console.log(chalk.bgRed(error.message));
      res.status(404).json({ error: error.message });
    }
  }
}
