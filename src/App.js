import styled from "styled-components"
import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TensComp from "./components/aimodel"
import Nav from "./components/Nav"
import CameraComponent from "./components/CameraComponent"
import MyChart from "./components/MyChart";
import Carusel from "./components/Carusel";
import { Container, Col, Row } from 'reactstrap';
import Daily from "./components/dailyTasks"
import Welcome from "./components/Welcome"
import AboutUs from "./components/AboutUs"
import MyNotification from "./components/MyNotification";

function App() {
  const [arrayOfNums, changeArrOfNums] = useState([0.1]);
  const [position, changePosistion] = useState(true);

  return (<>
    <Router>
      <Container fluid style={{ margin: 0, padding: 0 }} >
        <Nav />
        <Block>
          <Row>
            <Col md="6">
              <GreyBox>
                <Switch>
                  <Route path="/about">
                    <AboutUs/>
                  </Route>
                  <Route path="/posture">
                    <TitleBox>
                      <Title>
                        DANE I WYKRESY
                      </Title>
                    </TitleBox>
                    <Arrow />
                    <MyChart arrayOfNums={arrayOfNums} />
                  </Route>
                  <Route path="/">
                    <Welcome/>
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
                {console.log("App.js position = " + position)}
                <MyNotification position={position}/>
              </MasterBox>
            </Col>
          </Row>
        </Block>

      </Container>
    </Router>
  </>);
}

const SubContainer = styled.div`
width:50%;
`

const Arrow = styled.div`
float: right;
margin-right: 20px;
width: 0; 
  height: 0; 
  border-left: 17px solid transparent;
  border-right: 17px solid transparent;
  border-top: 17px solid #C5C5C5;
`

const TitleBox = styled.div`
  background:#C5C5C5;
  padding:15px;
`

const Title = styled.h4`
  text-align: left;
  font: normal normal bold 19px/24px Microsoft YaHei UI;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  margin:0px;
`

const Block = styled.div`
    margin-left: 350px;
    `

const GreyBox = styled.div`
    background: #EBEBEB ;
    height:100vh;
    width:100%;
    margin:0;
`

const MasterBox = styled.div`
    margin-top:10%;

`
export default App;
