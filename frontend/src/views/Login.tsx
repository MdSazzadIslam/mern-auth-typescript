import React, { useState } from "react";
import { Link } from "react-router-dom";
import login from "../services/loginService";

import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  background: red;
  color: #fff;
  display: block;
  border: none;
  margin-top: 20px;
  position: absolute;
  left: 0;
  bottom: 0;
  max-height: 60px;
  border: 0px solid rgba(0, 0, 0, 0.1);
  border-radius: 0 0 2px 2px;
  transform: rotateZ(0deg);
  transition: all 0.1s ease-out;
  border-bottom-width: 7px;
`;

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  min-height: 100%;
  padding: 20px;
  background: rgba(darken($primary, 40%), 0.85);
  &:hover ${Button} {
    cursor: pointer;
    background: teal;
    transition: 0.5s;
  }
`;

const Container = styled.div`
  border-radius: 2px 2px 5px 5px;
  padding: 10px 20px 20px 20px;
  width: 100%;
  max-width: 320px;
  background: #ffffff;
  position: relative;
  padding-bottom: 80px;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.3);
`;

const Title = styled.p`
  color: #444;
  font-size: 1.2em;
  font-weight: bold;
  margin: 10px 0 30px 0;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
`;

const Loder = styled.i`
  .spinner {
    display: block;
    width: 40px;
    height: 40px;
    position: absolute;
    border: 4px solid #ffffff;
    border-top-color: rgba(255, 255, 255, 0.3);
    border-radius: 100%;
    left: 50%;
    top: 0;
    opacity: 0;
    margin-left: -20px;
    margin-top: -20px;
    animation: spinner 0.6s infinite linear;
    transition: top 0.3s 0.3s ease, opacity 0.3s 0.3s ease,
      border-radius 0.3s ease;
    box-shadow: 0px 1px 0px rgba(0, 0, 0, 0.2);
  }
`;

const Input = styled.input`
  display: block;
  padding: 15px 10px;
  margin-bottom: 10px;
  width: 92%;
  border: 1px solid #ddd;
  transition: border-width 0.2s ease;
  border-radius: 2px;
  color: #ccc;
`;

/* type Props = {
  login: (e: React.FormEvent, user: IUser | any) => void;
}; */

const Login: React.FC = () => {
  const [user, setUser] = useState<IUser | {}>();

  const handleChange = (event: any) => {
    debugger;
    event.persist();
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value,
    }));
  };

  const handleLogin = (e: React.FormEvent): void => {
    e.preventDefault();
    debugger;
    console.log(user);

    login(user)
      .then(({ status, data }: any) => {
        if (status !== 201) {
          throw new Error("Error! Todo not saved");
        }
      })
      .catch((err: any) => console.log(err));
  };

  return (
    <Wrapper>
      <Container>
        <form onSubmit={(e) => handleLogin(e)}>
          <Title>Login </Title>
          <Input
            type="text"
            placeholder="Username"
            name="email"
            onChange={(e) => handleChange(e)}
          />

          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={(e) => handleChange(e)}
          />

          <Link to="/registration">Register?</Link>
          <Button disabled={user ? false : true}>
            <Loder />
            <span className="state">Log in</span>
          </Button>
        </form>
      </Container>
    </Wrapper>
  );
};

export default Login;
