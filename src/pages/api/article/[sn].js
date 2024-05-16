import sequelize from '@/handlers/sequelize';

export default async function handler(req, res) {
	const sn = req.query.sn;
	const data = await sequelize.models.Article.findByPk(sn);

	return res.status(200).json(data);
}
