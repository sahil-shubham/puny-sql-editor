import React from "react";
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
  return (
    <Router>
      <ThemeProvider theme={Theme}>
        <AppContainer>
          <GlobalStyles />
          <Sidebar />

          <Switch>
            <Route exact path="/" component={MainArea} />
          </Switch>
        </AppContainer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
