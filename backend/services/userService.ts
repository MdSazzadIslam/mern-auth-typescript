import User, { IUser } from "../models/userModel";

const register = async (data: any) => {
  const userData: IUser = new User({
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
  });

  return await userData.save();
};

const checkEmailExist = async (email: string) => {
  return await User.findOne({ email: email });
};

const checkUserExist = async (email: string, password: string) => {
  return await User.findOne({ email }).select("+password");
};

export { register, checkEmailExist, checkUserExist };
