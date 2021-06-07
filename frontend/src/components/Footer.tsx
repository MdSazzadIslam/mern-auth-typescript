import React from "react";
import styled from "styled-components";

const Foot = styled.section`
  width: 100%;

  text-align: center;
  background: black;
  height: 50px;
  bottom: 0;
  left: 0;
  position: fixed;
  padding-top: 10px;
  font-size: 20px;
  font-weight: 300px;
  color: snow;
`;

const Footer = (props: any) => {
  return <Foot>{props.title}</Foot>;
};

export default Footer;
