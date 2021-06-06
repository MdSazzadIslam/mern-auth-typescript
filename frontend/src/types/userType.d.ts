interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

type UserProps = {
  user: IUser;
  login: (e, user) => void;
};

type ApiResponse = {
  msg: string;
  status: string;
  usrs: IUser[];
  user?: IUser;
};
