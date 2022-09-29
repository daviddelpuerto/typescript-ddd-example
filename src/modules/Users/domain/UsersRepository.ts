export default interface UsersRepository {
  save(email: string, password: string): Promise<void>;

  exists(email: string): Promise<boolean>;
}