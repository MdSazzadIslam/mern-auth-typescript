import Header from "../components/Header";
import Footer from "../components/Footer";
import styled from "styled-components";

const Wrapper = styled.section`
  height: 100vh;
  width: 100%;
  align-self: stretch;
  overflow: scroll;
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
