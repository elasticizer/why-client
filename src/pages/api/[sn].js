import sequelize from '@/handlers/sequelize';

export default async function handler(req, res) {
	res.status(200).json(await sequelize.models.Course.findByPk(req.query.sn));
}
