import styled from "styled-components"



export default () => {



    return (<>

        <Daily>Daily Tasks</Daily>

        <Modal>
            <Title>Lorem Ipsum</Title>
            <Task>Zrób 10 przysiadów <Points> 73</Points> </Task>
            <Task>Zrób 10 przysiadów <Points> 32</Points> </Task>
            <Task>Zrób 10 przysiadów <Points> 21</Points> </Task>
            <Task>Zrób 10 przysiadów <Points> 5 </Points> </Task>
        </Modal>
    </>)
}

const Daily = styled.div`
background-color:#C5C5C5;
::after{
    position:absolute;
    width:20px;
    height:20px;
}
`
const Modal = styled.div``

const Title = styled.div``
const Task = styled.div``
const Points = styled.div``