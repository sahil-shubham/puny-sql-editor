import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import Sidebar from "./components/Sidebar";
import GlobalStyles from "./shared/GlobalStyles";
import Theme from "./shared/Theme";
import MainArea from "./views/MainArea";

//----------Styled Components------------

const AppContainer = styled.div`
  display: flex;
  flex-direction: row;
  min-height: 100vh;
`;

//======================================

function App() {
  const [selectedTable, setSelectedTable] = useState("products");
  const [showQueryRunner, setShowQueryRunner] = useState(false);

  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <AppContainer>
          <GlobalStyles />
          <Sidebar
            selectedTable={selectedTable}
            setSelectedTable={setSelectedTable}
            showQueryRunner={showQueryRunner}
            setShowQueryRunner={setShowQueryRunner}
          />

          <Switch>
            <Route exact path="/">
              <MainArea
                tableName={selectedTable}
                showQueryRunner={showQueryRunner}
              />
            </Route>
          </Switch>
        </AppContainer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
