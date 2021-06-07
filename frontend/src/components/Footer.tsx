import React from "react";
import styled from "styled-components";

const Foot = styled.section`
  width: 100%;

  text-align: center;
  background: black;
  height: 30px;
  bottom: 0;
  left: 0;
  position: fixed;
  padding-top: 10px;
  font-size: 14px;
  font-weight: 300px;
  color: snow;
`;

interface FooterProps {
  title: string;
}

const Footer = ({ title }: FooterProps) => {
  return <Foot>{title}</Foot>;
};

export default Footer;
