import { Router } from 'express';
import httpStatus from 'http-status-codes';

const router = Router();

router.get('/api', (_req, res) => {
  return res.sendStatus(httpStatus.OK);
});

export default router;