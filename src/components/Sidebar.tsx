import React from "react";
import { Database, Home, Terminal } from "react-feather";
import styled from "styled-components";

//----------------Styled Components---------------

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  max-height: 95vh;
  position: sticky;
  top: 1rem;

  margin: 1rem;
  border-radius: 10px;
  background-color: #14191f;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;

  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const Icon = styled.svg`
  margin: 1rem;
  color: #969799;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  white-space: nowrap;

  margin: 1rem;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    background-color: #5f6164;

    ${Icon} {
      color: #f5f5f5;
    }
  }
`;

//================================================

function Sidebar() {
  return (
    <Container>
      <List>
        <ListItem>
          <Icon as={Home} />
        </ListItem>

        <ListItem>
          <Icon as={Database} />
        </ListItem>

        <ListItem>
          <Icon as={Terminal} />
        </ListItem>
      </List>
    </Container>
  );
}

export default Sidebar;
