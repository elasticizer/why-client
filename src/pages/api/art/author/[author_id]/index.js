import sequelize from "@/configs/db";
import chalk from "chalk";
const { Author } = sequelize.models;

export default async function handler(req, res) {
  if (req.method === "GET") {
    const id = req.query.author_id;

    try {
      const data = await Author.findOne({ where: { id: id } });
      if (data) {
        return res.status(200).json({ data });
      }
      throw new Error(`找不到Authorid${id}`);
    } catch (error) {
      console.log(chalk.bgRed(error.message));
      return res.status(404).json({ error: error.message });
    }
  }
  // 改個人簡介
  if (req.method === "POST") {
    const id = req.query.author_id;
    const payload = await JSON.parse(req.body);
    const meta_description = payload.meta_description;
    try {
      const data = await Author.update(
        { meta_description },
        { where: { id: id } }
      );
      if (data) {
        return res.status(200).json({ data });
      }
      throw new Error(`找不到Authorid${id}`);
    } catch (error) {
      console.log(chalk.bgRed(error.message));
      return res.status(404).json({ error: error.message });
    }
  }
}
