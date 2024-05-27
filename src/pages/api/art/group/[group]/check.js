import sequelize from "@/configs/db";
import chalk from "chalk";
const { Sub_Groups, Groups } = sequelize.models;

export default async function handler(req, res) {
  if (req.method === "GET") {
    const id = req.query.group;
    try {
      const { title, sort } = await Sub_Groups.findOne({
        where: { id },
        raw: true,
        attributes: ["title", "sort"],
      });

      const { title: group } = await Groups.findOne({
        where: { sort },
        raw: true,
        attributes: ["title"],
      });
      if (title && group) {
        return res.status(200).json({ title, group });
      }
      throw new Error("沒有資料");
    } catch (error) {
      console.log(chalk.bgRed(error.message));
      res.status(404).json({ error: error.message });
    }
  }
}
