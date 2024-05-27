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
}
