import { Container } from 'typedi';
import { Router } from 'express';
import * as UserControllers from '../../modules/Users/infrastructure/controllers';

const usersRouter = Router();

const createUserController: UserControllers.CreateUserController = Container.get('Controllers.CreateUserController');
usersRouter.post('/', createUserController.run);

export default usersRouter;