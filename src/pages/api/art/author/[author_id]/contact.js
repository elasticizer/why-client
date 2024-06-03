import sequelize from "@/configs/db";
import chalk from "chalk";
import { Op } from "sequelize";
const { Room } = sequelize.models;
// GET http://localhost:7777/api/art/author/61b2bc3f99f8fa0007b696f5/contact
export default async function handler(req, res) {
  if (req.method === "GET") {
    const id = req.query.author_id;
    try {
      let data = await Room.findAll({
        where: { [Op.or]: [{ member_id: id }, { user_id: id }] },
        raw: true,
      });
      return res.status(200).json({ data });
    } catch (error) {
      console.log(chalk.bgRed(error.message));
      res.status(404).json({ error: error.message });
    }
  }
}
