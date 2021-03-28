import styled from "styled-components"
import codehussarLogo from "../img/logo_code_hussar.png"

export default () => {


    return (<>
        <TitleBox>
            <Title>
                O NAS
            </Title>
        </TitleBox>
        <Arrow />
        <StyledImg src={codehussarLogo}></StyledImg>
        <DescriptionBox>
            <DescriptionBoxTop>
                <TitleTop>
                    Cześć, jesteśmy Code Hussar!
                </TitleTop>
            </DescriptionBoxTop>
            <DescriptionBoxBottom>
                <DescriptionValue>
                    <p>
                        Jesteśmy grupą studentów która wspólnie jeździ na hackathony. Dziś tworzymy projekt który pomoże tobie za pomocą AI zachować dobrą podstawę przy komputerze!
                    </p>
                    <p>
                        Spotkaliśmy się na malowniczej plaży. Byliśmy razem na kilku hackathonach co było dla nas super doświadczeniem!
                    </p>
                    <p>
                        Odwiedź nas na naszej stronie!
                    </p>

                    <StyledLink href="https://codehussar.pl/" target="_blank">www.codehussar.pl/</StyledLink>
                    <br></br>
                    <br></br>
                    <p>
                        lub na facebooku:
                    </p>
                    <StyledLink href="https://www.facebook.com/codehussar" target="_blank">www.facebook.com/codehussar</StyledLink>
                </DescriptionValue>
            </DescriptionBoxBottom>
        </DescriptionBox>
    </>)
}


const StyledLink = styled.a`
    color: #9DC54A;
   
`


const StyledImg = styled.img`
  margin-top:10%;   
  display: block;
  margin-left: auto;
  margin-right: auto;
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

const DescriptionValue = styled.h2`
    text-align: left;
    font: normal normal bold 26px/34px Roboto;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
`