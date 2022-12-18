import { useState } from "react"
import styled from "styled-components"

export default function(prop){
    const [background, setBackground] = useState('white')
    const [color, setColor] = useState('#d5d5d5')
    
    if(!prop.disabled){
        if(color=='#d5d5d5'){
            return(
                <Container onClick={() => {setColor('white'); setBackground('#d5d5d5'); prop.selectDay(true)}} backgroundColor={background} color={color}>
                {prop.day}
                </Container>
            )
            }
        else{
            return(
                <Container onClick={() => {setColor('#d5d5d5'); setBackground('white'); prop.selectDay(false)}} backgroundColor={background} color={color}>
                {prop.day}
                </Container>
            ) 
        }
    }
    else{
        return(
                <Container color={prop.color} backgroundColor={prop.background}>
                {prop.day}
                </Container>
            ) 
    }
}

const Container = styled.div`
    width: 30px;
    height: 30px;
    border:1px solid #d5d5d5;
    border-radius: 5px;
    box-sizing: border-box;
    margin-right: 4px;
    color:${props => props.color};
    background-color: ${props =>props.backgroundColor};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`