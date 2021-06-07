import { Link, useHistory } from "react-router-dom";
import styled from "styled-components";

const Head = styled.section`
  width: 100%;
  background: black;
  height: 50px;
  top: 0;
  position: sticky;
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
`;

const Header = () => {
  const history = useHistory();

  const logoutHandler = () => {
    debugger;
    history.push("/");
  };
  return (
    <>
      <Head>
        <Link to="/">Logout</Link>
        <LogoutButton onClick={logoutHandler}>Logout</LogoutButton>
      </Head>
    </>
  );
};

export default Header;
