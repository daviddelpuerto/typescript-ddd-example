export default interface UsersRepository {
  save(email: string, password: string): Promise<void>;
}