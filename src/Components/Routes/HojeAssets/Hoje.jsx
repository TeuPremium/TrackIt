import styled from "styled-components"
import Header from "../../CommonAssets/Header"
import Footer from "../../CommonAssets/Footer"
import BlueText from "../../CommonAssets/BlueText"
import GlobalStyle from "../../../Styles/GlobalStyle"
import HabitCard from "./HabitCard"
import { useContext } from "react"
import AuthContext from "../../Contexts/AuthContext"
import LoginFailed from "../../CommonAssets/LoginFailed"
import { useEffect } from "react"
import axios from "axios"
import { useState } from "react"



export default function(prop){
    
    const {token} = useContext(AuthContext)
    const [today, setToday] = useState([])
    const dayjs = require("dayjs");
    let updateLocale = require("dayjs/plugin/updateLocale");
    dayjs.extend(updateLocale);
    dayjs.updateLocale("en", {
        weekdays: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sabado"],
    });


    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"
        const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.get(URL, config)
    promise.then((res) => {setToday(res.data)})
    promise.catch((err)=>console.log(err.response.data))
    
    }, [])
    

    if(token){return(
    <PageStyle>
        <GlobalStyle color="#e5e5e5"/>
    <Header/>
    <Container>
        <MyHabits>
            <BlueText text={dayjs().format("dddd, DD/MM")}/>
       </MyHabits>
        <NoHabit>Nenhum habito concluido ainda</NoHabit>
        {today.map ((n) => <HabitCard done={n.done} token={token} habit={n.name} id={n.id} record={n.highestSequence} currentSequence={n.currentSequence} />)}
    </Container>
    <Footer></Footer>
    </PageStyle>
    )}  
    else{
        return (<LoginFailed>
        
        </LoginFailed>)
    }
}

const MyHabits = styled.span`
    display: flex;
    justify-content:space-between;
    background-color: #e5e5e5;
    width: 93%;
    margin-left: auto;
    margin-right: auto;
    align-items: center;
`

const Container = styled.div`
    
    position: relative;
    top: 100px;
    padding-bottom: 100px;
    
`

const PageStyle = styled.div`
    background-color: #e5e5e5;
    
`

const NoHabit = styled.div`
    color:#bababa;
    width: 93%;
    margin-left: auto;
    margin-right: auto;
`
