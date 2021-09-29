import React, { useState } from "react";
import { Database, Home, Moon, Sun, Terminal } from "react-feather";
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
  background-color: #fff;
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

  position: relative;
  margin: 1rem;
  padding: 0.25rem;
  cursor: pointer;
  border-radius: 10px;
  color: #969799;

  &:hover {
    background-color: #5f6164;
    color: #f5f5f5;

    ${Icon} {
      color: #f5f5f5;
    }
  }
`;

const NestedList = styled.ul`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 5rem;
  left: 2rem;

  list-style-type: none;
  padding: 1rem;

  border-radius: 10px;
  background-color: #14191f;

  ${ListItem} {
    margin: 0.5rem 0.25rem;
    padding: 0.5rem 1rem;
  }
`;

const ThemeChanger = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 50%;
  margin: 1rem;
  padding: 0.1rem;
  cursor: pointer;
  box-shadow: 0px 0px 10px #e8e8e8;

  svg {
    color: #14191f;
  }
`;
//================================================

const tables = [
  {
    name: "suppliers",
  },
  {
    name: "products",
  },
  {
    name: "shippers",
  },
];

function Sidebar({
  selectedTable,
  setSelectedTable,
  showQueryRunner,
  setShowQueryRunner,
  theme,
  setTheme,
}: {
  selectedTable: string;
  setSelectedTable: (e: string) => void;
  showQueryRunner: boolean;
  setShowQueryRunner: (e: boolean) => void;
  theme: string;
  setTheme: (e: string) => void;
}) {
  const [showDropdown, setShowDropdown] = useState(false);
  return (
    <Container>
      <List>
        <ListItem>
          <Icon as={Home} />
        </ListItem>

        <ListItem onClick={() => setShowQueryRunner(!showQueryRunner)}>
          <Icon as={Terminal} />
        </ListItem>

        <ListItem onClick={() => setShowDropdown(!showDropdown)}>
          <Icon as={Database} />
          {showDropdown && (
            <NestedList>
              {tables.map((table) => (
                <ListItem
                  key={table.name}
                  onClick={() => setSelectedTable(table.name)}
                >
                  {table.name}
                </ListItem>
              ))}
            </NestedList>
          )}
        </ListItem>
      </List>

      <ThemeChanger
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      >
        {theme === "light" ? <Icon as={Sun} /> : <Icon as={Moon} />}
      </ThemeChanger>
    </Container>
  );
}

export default Sidebar;
