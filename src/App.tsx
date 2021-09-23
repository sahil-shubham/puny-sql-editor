import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import MainArea from "./views/MainArea";

//----------Styled Components------------

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

//======================================

function App() {
  return (
    <Router>
      <AppContainer>
        <Switch>
          <Route exact path="/" component={MainArea} />
        </Switch>
      </AppContainer>
    </Router>
  );
}

export default App;
