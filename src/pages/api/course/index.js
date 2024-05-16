import sequelize from '@/handlers/sequelize';

export default async function handler(req, res) {
	const limit = req.query.limit ?? 10;

	const data = await sequelize.models.Course.findAll({
		limit: 9
	});

	return res.status(200).json(data);
}
