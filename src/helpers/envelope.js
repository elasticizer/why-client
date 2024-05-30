import { createReadStream } from 'fs';
import { writeFile } from 'fs/promises';
import { EOL } from 'os';
import { createInterface } from 'readline';

export default class Envelope {
	/**
	 * @param {Partial<Record<string | symbol, unknown>>} data
	 */
	constructor(data) {
		this.data = data;
	}

	/**
	 * @param {import('fs').PathLike} file
	 */
	static async open(file) {
		const data = {};
		const stream = createReadStream(file);

		for await (const line of createInterface({ input: stream })) {
			const boundary = line.indexOf('=');

			data[line.slice(0, boundary)] = line.slice(boundary + 1);
		}

		return new this(data);
	}

	/**
	 * @param {import('fs').PathLike} file
	 */
	async seal(file) {
		return writeFile(
			file,
			[...Object.entries(this.data)].reduce(
				(text, item) => text.concat(
					typeof item[0] === 'symbol' ? item[0].description : '',
					`${item[0]}=${item[1]}`,
					EOL
				),
				''
			)
		);
	}
}
