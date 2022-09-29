export default class EmailAlreadyRegistered extends Error {
  constructor(email: string) {
    super(`Email ${email} already in use`);
  }
}