import sequelize from '@/handlers/sequelize';

export default async function handler(req, res) {
    const sn = req.query.sn;

    res.status(200).json(await sequelize.models.Course.findAll({
        attributes: ['SN', 'Name', 'Intro', 'Price'],
        limit: 5,
    }));
    
    res.status(200).json(await sequelize.models.User.findAll({
        attributes: ['SN', 'NicknName'],
        limit: 5,
    }));

}
