import sequelize from '@/configs/db';
import chalk from 'chalk';
const { Article } = sequelize.models;

export default async function handler(req, res) {
	if (req.method === 'POST') {
		// 新增
		const demo = {
			title: '',
			subTitle: '',
			content: { name: '', content: '' }
		};
		res.status(200).json({ name: 'John Doe' });
	}
	if (req.method === 'GET') {
		const id = req.query.art_id;
		try {
			const data = await Article.findOne({ where: { _id: id } });
			if (data) {
				return res.status(200).json({ data });
			}
			throw new Error('沒有資料');
		} catch (error) {
			console.log(chalk.bgRed(error.message));
			res.status(404).json({ error: error.message });
		}
	}
}
