import { DataTypes } from "sequelize";
// https://api.hahow.in/api/groups/index res.groups
export default async function Groups(sequelize) {
  return sequelize.define(
    "Groups",
    {
      _id: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      uniquename: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sort: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      cover_image:{
        type: DataTypes.STRING,
        allowNull:false
      }
    },
    {
      tableName: "groups", //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
      createdAt: "created_at", // 建立的時間戳
      updatedAt: "updated_at", // 更新的時間戳
    }
  );
}
