import chalk from "chalk";
import sequelize from "@/configs/db";
const { Room, Msg } = sequelize.models;

export default async function handler(req, res) {
  if (req.method === "GET") {
    try {
      const room_id = req.query.id;
      const data = await Msg.findOne({
        where: {
          room_id: room_id,
        },
        order: [['msg_id', 'DESC']],
        raw: true,
      });
      if (data) {
        return res.status(200).json({ data });
      }
      throw new Error("取得舊訊息失敗");
    } catch (error) {
      console.log(error);
      return res.status(404).json({ error: error.message });
    }
  }
  return res.status(403).end();
}
