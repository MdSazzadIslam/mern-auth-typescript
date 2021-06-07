export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export type UserProps = {
  user: IUser;
};

export type ApiResponse = {
  msg: string;
  status: string;
  usrs: IUser[];
  user?: IUser;
};
