import chalk from "chalk";
import sequelize from "@/configs/db";
const { Room, Msg } = sequelize.models;

export default async function handler(req, res) {
  if (req.method === "POST") {
    // 檢查是否存在

    // 創建房間

    const payload = await JSON.parse(req.body);
    const { memberId, userId } = payload;
    console.log(memberId, userId);

    try {
      const [data, created] = await Room.findOrCreate({
        where: { member_id: [memberId, userId], user_id: [memberId, userId] },
        defaults: {
          member_id: memberId,
          user_id: userId,
        },
      });
      console.log(chalk.bgRed(created));
      if (data) {
        return res.status(200).json({ data });
      }
      throw new Error("創建失敗");
    } catch (error) {
      console.log(chalk.bgRed(error));
      return res.status(404).json({ error: error.message });
    }
  }
  if (req.method === "GET") {
    try {
      const { room_id } = req.query;
      const data = await Msg.findAll({
        where: {
          room_id: room_id,
        },
        raw: true,
      });
      // console.log(data);
      // {
      //   msg_id: 28,
      //   room_id: 'eecdc7f6-bb13-4c04-94b0-2eb89a2f54df',
      //   sender_id: '637742b19d29c62bfd10e368',
      //   msg: 'hi',
      //   createdAt: 2024-05-22T08:01:20.000Z,
      //   updatedAt: 2024-05-22T08:01:20.000Z
      // },
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