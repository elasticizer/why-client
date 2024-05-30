import * as fs from 'fs';
import path from 'path';

import appRootPath from 'app-root-path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

export default async function applyModels(sequelize) {
	const modelsPath = path.join(appRootPath.path, 'src/models');
	const filenames = await fs.promises.readdir(modelsPath);
	console.log(filenames);
	for (const filename of filenames) {
		try {
			const item = await import(`../../models/${filename}`);
			await item.default(sequelize);
		} catch (error) {
			console.log(chalk.bgRed(error));
		}
	}
}
