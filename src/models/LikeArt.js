import { DataTypes } from "sequelize";

export default async function LikeArt(sequelize) {
  return sequelize.define(
    "LikeArt",
    {
      pid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      uid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "like_art", //直接提供資料表名稱
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  );
}
