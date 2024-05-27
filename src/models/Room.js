import { DataTypes } from "sequelize";

export default async function Room(sequelize) {
  return sequelize.define(
    "Room",
    {
      room_id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4
      },
      member_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    
    },
    {
      tableName: "room", //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  );
}
