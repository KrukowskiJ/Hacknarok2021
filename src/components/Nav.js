import styled from "styled-components"
import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";


export default () => {

    return (
        <><Title />
            <Nav>
                <ul>
                    <li>
                        <Link to="/">Ho3me</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                </ul>
            </Nav>
        </>
    );
}
const Title = styled.div`
    background: #9DC54A;
    top:10;
    position: absolute;
    z-index: 10;
    height: 10vh;
    width:20%;
    `
const Nav = styled.div`
    background: #9DC54A;
    background: linear-gradient(173deg, rgba(83,9,22,1) 0%, rgba(173,34,33,1) 45%, rgba(254,68,83,1) 100%);
    top:0;
    position: absolute;
    z-index: -1;
    margin-top: 10vh;
    height: 90vh;
    width:20%;
    `
