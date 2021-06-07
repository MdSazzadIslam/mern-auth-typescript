import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Wrapper = styled.section`
  background: white;
  min-height: 100vh;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Dashboard = (props: any) => {
  const location = useLocation();

  useEffect(() => {
    console.log(props.location.state.user);
  }, [location]);

  return (
    <Wrapper>
      <Header />
      <Title>Welcome {props.location.state.user.email}</Title>
      <Footer title="Copyright &copy;  2021 Md Sazzadul Islam" />
    </Wrapper>
  );
};

export default Dashboard;
