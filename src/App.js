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
<<<<<<< HEAD
import Carusel from "./components/Carusel";
=======
import MyChart from "./components/MyChart";

>>>>>>> 6dff1e276e562161eb7405e941094ea0950802a0

function App() {

  const [position, changePosistion] = useState(true);
  const [arrayOfNums, changeArrOfNums] = useState([0.1]);

  return (<>

    <Router>
      <div>
        <Nav />
        <Block>
          <Switch>
            <Route path="/about">
              {/* <TensComp /> */}
            </Route>
            <Route path="/posture">
              <TensComp />
            </Route>
            <Route path="/">
              <TensComp
                alertBadFn={() => changePosistion(false)}
                alertGoodFn={() => changePosistion(true)}
                changeArray={changeArrOfNums}
                arrOfNums={arrayOfNums}
              />
              <CameraComponent position={position} />
              <Carusel /> 
              <MyChart arrayOfNums={arrayOfNums}/>       
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
