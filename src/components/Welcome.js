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
                        Dlaczego mam tego używać?
                    </TitleTop>
                </DescriptionBoxTop>
                <DescriptionBoxBottom>
                    <DescriptionValue>
                            Niestety - Prawdziwa Teraźniejszość - jest taka, że spędzamy dziś większość czasu przy komputerze -
                            czy to w trakcie pracy, czy po godzinach. I chociaż wszyscy powinniśmy wiedzieć jak siedzieć -
                            prosto, w ergonomicznej pozycji, tak każdy nawet podświadomie się przekręca do innych mniej
                            korzystnych dla naszego kręgosłupa pozycji.                             I dlatego tworzymy aplikację która - dzięki przyjemnym powiadomieniom, pomoże wejść w nawyk utrzymywania dobrej pozycji przed komputerem
                            i poprawnie dbać o nasze plecy - tak żeby wieczorami nie bolały.
                    </DescriptionValue>
                    <BulletBox>
                        <BulletText>
                             1. Siądź wygodnie przy biurku
                        </BulletText>
                    </BulletBox>
                    <BulletBox>
                        <BulletText>
                             2. Skieruj kamerę na siebie
                        </BulletText>
                    </BulletBox>
                    <BulletBox>
                        <BulletText>
                             3. W razie ostrzeżenia popraw pozycję ciała
                        </BulletText>
                    </BulletBox>
                    <BulletBox>
                        <BulletText>
                             4. Podczas przerw wykonuj przygotowane zadania
                        </BulletText>
                    </BulletBox>
                </DescriptionBoxBottom>
            </DescriptionBox>
        </>
    );
}

const LogoBox = styled.div`
    margin:10%;
    margin-bottom:25px;
`

const LogoImg = styled.img`
    display: block;
    margin-left: auto;
    margin-right: auto ;
    width: 60%;
`

const DescriptionBox = styled.div`
    margin-top:5%;
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
    font-size:1.5vw;
`

const DescriptionValue=styled.h2`
    text-align: center;
    font: normal normal bold 26px/34px Roboto;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    font-size:1vw;
`

const BulletBox=styled.div`
    margin-top:20px;
    background: #9DC54A 0% 0% no-repeat padding-box;
    border-radius: 34px;
    opacity: 1;
    padding:20px;
`

const BulletText=styled.h2`
    text-align: left;
    font: normal normal bold 19px/25px Roboto;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    margin:5px;
    font-size:1vw;
`