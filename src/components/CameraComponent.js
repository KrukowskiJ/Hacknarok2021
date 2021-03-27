
import Webcam from "react-webcam";
import styled from "styled-components"



export default ({ position }) => {


    return (<ContainerBox >
        <CamStyled audio={false} width={540} positioncolor={position} />
        <BottomDesc position={position}>
            {position ? "Masz Poprawną postawę :D" : "wyprostuj się >;c"}
        </BottomDesc>
    </ContainerBox>)

}

const ContainerBox = styled.div`
    margin:auto;
    width:60%;
`


const CamStyled = styled(Webcam)`
/* display:inline; */
border:solid 25px ${props => props.positioncolor ? '#9DC54A' : '#D9A243'};
background-color:${props => props.positioncolor ? '#9DC54A' : '#D9A243'};
transition: all 0.5s ease-in-out;
border-radius:30px;
margin:auto;

width:100%;

`

const BottomDesc = styled.div`
color:#fff;
background-color:${props => props.position ? '#9DC54A' : '#D9A243'};
transition: all 0.5s ease-in-out;
/* margin:auto; */
border-radius:30px;
padding:5px;
text-align:center;
/* width:90%; */
margin:30px;
font-size:2em;

`

