import User, { IUser } from "../models/userModel";

class userService {
  async registration(data: any) {
    const userData: IUser = new User({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    });

    return await userData.save();
  }

  async checkEmailExist(email: string) {
    return await User.findOne({ email: email });
  }

  async checkUserExist(data: IUser) {
    const { email, password } = data;
    return await User.findOne({ email }).select("+password");
  }
}

export default new userService();
