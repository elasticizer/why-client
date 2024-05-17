import sequelize from '@/handlers/sequelize';

export default async function handler(req, res) {
	const sn = req.query.sn;

	res.status(200).json(
		await sequelize.models.Course.findAll({
			limit: 3,
			order: sequelize.random()
		})
	);
}
