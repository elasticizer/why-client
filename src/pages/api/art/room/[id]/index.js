import chalk from "chalk";
import { pusher } from "@/utils/pusher";
import sequelize from "@/configs/db";
const { Msg } = sequelize.models;

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
      pusher.trigger(room_id, "incoming-msg", data);
      return res.status(200).json({ status: "success" });
    } catch (error) {
      console.log(chalk.bgRed(error));
      console.log(error);
      return res.status(404).json({ error: error.message });
    }
  }

  res.status(403).end();
}
