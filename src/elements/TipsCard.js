import React from "react";
import styled from "styled-components"
import BulletImg from "../img/bullet.png"
import { Container, Row, Col } from 'reactstrap';

export default (props)=>{

    const Box = styled.div`
        border: 5px solid #EBEBEB;
        border-radius: 25px;
        opacity: 1;
        padding:20px;
    `

    const Text = styled.h1`
        text-align: left;
        font: normal normal bold 19px/24px Microsoft YaHei UI;
        letter-spacing: 0px;
        margin:auto;
        color: #BFBFBF;
        opacity: 1;
        margin-left:0px;
    `

    const Line = styled.div`
        display: flex;
    `
    const Title=styled.h5`
        text-align: left;
        font: normal normal bold 19px/24px Microsoft YaHei UI;
        margin:auto;
        color: #BFBFBF;
        opacity: 1;
    `

    const Bullet = styled.img`
        height:10px;
        width:10px;
        margin: auto;
        margin-right:20px;
        margin-left:0px;
    `

    

    return(
        <Container>
            <Title>
                {props.title}
            </Title>
            <Box>
                {props.text.map(tip=>{
                    return(
                        <Line>
                            <Bullet src={BulletImg} />
                            <Text>
                                {tip}
                            </Text>
                        </Line>
                    );
                })}
            </Box>
        </Container>
    );
}
