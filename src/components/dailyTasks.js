import styled from "styled-components"
import React, { useState } from "react"

export default () => {
    const [done, setDone] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });

    return (<>

        <Title>Daily Tasks</Title>
        <Task done={done[0]} onClick={() => setDone({ ...done, 0: !done[0] })}>Zrób 10 przysiadów  </Task>
        <Task done={done[1]} onClick={() => setDone({ ...done, 1: !done[1] })}>Zrób 10 przysiadów  </Task>
        <Task done={done[2]} onClick={() => setDone({ ...done, 2: !done[2] })}>Zrób 10 przysiadów  </Task>
        <Task done={done[3]} onClick={() => setDone({ ...done, 3: !done[3] })}>Zrób 10 przysiadów  </Task>

    </>)
}


const Title = styled.h3`
    text-align: left;
    font: normal normal bold 16px/20px Microsoft YaHei UI;
    letter-spacing: 0px;
    color: #676767;
    opacity: 1; 
    margin:10%;
    margin-top:5%;
    margin-bottom:0px;
    font-size: 2rem;
    padding-bottom:20px;
    border-bottom: 4px solid #7C7C7C ;
`
const Task = styled.div`
background-color:${props => props.done ? '#9DC54A' : '#C5C5C5'}; 
color: white;
margin: auto;
margin-top:10px;
border-radius:20px;
width: 70%;
padding:10px;
`