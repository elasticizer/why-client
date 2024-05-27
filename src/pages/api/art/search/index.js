import sequelize from "@/configs/db";
import chalk from "chalk";
const { Article, Sub_Groups } = sequelize.models;
import { Op, where } from "sequelize";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const payload = await JSON.parse(req.body);
    let { keyword, keywordLike, groups, subgroups, sortMethod, page } = payload;
    if (!page) {
      page = 0;
    }
    // console.log(payload);
    let orderType = [];
    let sortSelectAll = [];
    let subgroupsArr = [];
    let orArr = [];
    let where = [];
    switch (sortMethod) {
      case "1":
        orderType = ["published_at", "desc"];
        break;
      case "2":
        orderType = ["published_at", "asc"];
        break;
      case "3":
        orderType = ["view_count", "desc"];
        break;
      case "4":
        orderType = ["view_count", "asc"];
        break;
      case "5":
        orderType = ["clap_total", "desc"];
        break;
      case "6":
        orderType = ["clap_total", "asc"];
        break;
    }

    if (groups.length > 0) {
      for (let i = 0; i < groups.length; i++) {
        const sort = groups[i];
        if (subgroups[sort].length < 1) {
          sortSelectAll.push(sort);
          continue;
        }
        subgroupsArr = [...subgroupsArr, ...subgroups[sort]];
      }
      if (sortSelectAll.length > 0) {
        const data = await Sub_Groups.findAll({
          attributes: ["id"],
          where: {
            sort: sortSelectAll,
          },
          raw: true,
        });
        // console.log(data); //物件陣列[ { id: 122 }, { id: 123 } ]
        const sortSelectAllResult = data.map((v) => v.id);
        subgroupsArr = [...subgroupsArr, ...sortSelectAllResult];
      }
    }

    if (keyword) {
      keywordLike.forEach((v) => {
        switch (v) {
          case "1":
            orArr.push({
              title: {
                [Op.like]: `%${keyword}%`,
              },
            });
            break;
          case "2":
            orArr.push({
              author_id: {
                [Op.like]: `%${keyword}%`,
              },
            });
            break;
          case "3":
            orArr.push({
              tags: {
                [Op.like]: `%${keyword}%`,
              },
            });
            break;
          case "4":
            orArr.push({
              preview_description: {
                [Op.like]: `%${keyword}%`,
              },
            });
            break;
        }
      });
    }
    // return;
    console.log({ orderType });
    // 有沒有選group

    if (subgroupsArr.length > 1) {
      if (orArr.length > 0) {
        where = {
          [Op.or]: [...orArr],
          sub_group_id: subgroupsArr,
        };
      } else {
        where = {
          sub_group_id: subgroupsArr,
        };
      }
    } else {
      if (orArr.length > 0) {
        where = {
          [Op.or]: [...orArr],
        };
      } else {
        where = {};
      }
    }

    let finalQuery = {
      offset: page * 20,
      limit: 20,
      where,
      raw: true,
    };
    if (orderType.length > 0) {
      finalQuery = { ...finalQuery, order: [orderType] };
    }
    try {
      const data = await Article.findAll(finalQuery);
      const count = await Article.count({
        where,
        raw: true,
      });
      if (data?.length > 0) {
        return res.status(200).json({ data, count });
      }
      return res.status(200).json({ info: "找不到符合條件的Article" });
      throw new Error(`找不到符合條件的Article`);
    } catch (error) {
      console.log(chalk.bgRed(error.message));
      return res.status(404).json({ error: error.message });
    }
  }
  res.status(403).end();
}
