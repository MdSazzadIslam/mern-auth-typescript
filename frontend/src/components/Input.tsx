import styled from "styled-components";
const InputFiled = styled.input`
  display: block;
  padding: 15px 10px;
  margin-bottom: 10px;
  width: 92%;
  border: 1px solid #ddd;
  transition: border-width 0.2s ease;
  border-radius: 2px;
  color: #red;
  font-size: 16px;
  font-weight: 600px;
`;

type InputType = "text" | "password";

interface InputProps {
  type: InputType;
  placeholder: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required: boolean;
}

const Input = ({ type, placeholder, name, onChange, required }: InputProps) => {
  return (
    <InputFiled
      type={type}
      placeholder={placeholder}
      name={name}
      onChange={(e) => onChange(e)}
      required={required}
    />
  );
};

Input.defaultProps = {
  type: "text",
};

export default Input;
