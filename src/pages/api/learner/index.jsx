import { createRouter } from "next-connect";
import React from 'react';

const router = createRouter();

router.get((req, res) => {
	res.send("學生的api");
});



export default router.handler({
	onError: (err, req, res) => {
		console.log(err);
		res.status(err.statusCode || 500).json({ error: err.message });
	},
	onNoMatch: (req, res) => {
		res.status(404).json({ error: `路由 ${req.method} ${req.url} 找不到` });
	}
});
