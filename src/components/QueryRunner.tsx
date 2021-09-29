import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: flex-start;

  position: sticky;
  bottom: 0;

  height: 10rem;
  background: white;
`;

const Input = styled.input`
  border: none;
  width: 100%;
`;

function QueryRunner() {
  return (
    <Container>
      <Input placeholder="Write Queries here" />
    </Container>
  );
}

export default QueryRunner;
