import UsersRepository from '../domain/UsersRepository';

export default class UserCreator {

  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async run(email: string, password: string) {
    return this.usersRepository.save(email, password);
  }
}