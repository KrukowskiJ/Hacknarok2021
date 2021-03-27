import React from 'react'
import styled from "styled-components"
import Logo from "../img/logo.png"
export default () => {
    return (
        <>
            <TitleBox>
                <Title>
                    O APLIKACJI
                </Title>
            </TitleBox>
            <Arrow />

            <LogoBox>
                <LogoImg src={Logo} />
            </LogoBox>

            <DescriptionBox>
                <DescriptionBoxTop>
                    <TitleTop>
                        Po co mi to?
                    </TitleTop>
                </DescriptionBoxTop>
                <DescriptionBoxBottom>
                    <DescriptionValue>
                        Większość swojego czasu w pracy spędzamy w pozycji siedzącej. Co może mieć 
                        bardzo złe skutki dla naszego zdrowia. Dlatego tak ważne jest utrzymanie 
                        ergonomicznej pozycji ciała oraz regularne przerwy, urozmaicone ćwiczeniami fizycznymi.
                    </DescriptionValue>
                </DescriptionBoxBottom>
            </DescriptionBox>
        </>
    );
}

const LogoBox = styled.div`
    margin:10%;
`

const LogoImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto ;
    width: 60%;
`

const DescriptionBox = styled.div`
    margin-top:10%;
    margin-right:10%;
    margin-left:10%;
`

const DescriptionBoxTop = styled.div`
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    padding:20px;
`

const DescriptionBoxBottom = styled.div`
    background: #545454 0% 0% no-repeat padding-box;
    padding:30px;
    border-bottom-right-radius: 40px;
    border-bottom-left-radius: 40px;
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

const TitleTop = styled.h2`
    text-align: left;
    font: normal normal bold 26px/34px Roboto;
    letter-spacing: 0px;
    color: #545454;
    opacity: 1;
    margin:0;
    padding:10px;
`

const DescriptionValue=styled.h2`
    text-align: left;
    font: normal normal bold 26px/34px Roboto;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
`