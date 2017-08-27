export class User {

  constructor(public email?: string,
              public password?: string) {
  }

  set _email(email: string) {
    this.email = email;
  }

  get _email(): string {
    return this.email;
  }

  set _password(password: string) {
    this.password = password;
  }

  get _password(): string {
    return this.password;
  }

}
