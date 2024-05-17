import sequelize from '@/handlers/sequelize';

export default async function handler(req, res) {
	const sn = req.query.sn;
	const data = await sequelize.models.Course.findAll({
		limit: 2
		// order: sequelize.random(),
		// include: [
		// 	{
		// 		model: Domain
		// 	}
		// ]
	});
	// 	const data = await sequelize.models.Course.findOne({
	// 		order: sequelize.random()
	// 	});
	res.status(200).json(data);
}
