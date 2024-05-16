import { DataTypes } from 'sequelize';

export default async function Article(sequelize) {
	return sequelize.define(
		'Article',
		{
			SN: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			Identifier: {
				type: DataTypes.STRING,
				allowNull: false
			},
			Title: {
				type: DataTypes.STRING,
				allowNull: false
			},
			Content: {
				type: DataTypes.TEXT,
				allowNull: false
			}
		},
		{
			tableName: 'Article', //直接提供資料表名稱
			timestamps: false, // 使用時間戳
			paranoid: false, // 軟性刪除
			underscored: false, // 所有自動建立欄位，使用snake_case命名
			createdAt: 'created_at', // 建立的時間戳
			updatedAt: 'updated_at' // 更新的時間戳
		}
	);
}
