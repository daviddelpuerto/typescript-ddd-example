export default class MySqlUsersRepository {
  userEntity: any;
  
  constructor(userEntity: any) {
    this.userEntity = userEntity;
  }

  async save(email: string, password: string) {
    return this.userEntity.save({ email, password });
  }
}