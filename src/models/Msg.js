import { DataTypes } from "sequelize";

export default async function Msg(sequelize) {
  return sequelize.define(
    "Msg",
    {
      msg_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      room_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sender_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      msg: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "msg", //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  );
}
