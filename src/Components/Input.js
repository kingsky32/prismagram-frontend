import React from "react";
import styled from "styled-components";

const Container = styled.input`
  border: 0;
  border: ${props => props.theme.boxBorder};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.bgColor};
  height: 35px;
  font-size: 12px;
  padding: 0px 15px;
  font-weight: 600;
`;

const Input = ({ placeholder, required = true, value, onChange, className, type = "text" }) =>
  <Container
    className={className}
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
  />;

export default Input;
