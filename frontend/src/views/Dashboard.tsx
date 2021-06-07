import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;

  width: 100vw;
  align-self: stretch;
  overflow: scroll;
  background: linear-gradient(
    to bottom right,
    rgb(12, 157, 197),
    rgb(201, 109, 216)
  );
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Dashboard = (props: any) => {
  return (
    <Wrapper>
      <Header />
      <Title>
        Welcome {!props.location ? props.location.state.user.email : ""}
      </Title>
      <Footer title="Copyright &copy;  2021 Md Sazzadul Islam" />
    </Wrapper>
  );
};

export default Dashboard;
