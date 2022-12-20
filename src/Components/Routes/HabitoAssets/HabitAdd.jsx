import { useState } from "react"
import styled from "styled-components"
import Weekday from "./Weekday"
import StyledInput from "./StyledTextInput"
import StyledButtonBlue from "../../CommonAssets/StyledButtonBlue"
import axios from "axios"
import { useContext } from "react"
import AuthContext from "../../Contexts/AuthContext"

export default function(prop){
    const {token} = useContext(AuthContext)
    const week = ['D','S','T','Q','Q','S','S']
    const [habito, setHabito] = useState({name: 'pao', days: [1]})

    function postHabit(e){
        const config = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        console.log(config)
        const habitPost = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits", habito, config)
        habitPost.then( () => prop.setAdd(false))
        habitPost.catch( (err) => console.log(err.response.data))
    }


        return(
    <Container >
        <Card>
           <StyledInput placeholder="nome do habito"/>
            <WeekContainer>{week.map((n) => <Weekday day={n}/>)}</WeekContainer>
            <Btns>
                <CancelBtn onClick={() => prop.setAdd(false)}>Cancelar</CancelBtn> 
            <div onClick={() => {postHabit()}}><StyledButtonBlue text="salvar" height="35px" width="84px"/></div>
            </Btns>

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
    height: 180px;
    width: 93%;
`
const WeekContainer = styled.div`
    display: flex;
    margin-left: 5%;
    margin-top: 8px;
`

const CancelBtn = styled.button` 
    color:#52b6ff;
    margin-right: 23px;
    background: none;
    border:none;
    cursor: pointer;
`

const Btns = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    margin-top: 35px;
    padding-right: 5%;
    box-sizing: border-box;
    
`