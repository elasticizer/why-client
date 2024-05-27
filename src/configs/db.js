import { Sequelize } from 'sequelize';
import chalk from 'chalk';
import applyModels from '../db-helpers/sequelize/models-setup.js';

const sequelize = new Sequelize('why_blog', 'root', '0000', {
	host: '127.0.0.1',
	port: '3306',
	dialect: 'mysql',
	logging: false,
	define: {
		freezeTableName: true,
		charset: 'utf8',
		collate: 'utf8_general_ci'
	}
});

sequelize
	.authenticate()
	.then(() => {
		console.log(chalk.bgCyan('INFO - 資料庫已連線 Database connected.'));
	})
	.catch(error => {
		console.log(
			chalk.bgRed('ERROR - 無法連線至資料庫 Unable to connect to the database.')
		);
		console.error(chalk.bgRed(error));
	});

await applyModels(sequelize);

await sequelize.sync({});

console.log(chalk.bgCyan('INFO - All models were synchronized successfully.'));

export default sequelize;
