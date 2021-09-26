import React from "react";
import { Database, Home, Settings, Terminal } from "react-feather";
import styled from "styled-components";

//----------------Styled Components---------------

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  max-height: 95vh;
  position: sticky;
  top: 1rem;

  margin: 1rem;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;

  list-style-type: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: center;
  white-space: nowrap;

  margin: 1rem 0;
`;

const Icon = styled.svg`
  margin: 0 0.5rem 0 0;
`;

//================================================

function Sidebar() {
  return (
    <Container>
      <List>
        <ListItem>
          <Icon as={Home} /> Home
        </ListItem>

        <ListItem>
          <Icon as={Database} /> Tables
        </ListItem>

        <ListItem>
          <Icon as={Terminal} /> SQL
        </ListItem>
      </List>

      <Icon as={Settings} />
    </Container>
  );
}

export default Sidebar;
