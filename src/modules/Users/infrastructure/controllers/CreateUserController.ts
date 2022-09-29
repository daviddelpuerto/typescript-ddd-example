import httpStatus from 'http-status-codes';
import { Request, Response } from 'express';
import { Controller } from '../../../../Shared/infrastructure/Controller';
import UserCreator from '../../application/UserCreator';

export default class CreateUserController implements Controller {

  constructor(private userCreator: UserCreator) {
    this.userCreator = userCreator;
  }

  async run(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      await this.userCreator.run(email, password);

      res.sendStatus(httpStatus.CREATED);
    } catch (error) {
      console.error(error);
      res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}