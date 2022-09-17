import { Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import { Service } from 'typedi';
import { Controller } from '../../../../Shared/infrastructure/Controller';

@Service('Controllers.CreateUserController')
export default class CreateUserController implements Controller {

  async run(_req: Request, res: Response) {
    try {
      res.sendStatus(httpStatus.CREATED);
    } catch (error) {
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}