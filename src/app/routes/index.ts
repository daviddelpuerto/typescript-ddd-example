import { Router } from 'express';
import httpStatus from 'http-status-codes';
import usersRoutes from './users.routes';

const router = Router();

router.get('/api', (_req, res) => {
  return res.sendStatus(httpStatus.OK);
});

router.use('/api/users', usersRoutes);

export default router;