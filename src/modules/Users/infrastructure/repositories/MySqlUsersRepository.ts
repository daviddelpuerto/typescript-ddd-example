export default class MySqlUsersRepository {
  userEntity: any;
  
  constructor(userEntity: any) {
    this.userEntity = userEntity;
  }

  async save(user: object) {
    return this.userEntity.save(user);
  }
}