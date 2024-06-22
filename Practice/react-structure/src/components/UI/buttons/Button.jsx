import styled from "styled-components";

const Button = styled.button`
  border: none;
  outline: none;
  background: #e1e1e1;
  color: #333;
  border-radius: 0.15rem;
  font-size: 0.9rem;
  font-family: Arial, Helvetica, sans-serif;
  letter-spacing: 0.1rem;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background: #ccc;
  }
`;

export default Button;
