import styled from "styled-components"
import React, {useState} from "react";
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
import Notification from "react-notifications/lib/Notification";


let notificationLock = false;

function lockNotification() {
    if (notificationLock) {
        console.log("WYPROSTUJ SIE");
        createNotification()
        notificationLock = false;
    }
}

function unlockNotification() {
    console.log("unlocking notification");
    notificationLock = true;
}

function createNotification() {
    console.log("Clicked?")
    this.refs.child.getAlert()
}

function App() {

    const [position, changePosistion] = useState(true);
    const [arrayOfNums, changeArrOfNums] = useState([0.1]);

    this.refs.child.showAlert();

    return (<>

        <Router>
            <div>
                <Nav/>
                <Block>
                    <SubContainer>
                        <Switch>
                            <Route path="/about">
                                {/* <TensComp /> */}
                            </Route>
                            <Route path="/posture">
                                <TensComp/>
                            </Route>
                            <Route path="/">
                                <MyChart arrayOfNums={arrayOfNums}/>
                            </Route>
                        </Switch>
                    </SubContainer>
                    <SubContainer>
                        <TensComp
                            alertBadFn={() => changePosistion(false)}
                            alertGoodFn={() => changePosistion(true)}
                            changeArray={changeArrOfNums}
                            arrOfNums={arrayOfNums}
                            createNotification={() => lockNotification()}
                            unlockNotification={() => unlockNotification()}
                        />
                        <CameraComponent position={position}/>
                        <Carusel/>
                        <Notification ref="child"/>
                    </SubContainer>
                </Block>
            </div>
        </Router>
    </>);
}

const SubContainer = styled.div`
width:50%;
`

const Block = styled.div`
    margin-left: 360px;
    margin-top:100px;
    display:flex;

    `
export default App;
