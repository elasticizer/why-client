import chalk from "chalk";
import sequelize from "@/configs/db";
const { LikeArt, User } = sequelize.models;
// like的 拿清單，增，刪
export default async function handler(req, res) {
  if (req.method === "DELETE") {
    const payload = await JSON.parse(req.body);
    const { target, user } = payload;

    try {
      const uidObj = await User.findOne({
        attributes: ["id"],
        where: { username: user },
        raw: true, //只需要資料
      });
      const deleted = await LikeArt.destroy({
        where: {
          pid: target,
          uid: uidObj.id,
        },
      });
      if (deleted) {
        return res.status(201).json({ status: "success" });
      }
      throw new Error(`取消LikeArt失敗`);
    } catch (error) {
      console.log(chalk.bgRed(error.message));
      res.status(400).json({ error: error.message });
    }
  }
  if (req.method === "PUT") {
    const payload = await JSON.parse(req.body);
    const { target, user } = payload;

    try {
      const uidObj = await User.findOne({
        attributes: ["id"],
        where: { username: user },
        raw: true,
      });

      const r = await LikeArt.create({
        pid: target,
        uid: uidObj.id,
      });

      if (r) {
        return res.status(201).json({ status: "success" });
      }
      throw new Error(`LikeArt失敗`);
    } catch (error) {
      console.log(chalk.bgRed(error.message));
      res.status(400).json({ error: error.message });
    }
  }
  // 拿清單
  if (req.method === "POST") {
    const payload = await JSON.parse(req.body);
    const { user: username } = payload;

    try {
      const uidObj = await User.findOne({
        attributes: ["id"],
        where: { username },
        raw: true,
      });

      const dataObjs = await LikeArt.findAll({
        where: {
          uid: uidObj.id,
        },
        raw: true,
        attributes: ["pid"],
      });
      // console.log(dataObjs);
      const data = dataObjs.map((v) => v.pid);
      if (data) {
        return res.status(200).json({ data, status: "success" });
      }
      throw new Error(`獲取LikeArt list失敗`);
    } catch (error) {
      console.log(chalk.bgRed(error.message));
      res.status(400).json({ error: error.message });
    }
  }
  // 不支援的methods
  res.status(405).end();
}
