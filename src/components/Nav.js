import styled from "styled-components"
import React, { useState } from "react"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Container, Col, Row } from 'reactstrap';
import logo from '../images/menu.svg'



export default () => {

    const [hover, setHover] = useState(0);
    const [hover1, setHover1] = useState(0);
    const [hover2, setHover2] = useState(0);
    function wypisz() {

        console.log(hover);
    }

    return (
        <>
            <Top>
                <Title>
                    <Text>MENU</Text>
                </Title>
                <Icon ><Image src={logo} /></Icon>
                <Text2>Popraw Swoją Postawę</Text2>
            </Top>
            <Nav>
                <R><NavLink onMouseEnter={() => setHover(1)}
                    onMouseLeave={() => setHover(0)}
                    to="/">WITAJ</NavLink>{hover ? <Arrow /> : null}</R>
                <R><NavLink onMouseEnter={() => setHover1(1)}
                    onMouseLeave={() => setHover1(0)}
                    to="/posture">TWOJA POSTAWA</NavLink>{hover1 ? <Arrow /> : null}</R>
                <R><NavLink onMouseEnter={() => setHover2(1)}
                    onMouseLeave={() => setHover2(0)}

                    to="/about">O NAS</NavLink>{hover2 ? <Arrow /> : null}</R>
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
const Image = styled.img`
    `

const R = styled.div`
display: flex;
align-items:center;

:hover{
    width: 100%;
    color: white;
    background-color:#676767;
    text-decoration: none;
    border: 16px solid #9DC54A;
    border-top: none;
    border-bottom: none;
    border-right: none;
}
    `

const Arrow = styled.div`
float: right;
width: 0px; 
  height: 0; 
  
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent; 
  
  border-right:20px solid #EBEBEB; 
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
        width: 100%;
        color: white;
        background-color:#676767;
        text-decoration: none;
        
    }
    `