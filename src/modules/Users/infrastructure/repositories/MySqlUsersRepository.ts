import UsersRepository from '../../domain/UsersRepository';

export default class MySqlUsersRepository implements UsersRepository {
  userEntity: any;
  
  constructor(userEntity: any) {
    this.userEntity = userEntity;
  }

  async save(email: string, password: string) {
    return this.userEntity.save({ email, password });
  }
}