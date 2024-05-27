import { DataTypes } from "sequelize";

export default async function Clap(sequelize) {
  return sequelize.define(
    "Clap",
    {
      art_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      uid: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "clap", //直接提供資料表名稱
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  );
}
