import { DataTypes } from 'sequelize'

export default async function Course(sequelize) {
    return sequelize.define(
        'Course',
        {
            SN: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            Name: {
                type: DataTypes.STRING,
            },
            Intro: {
                type: DataTypes.STRING,
            },
            Syllabus: {
                type: DataTypes.STRING,
            },
            Price: {
                type: DataTypes.INTEGER,
            },
            WhenCreated: {
                type: DataTypes.DATE,
            },
           
        },
        {
            tableName: 'Course', //直接提供資料表名稱
            timestamps: false, // 使用時間戳
            paranoid: false, // 軟性刪除
            underscored: false, // 所有自動建立欄位，使用snake_case命名
            createdAt: 'created_at', // 建立的時間戳
            updatedAt: 'updated_at', // 更新的時間戳
        }
    )
}