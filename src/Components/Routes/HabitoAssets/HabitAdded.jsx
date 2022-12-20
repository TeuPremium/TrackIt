import styled from "styled-components"
import Weekday from "./Weekday"
import { IoIosTrash } from 'react-icons/io'


export default function(prop){
    const week = ['D','S','T','Q','Q','S','S']
    const weekIndex = ['','','','','','','']
    for(let i=0;i<7;i++){
        if(prop.days.includes(i)){
            
            weekIndex[i]=i+1
          
        }
    }
    console.log(weekIndex)
    return(
        <Container >
            <Card>
               <StyledDiv>
                    <div><h1> {prop.habit} </h1></div>
                    <IoIosTrash style={{color:'#666666'}}/>
                </StyledDiv>
                <WeekContainer>{week.map((n, index) => weekIndex[index] ? <Weekday color={"white"} backgroundColor={"#d5d5d5"} disabled={true} day={n}/> : <Weekday color={"#d5d5d5"} backgroundColor={"white"} disabled={true} day={n}/>)}</WeekContainer>
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
    height: 91px;
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
const WeekContainer = styled.div`
    display: flex;
    margin-left: 5%;
    margin-top: 8px;
`

const StyledDiv = styled.div`
    justify-content: space-between;
    display: flex;
    margin-top: 11px;
    margin-right:5%;
    height: 30px;
    svg{
        width: 15px;
        height: 15px;
    }
    div{
        width: 100%;
        position: relative;
        bottom: 10px;
    }
`

