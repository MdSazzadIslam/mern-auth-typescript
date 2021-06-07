import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 100%;
  height: 100%;
  padding: 10px 10px;
  background: blue;
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
  transition: opacity 0.2s ease-in-out;
  opacity: 1;
  &:hover {
    opacity: 0.5;
    cursor: pointer;
    transition: 0.5s;
  }
`;
type ButtonType = "button" | "submit";
interface ButtonProps {
  title: string;
  type: ButtonType;
  disabled: boolean;
}

const Button = ({ title, type, disabled }: ButtonProps) => {
  return (
    <Btn type={type} disabled={disabled}>
      {title}
    </Btn>
  );
};

Button.defaultProps = {
  type: "Submit",
};

export default Button;
