import { Container } from 'typedi';
import { Controller } from '../../../../Shared/infrastructure/Controller';
import { Request, Response } from 'express';
import httpStatus from 'http-status-codes';
import UserCreator from '../../application/UserCreator';
import Logger from '../../../../Shared/domain/Logger';
import EmailAlreadyRegistered from '../../domain/errors/EmailAlreadyRegistered';

export default class CreateUserController implements Controller {

  constructor(private userCreator: UserCreator) {
    this.userCreator = userCreator;
  }

  async run(req: Request, res: Response) {
    const logger: Logger = Container.get('Shared.Logger');
    try {
      const { email, password } = req.body;

      await this.userCreator.run(email, password);

      res.sendStatus(httpStatus.CREATED);
    } catch (error: any) {
      logger.error(error);

      if (error instanceof EmailAlreadyRegistered) {
        res.status(httpStatus.BAD_REQUEST).send(error.message);
      } else {
        res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR);
      }

    }
  }
}