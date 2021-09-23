import React from "react";
import * as Icon from "react-feather";
import styled from "styled-components";

//----------------Styled Components---------------

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

//================================================

function Sidebar() {
  return (
    <Container>
      <Icon.Home />
      <Icon.Database />
    </Container>
  );
}

export default Sidebar;
