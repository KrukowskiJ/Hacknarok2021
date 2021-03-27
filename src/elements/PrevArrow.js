import React from 'react'
import styled from "styled-components"
import PrevArrowImg from '../img/prevarrow.png'

export default (props)=> {
    const { className, style, onClick } = props;
    const ArrowBox = styled.img`
        margin:0px;
        height:20px;
        width:20px;
    `

    return (
        <div
            className={className}
            onClick={onClick}
        >
            <ArrowBox src={PrevArrowImg} />
        </div>
    );
}

