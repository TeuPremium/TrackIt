import styled from "styled-components"

import { IoIosCheckbox } from 'react-icons/io'
import { useState } from "react"
import axios from "axios"


export default function(prop){
    console.log(prop)
    const [complete, setComplete] = useState(prop.done)
    
    function postChange(check){
        const apiLink = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${prop.id}/${check}`
        console.log('bruh')
        const config = {
            headers: {
                Authorization: `Bearer ${prop.token}`
            }
        }
        const promise = axios.post(apiLink,{},config)
        promise.then(console.log)
        promise.catch(console.log)
    }
    

    return(
        <Container >
            <Card>
               <StyledDiv>
                    <div><h1> {prop.habit} </h1>
                    <SequenceContainer>
                    <h2>Sequencia atual: {complete ? <ColoredText color="#8fc549">{prop.currentSequence} dias</ColoredText> : <>{prop.currentSequence} dias</>}</h2>
                    
                    <h2>Seu recorde: {complete ? <ColoredText color="#8fc549">{prop.record} dias</ColoredText> : <>{prop.record} dias</>} </h2>
                    
                    </SequenceContainer>
                    </div>
                    {complete ? <IoIosCheckbox onChange={postChange(`check`)} onClick={() =>{setComplete(false)}} color='#8fc549'/> : <IoIosCheckbox onChange={postChange(`uncheck`)} onClick={() => setComplete(true)} color='#ebebeb'/>}
                
                </StyledDiv>
            </Card>
        </Container>
        ) 
}



const Container = styled.div`
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    margin-top: 28px;
    
`
const Card = styled.div`
    border-radius: 5px;
    background-color: white;
    height: 94px;
    width: 93%;
    display: flex;
    flex-direction: column;
    h1{
        font-weight: 400;
        font-size: 20px;
        margin-left: 5%;
        color: #666666;
    }
`


const StyledDiv = styled.div`
    justify-content: space-between;
    display: flex;
    margin-top: 11px;
    margin-right:5%;
    height: 30px;
    svg{
        width: 69px;
        height: 69px;
        color: ${prop =>prop.color};
    }
    div{
        width: 100%;
        position: relative;
        bottom: 10px;
    }
`

const SequenceContainer = styled.div`
    line-height: 0.5;
    position: relative;
    top: 2px;
`
const ColoredText = styled.span`
    color: ${prop => prop.color};
`