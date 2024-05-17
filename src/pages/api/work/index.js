import sequelize from '@/handlers/sequelize';
import { where } from 'sequelize';

export default async function handler(req, res) {
	const sn = req.query.sn;
	const data = await sequelize.models.User.findOne({
		where: { SN: 16 }
	});

	res.status(200).json(data);
}
