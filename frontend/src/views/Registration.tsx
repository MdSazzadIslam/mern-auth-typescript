import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IUser } from "../types/userType";
import { registration } from "../services/userService";
import Wrapper from "../components/Wrapper";
import Container from "../components/Container";
import Title from "../components/Title";
import Input from "../components/Input";
import Button from "../components/Button";

const Registration: React.FC = () => {
  const [user, setUser] = useState<IUser | {}>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    debugger;
    e.preventDefault();
    setUser((user) => ({
      ...user,
      [e.target.name]: e.target.value,
    }));
  };

  const handleRegistration = (e: React.FormEvent, user: IUser | any): void => {
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
        <form onSubmit={(e) => handleRegistration(e, user)}>
          <Title>Registration </Title>
          <Input
            type="text"
            placeholder="Write your first name here..."
            name="firstName"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
            required={true}
          />
          <Input
            type="text"
            placeholder="Write your last name here..."
            name="lastName"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              handleChange(e)
            }
            required={true}
          />

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

          <Link to="/">Login</Link>
          <Button disabled={user ? false : true} title="Login" type="submit" />
        </form>
      </Container>
    </Wrapper>
  );
};

export default Registration;
