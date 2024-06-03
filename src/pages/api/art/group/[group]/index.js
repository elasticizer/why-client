import sequelize from "@/configs/db";
import chalk from "chalk";
const { Sub_Groups } = sequelize    .models;

export default async function handler(req, res) {
  if (req.method === "POST") {
    // 新增
    res.status(200).json({ name: "John Doe" });
  }
  if (req.method === "GET") {
    const sort = req.query.group;
    try {
      const data = await Sub_Groups.findAll({where:{sort:sort}});
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
