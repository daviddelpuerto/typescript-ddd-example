import { Container } from 'typedi';
import { Router } from 'express';
import { CreateUserController } from '../../modules/Users/infrastructure/controllers';

const usersRouter = Router();

const createUserController: CreateUserController = Container.get('Users.Controllers.CreateUserController');
usersRouter.post('/', createUserController.run.bind(createUserController));

export default usersRouter;