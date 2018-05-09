export class User{
  email: string;
  password: string;

  constructor() {

  }

  get emailUser() : string {
    return this.email;
  }
  
  get passwordUser() : string {
    return this.password;
  }

  set emailUser(p:string)
  {
    this.email = p;
  }

  set passwordUser(p:string)
  {
    this.email = p;
  }

}