import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';

import { createRouter } from "next-connect";

const router = createRouter();

router.get(async (req, res) => {

	const limit = req.query.limit ?? 12;
	const [results] = await connection.execute(`SELECT Review.*, User.SN, User.WhenQualified, User.Nickname, User.FirstName FROM Review 
    JOIN User ON User.SN = Review.LearnerSN 
    ORDER BY Review.WhenCreated DESC`);

	res.status(200).json(results);

});
export default router.handler({ onError, onNoMatch });

