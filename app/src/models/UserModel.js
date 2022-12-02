export class UserModel {
    constructor(id, account, fullName, password, email, phone, userType) {
      this.id = id;
      this.account = account;
      this.fullName = fullName;
      this.password = password;
      this.email = email;
      this.phone = phone;
      this.userType = userType;
    }
  }