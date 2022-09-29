import { Router } from 'express';
import httpStatus from 'http-status-codes';
import usersRouter from './users.routes';

const apiRouter = Router();

apiRouter.get('/', (_req, res) => {
  return res.sendStatus(httpStatus.OK);
});

apiRouter.use('/users', usersRouter);

export default apiRouter;