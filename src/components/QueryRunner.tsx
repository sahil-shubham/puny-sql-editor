import React from "react";
import styled, { keyframes } from "styled-components";
import Button from "../shared/Button";

//-------------Styled Components----------------
const slideIn = keyframes`
  0%{
    transform: translateY(100%);
  }

  100% {
    transform: translateY(0%);
  }
`;

const slideOut = keyframes`
  0% {
    transform: translateY(0%);
  }

  100%{
    transform: translateY(100%);
  }
`;

const Container = styled.div<{ show: boolean }>`
  display: flex;
  align-items: flex-start;
  position: fixed;
  bottom: 0;

  padding: 1rem;
  width: 70vw;
  background-color: ${(props) => props.theme.sidebar.backgroundColor};
  border-radius: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  transition: height 1s ease-in;

  animation: 0.4s ease-in ${(props) => (props.show ? slideIn : slideOut)};
  animation-fill-mode: both;
`;

const TextArea = styled.textarea`
  border: none;
  width: 100%;
  resize: none;

  background-color: ${(props) => props.theme.sidebar.backgroundColor};
  color: ${(props) => props.theme.color};
  font: inherit;

  border: none;
  outline: none;
`;

const RunButton = styled(Button)`
  position: absolute;
  right: 1rem;
`;

//================================================

function QueryRunner({ show }: { show: boolean }) {
  return (
    <Container show={show}>
      <TextArea placeholder="Write Queries here" rows={5} autoFocus />
      <RunButton> Run Query</RunButton>
    </Container>
  );
}

export default QueryRunner;
