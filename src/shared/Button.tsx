import styled from "styled-components";
import { ThemeType } from "./Theme";

const Button = styled.button<{ theme: ThemeType }>`
  background-color: ${(props) => props.theme.button.backgroundColor};
  color: ${(props) => props.theme.button.color};

  font-size: 1.1rem;
  font-weight: 600;
  font-family: inherit;
  cursor: pointer;

  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 10px;
`;

export default Button;
