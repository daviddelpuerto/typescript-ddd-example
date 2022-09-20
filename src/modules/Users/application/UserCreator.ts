import MySqlUsersRepository from '../infrastructure/repositories/MySqlUsersRepository';

export default class UserCreator {
  mySqlUsersRepository: MySqlUsersRepository;

  constructor(mySqlUsersRepository: MySqlUsersRepository) {
    this.mySqlUsersRepository = mySqlUsersRepository;
  }

  async run(user: object) {
    return this.mySqlUsersRepository.save(user);
  }
}