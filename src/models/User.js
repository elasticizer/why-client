import { DataTypes } from 'sequelize'

export default async function User(sequelize) {
    return sequelize.define(
        'User',
        {
            SN: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            Nickname: {
                type: DataTypes.STRING,
            },
           
        },
        {
            tableName: 'User', //直接提供資料表名稱
            timestamps: false, // 使用時間戳
            paranoid: false, // 軟性刪除
            underscored: false, // 所有自動建立欄位，使用snake_case命名
            createdAt: 'created_at', // 建立的時間戳
            updatedAt: 'updated_at', // 更新的時間戳
        }
    )
}