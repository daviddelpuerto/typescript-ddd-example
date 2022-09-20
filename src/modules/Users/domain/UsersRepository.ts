export default interface UsersRepository {
  save(user: object): Promise<object>
}