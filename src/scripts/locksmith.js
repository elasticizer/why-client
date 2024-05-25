import chalk from 'chalk';
import { randomUUID } from 'crypto';
import { resolve } from 'path';
import { argv, cwd, env } from 'process';
import Envelope from '../helpers/envelope';

const MSG_GENERATION_FAILED = 'Failed to generate new APP_KEY';
const MSG_GENERATION_SUCCESSFUL = 'Successful to generate new APP_KEY';

const file = resolve(env.PWD ?? cwd(), argv[2] ?? '.env');
const data = {
	APP_KEY: randomUUID()
};

seal(file, Object.assign(await open(file), data)).then(
	() => console.log(chalk.bgGreenBright(MSG_GENERATION_SUCCESSFUL)),
	() => console.error(chalk.bgRedBright(MSG_GENERATION_FAILED))
);
