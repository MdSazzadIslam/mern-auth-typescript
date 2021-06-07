import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../types/userType";
import { registration } from "../services/userService";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";
import { useHistory } from "react-router-dom";

/* interface Props {
  users: IUser;
  login: (e: React.FormEvent, user: IUser | any) => void;
} */

const Registration: React.FC = () => {
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
    registration(user)
      .then(({ status, data }: any) => {
        debugger;
        if (status !== 200) {
          throw new Error("Error!");
        }
        alert(data.msg);
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <Wrapper>
      <Container>
        <form onSubmit={(e) => handleLogin(e, user)}>
          <Title>Registration </Title>
          <Input
            type="text"
            placeholder="Write your first name here..."
            name="firstName"
            onChange={(e) => handleChange(e)}
          />
          <Input
            type="text"
            placeholder="Write your last name here..."
            name="lastName"
            onChange={(e) => handleChange(e)}
          />

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

          <Link to="/">Login</Link>
          <Button type="submit" disabled={user ? false : true}>
            Registration
          </Button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Registration;
