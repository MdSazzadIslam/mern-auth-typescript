import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../services/userService";
import { IUser } from "../types/userType";

import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

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

  const handleLogin = (e: React.FormEvent, inputData: IUser | any): void => {
    e.preventDefault();
    debugger;

    login(inputData)
      .then(({ status, data }: any) => {
        debugger;
        if (status !== 200) {
          throw new Error("Error!");
        }
        if (data.msg === "Successfull") {
          history.push({
            pathname: "/dashboard",
            state: { user: data },
          });
        } else {
          alert(data.msg);
        }
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <Wrapper>
      <Container>
        <form onSubmit={(e: React.FormEvent) => handleLogin(e, user)}>
          <Title>Login </Title>
          <Input
            type="text"
            placeholder="Write your email here..."
            name="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
            required={true}
          />

          <Input
            type="password"
            placeholder="Write your password here..."
            name="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
            required={true}
          />

          <Link to="/registration">Register?</Link>
          <Button disabled={user ? false : true} title="Login" type="submit" />
        </form>
      </Container>
    </Wrapper>
  );
};

export default Login;
