import { useHistory } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.section`
  background-color: #24252a;
   een;
  align-items: center;
  height: 50px;
  position: sticky;
  position: -webkit-sticky;
  top: 0;
  z-index: 100;
 
`;

const LogoutButton = styled.button`
  text-decoration: none;
  float: right;
  top: 0;
  padding: 10px;
  margin-top: 7px;
  opacity: 0.3;

  &:hover {
    opacity: 0.5;
    cursor: pointer;
    transition: 0.5s;
  }

  border-radius: 20px;
  background-color: #0f111c;
  color: #fff;

  outline: none;
  cursor: pointer;
  border: none;
`;

const Header = () => {
  const history = useHistory();

  const logoutHandler = () => {
    debugger;
    localStorage.removeItem("user");
    history.push("/");
  };
  return (
    <>
      <Wrapper>
        <LogoutButton onClick={logoutHandler}>Logout</LogoutButton>
      </Wrapper>
    </>
  );
};

export default Header;
