import styled from "styled-components"
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TensComp from "./components/aimodel"
import Nav from "./components/Nav"

import CameraComponent from "./components/CameraComponent"


function App() {

  const [position, changePosistion] = useState(true);

  return (<>

    <Router>
      <div>
        <Nav />
        <Block>
          <Switch>
            <Route path="/about">
              <TensComp />
            </Route>
            <Route path="/users">
              <TensComp />
            </Route>
            <Route path="/">
              <TensComp
                alertBadFn={() => changePosistion(false)}
                alertGoodFn={() => changePosistion(true)}
              />
              <CameraComponent position={position}/>
            </Route>
          </Switch>
        </Block>
      </div>
    </Router>
  </>);
}
const Block = styled.div`
    margin-left: 30%;
    `
export default App;
