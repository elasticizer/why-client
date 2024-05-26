import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import { createRouter } from 'next-connect';
import Session from '@/helpers/session';
import { RouteError } from '@/handlers/router';
import { StatusCodes } from 'http-status-codes';

import axios from 'axios';
import { HmacSHA256 } from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';
import 'dotenv/config';

const {
	LINEPAY_CHANNEL_ID,
	LINEPAY_CHANNEL_SECRET_KEY,
	LINEPAY_VERSION,
	LINEPAY_SITE,
	LINEPAY_RETURN_HOST,
	LINEPAY_RETURN_CONFIRM_URL,
	LINEPAY_RETURN_CANCEL_URL
} = process.env;

const router = createRouter();

router.get(async (req, res) => {
	const [data] = await connection.execute(
		'SELECT Cart.UserSN AS id, Course.Name AS name, Course.Price AS amount FROM Cart JOIN Course ON Course.SN = Cart.CourseSN'
	);
	const { id } = req.query;
	console.log(data);
	console.log(id);

	res.status(StatusCodes.OK).json(data);
});

export default router.handler({ onError, onNoMatch });
