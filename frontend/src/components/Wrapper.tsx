import styled from "styled-components";
import Button from "../components/Button";

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
  }
`;

export default Wrapper;
