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
import MyChart from "./components/MyChart";
import Carusel from "./components/Carusel";
import {Container,Col,Row} from 'reactstrap';

function App() {
  const [arrayOfNums, changeArrOfNums] = useState([0.1]);
  const [position, changePosistion] = useState(true);

  return (<>
    <Router>
      <Container fluid>

        <Nav />
        <Block>
          <Row>
              <Col md="6">
                <GreyBox>
                  <Switch>
                    <Route path="/about">
                      {/* <TensComp /> */}
                    </Route>
                    <Route path="/posture">
                      <TensComp />
                      <MyChart arrayOfNums={arrayOfNums}/>  
                    </Route>
                  </Switch>
                </GreyBox>
              </Col>
              <Col md="6">
                <MasterBox>
                  <TensComp
                      alertBadFn={() => changePosistion(false)}
                      alertGoodFn={() => changePosistion(true)}
                      changeArray={changeArrOfNums}
                      arrOfNums={arrayOfNums}
                  />
                  <CameraComponent position={position} />
                  <Carusel />  
                </MasterBox>
              </Col>
            </Row>
        </Block>

      </Container>
    </Router>
  </>);
}
const Block = styled.div`
    margin-left: 350px;
    `

const GreyBox = styled.div`
    background: #EBEBEB ;
    height:100vh;
    width:100%;
    margin:0;
`

const MasterBox=styled.div`
    margin-top:10%;

`
export default App;
