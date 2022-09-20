/**
 * @HINT Register your global variables, functions and/or instances of classes as object properties on the default object exported on this module
 */

import WinstonLogger from '../../../src/Shared/infrastructure/Logger';

// TypeORM Entity
import UserEntity from '../../../src/Shared/infrastructure/persistence/mysql/entities/User.entity';

// Repositories
import MySqlUsersRepository from '../../../src/modules/Users/infrastructure/repositories/MySqlUsersRepository';

// Application use cases
import UserCreator from '../../../src/modules/Users/application/UserCreator';

// Controllers
import CreateUserController from '../../../src/modules/Users/infrastructure/controllers/CreateUserController';


// Instances of classes to inject on other classes
const mySqlUsersRepository = new MySqlUsersRepository(UserEntity);
const userCreator = new UserCreator(mySqlUsersRepository);


/**
 * @IMPORTANT The exported object must have keys with 1 level depth in order to register them properly.
 * Support for more depth on object properties will be added in the future. 
 * 
 * As a workaround use a "nested name" for your properties by now. 
 * See Users: { Repositories.MySqlUsersRepository } on the object exported below
 */
export default {
  Shared: {
    Logger: new WinstonLogger(),
  },
  Users: {    
    'Repositories.MySqlUsersRepository': mySqlUsersRepository,
    'UserCreator': userCreator,
    'Controllers.CreateUserController': new CreateUserController(userCreator),
  },
};
