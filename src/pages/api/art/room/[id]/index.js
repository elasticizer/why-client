import chalk from "chalk";
import { pusher } from "@/utils/pusher";
import sequelize from "@/configs/db";
const { Msg,Room } = sequelize.models;

export default async function handler(req, res) {
  if (req.method === "POST") {
    const payload = await JSON.parse(req.body);
    const room_id = req.query.id;
    console.log(payload, room_id);
    const { userId, msgTosend } = payload;

    console.log(userId, msgTosend);
    // console.log(chalk.bgCyan(room_id));

    console.log(chalk.bgRed(msgTosend));
    try {
      const data = await Msg.create({
        room_id: room_id,
        sender_id: userId,
        msg: msgTosend,
      });
      console.log(data.dataValues);
      // {
      //   msg_id: 90,
      //   room_id: 'f04683db-d988-48d4-a72d-b8546c0322b1',
      //   sender_id: '637742b19d29c62bfd10e367',
      //   msg: '1001',
      //   updatedAt: 2024-05-27T09:31:28.288Z,
      //   createdAt: 2024-05-27T09:31:28.288Z
      // }
      const result =data.dataValues;
      pusher.trigger(room_id, "incoming-msg", result);
      return res.status(200).json({ status: "success" });
    } catch (error) {
      console.log(chalk.bgRed(error));
      console.log(error);
      return res.status(404).json({ error: error.message });
    }
  }
  if (req.method === "GET") {
    const id = req.query.id;
    try {
      let data = await Room.findOne({
        where: {room_id:id },
        raw: true,
      });
      console.log(data);
      return res.status(200).json({ data });
    } catch (error) {
      console.log(chalk.bgRed(error.message));
      res.status(404).json({ error: error.message });
    }
  }
  res.status(403).end();
}
