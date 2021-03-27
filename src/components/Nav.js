import styled from "styled-components"
import React from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

const NavLink = styled(Link)`
text-align:center;
height: 20%;
  text-decoration: none;
  color: #9DC54A;
  display: block;
  white-space: nowrap;
  font-size: 1.5vmax;

  :hover{
      color: white;
      background-color:#676767;
  }
`

export default () => {

    return (
        <><Title >MENU</Title >
            <Nav>

                <NavLink to="/">WELCOME</NavLink>
                <NavLink to="/about">ABOUT US</NavLink>
                <NavLink to="/posture">CHECK YOUR POSTURE</NavLink>
            </Nav>
        </>
    );
}
const Title = styled.div`
    font-size: 1.75vmax;
    text-align: center;
    background: #9DC54A;
    color: #FFFFFF;
    position: absolute;
    z-index: 10;
    height: 10vh;
    width:20vw;
    `
const Nav = styled.div`
    background: #545454;
    position: absolute;
    z-index: 0;
    margin-top: 10vh;
    height: 90vh;
    width:20vw;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;

    `