import chalk from "chalk";
import sequelize from "@/configs/db";
const { Clap, User, Article } = sequelize.models;
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
      const deleted = await Clap.destroy({
        where: {
          art_id: target,
          uid: uidObj.id,
        },
      });
      const data = await Article.findOne({
        attributes: ["clap_total"],
        where: { _id: target },
        raw: true,
      }); 
      await Article.update(
        { clap_total: data.clap_total - 1 },
        { where: { _id: target } }
      );
      if (deleted) {
        return res.status(201).json({ status: "success" });
      }
      throw new Error(`取消Clap失敗`);
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
      const r = await Clap.create({
        art_id: target,
        uid: uidObj.id,
      });
      const data = await Article.findOne({
        attributes: ["clap_total"],
        where: { _id: target },
        raw: true,
      });
      await Article.update(
        { clap_total: data.clap_total + 1 },
        { where: { _id: target } }
      );

      if (r) {
        return res.status(201).json({ status: "success" });
      }
      throw new Error(`Clap失敗`);
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

      const dataObjs = await Clap.findAll({
        where: {
          uid: uidObj.id,
        },
        raw: true,
        attributes: ["art_id"],
      });
      // console.log(dataObjs);
      const data = dataObjs.map((v) => v.art_id);
      if (data) {
        return res.status(200).json({ data, status: "success" });
      }
      throw new Error(`獲取Clap list失敗`);
    } catch (error) {
      console.log(chalk.bgRed(error.message));
      res.status(400).json({ error: error.message });
    }
  }
  // 不支援的methods
  res.status(405).end();
}
