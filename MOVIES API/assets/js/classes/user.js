export class User{
  constructor(username,fullname,email,password,isAdmin){
      this.username=username;
      this.fullname=fullname;
      this.email=email;
      this.password=password;
      this.isAdmin=isAdmin;
      this.favourite=[];
  }
}