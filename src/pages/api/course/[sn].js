import sequelize from '@/handlers/sequelize';

export default async function handler(req, res) {
    const sn = req.query.sn;

    res.status(200).json(await sequelize.models.Course.findByPk(sn));
}
