import { onError, onNoMatch } from '@/handlers/router';
import connection from '@/handlers/sqlite3';
import type { NextApiRequest, NextApiResponse } from 'next';
import { createRouter } from 'next-connect';

const router = createRouter<NextApiRequest, NextApiResponse>();

router.get(async (req, res) => {});

export default router.handler({ onError, onNoMatch });
