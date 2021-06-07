import styled from "styled-components";
const Titles = styled.p`
  color: #444;
  font-size: 1.2em;
  font-weight: bold;
  margin: 10px 0 30px 0;
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  font-size: 16px;
`;

interface Titleprops {
  title: string;
}

const Title = ({ title }: Titleprops) => {
  return <Titles>{title}</Titles>;
};
export default Title;
