import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../services/userService";
import { IUser } from "../types/userType";

import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

/* interface Props {
  users: IUser;
  login: (e: React.FormEvent, user: IUser | any) => void;
}
 */
const Login: React.FC = () => {
  const history = useHistory();

  const [user, setUser] = useState<IUser | {}>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debugger;
    e.preventDefault();
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };

  const handleLogin = (e: React.FormEvent, user: IUser | any): void => {
    e.preventDefault();
    debugger;
    login(user)
      .then(({ status, data }: any) => {
        debugger;
        if (status !== 200) {
          throw new Error("Error!");
        }
        history.push({
          pathname: "/dashboard",
          state: { user: data },
        });
        alert(data.msg);
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <Wrapper>
      <Container>
        <form onSubmit={(e) => handleLogin(e, user)}>
          <Title>Login </Title>
          <Input
            type="text"
            placeholder="Write your email here..."
            name="email"
            onChange={(e) => handleChange(e)}
          />

          <Input
            type="password"
            placeholder="Write your password here..."
            name="password"
            onChange={(e) => handleChange(e)}
          />

          <Link to="/registration">Register?</Link>
          <Button type="submit" disabled={user ? false : true}>
            Login
          </Button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Login;
