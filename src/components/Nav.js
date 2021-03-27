import styled from "styled-components"
import React, { useState } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container, Col, Row } from 'reactstrap';



export default () => {

    const [hover, setHover] = useState(0);
    const [hover2, setHover2] = useState(0);
    function wypisz() {

        console.log(hover);
    }

    return (
        <>
            <Top><Title ><Text>MENU</Text></Title ><Icon /><Text2>Popraw Swoją Postawę</Text2></Top>
            <Nav>
                <NavLink to="/">WITAJ</NavLink>
                <NavLink to="/posture">TWOJA POSTAWA</NavLink>
                <NavLink to="/about">O NAS</NavLink>
                {/* <Row><NavLink2 onMouseEnter={() => setHover(!hover)}
                    onMouseLeave={() => setHover(!hover)}

                    to="/postawa">Wykrywanie Postawy</NavLink2>{hover ? <Arrow /> : null}
                </Row> */}
            </Nav>
        </>
    );
}
const Top = styled.div`
background: #6A980C;
height:100px;
width:100%;
display: flex;
    `

const Arrow = styled.div`
float: right;
width: 0; 
  height: 0; 
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent; 
  
  border-right:20px solid white; 
    `
const Title = styled.div`
    background: #9DC54A;
    height:100px;
    width:350px;
    `
const Text = styled.div`
    margin-top:20px;
    text-align: center;
    color: #FFFFFF;
    font-family: Roboto;
    font-size: 45px;
    `
const Text2 = styled.div`
    margin-top:20px;
    text-align: center;
    color: #FFFFFF;
    font-family: Roboto;
    font-size: 45px;
    float: left;
    margin-left:450px;
    `
const Icon = styled.div`
font-size: 1.75vmax;
text-align: center;
background: #577812;
color: #FFFFFF;
position: absolute;
height:100px;
width:100px;
margin-left:350px;
    `
const Nav = styled.div`
    background: #545454;
    position: absolute;
    height: 100vh;
    width:350px;
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    `
const NavLink = styled(Link)`
width: 100%;
    padding: 40px;
    text-align:center;
      text-decoration: none;
      color: #9DC54A;
      display: block;
      font-size: 20px;
      font-family: Roboto;
      :hover{
          color: white;
          background-color:#676767;
          text-decoration: none;
          border: 16px solid #9DC54A;
          border-top: none;
          border-bottom: none;
          border-right: none;
      }
    `
const NavLink2 = styled(Link)`
display: flex;
font-family: Roboto;
display: block;
    text-align:center;
  text-decoration: none;
  background-color: #3A3A3A;
  color: #9DC54A;
  font-size: 15px;
padding: 30px;
  :hover{
    text-decoration: none;
      color: white;
      
  }
`