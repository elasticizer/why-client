import { DataTypes } from "sequelize";

export default async function Article(sequelize) {
  return sequelize.define(
    "Article",
    {
      sn: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      _id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      preview_description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      clap_total: {
        type: DataTypes.INTEGER,
        default: 0,
      },
      view_count: {
        type: DataTypes.INTEGER,
        default: 0,
      },
      created_at: {
        type: DataTypes.DATE,
      },
      updated_at: {
        type: DataTypes.DATE,
      },
      published_at: {
        type: DataTypes.DATE,
      },
      cover_image: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      sub_group_id: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      tags: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      author_id: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      collections: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      has_comments: {
        type: DataTypes.BOOLEAN,
        default:false,
      },
    },
    {
      tableName: "article", //直接提供資料表名稱
      timestamps: true, // 使用時間戳
      paranoid: false, // 軟性刪除
      underscored: true, // 所有自動建立欄位，使用snake_case命名
    }
  );
}
