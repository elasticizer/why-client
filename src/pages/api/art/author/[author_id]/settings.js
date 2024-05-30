import sequelize from "@/configs/db";
import chalk from "chalk";
const { Author } = sequelize.models;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const id = req.query.author_id;
    const payload = await JSON.parse(req.body);
    console.log(payload);
    const [is_hide_clap, is_hide_liked, is_hide_followed] = payload.settings;
    try {
      const data = await Author.update(
        { is_hide_clap, is_hide_liked, is_hide_followed},
        { where: { id: id } }
      );
      console.log();
      if (data) {
        return res.status(200).json({ status: "success" });
      }
      throw new Error(`找不到Authorid${id}`);
    } catch (error) {
      console.log(chalk.bgRed(error.message));
      return res.status(404).json({ error: error.message });
    }
  }
}
