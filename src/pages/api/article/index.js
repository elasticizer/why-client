import sequelize from '@/handlers/sequelize';

export default async function handler(req, res) {
	const limit = req.query.limit ?? 10;

	const data = await sequelize.models.Article.findAll({
		limit: 12,
		order: sequelize.random()
	});

	return res.status(200).json(data);
}
