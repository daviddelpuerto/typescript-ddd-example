import UsersRepository from '../domain/UsersRepository';
import EmailAlreadyRegistered from '../domain/errors/EmailAlreadyRegistered';

export default class UserCreator {

  constructor(private usersRepository: UsersRepository) {
    this.usersRepository = usersRepository;
  }

  async run(email: string, password: string) {
    const userExistsWithEmail = await this.usersRepository.exists(email);

    if (userExistsWithEmail) {
      throw new EmailAlreadyRegistered(email);
    }

    return this.usersRepository.save(email, password);
  }
}