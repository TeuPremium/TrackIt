import { useState } from "react"
import styled from "styled-components"
import Weekday from "./Weekday"
import StyledInput from "./StyledTextInput"

export default function(){
    const [height, setHeight] = useState('180px')
    const week = ['D','S','T','Q','Q','S','S']

    return(
    <Container >
        <Card height={height}>
           <StyledInput placeholder="nome do habito"/>
            <WeekContainer>{week.map((n) => <Weekday day={n}/>)}</WeekContainer>


        </Card>
    </Container>
    )
}

const Container = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    
    
`
const Card = styled.div`
    border-radius: 5px;
    background-color: white;
    height: ${prop=>prop.height};
    width: 93%;
`
const WeekContainer = styled.div`
    display: flex;
    margin-left: 19px;
    margin-top: 8px;
`