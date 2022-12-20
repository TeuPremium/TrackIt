import styled from "styled-components"
import Header from "../../CommonAssets/Header"
import Footer from "../../CommonAssets/Footer"
import StyledButtonBlue from "../../CommonAssets/StyledButtonBlue"
import BlueText from "../../CommonAssets/BlueText"
import GlobalStyle from "../../../Styles/GlobalStyle"
import Habit from "./HabitAdd"
import HabitAdded from "./HabitAdded"
import AuthContext from "../../Contexts/AuthContext"
import { useContext, useState } from "react"
import LoginFailed from "../../CommonAssets/LoginFailed"
import CardsContext from "../../Contexts/AuthContext copy"
import { useEffect } from "react"
import axios from "axios"


export default function(prop){
    const {token} = useContext(AuthContext)
    const [add, setAdd] = useState(false)
    const {cards, setCards} = useContext(CardsContext)
    useEffect(() => {
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
        const config = {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
    const promise = axios.get(URL, config)
    promise.then((res) => {setCards(res.data)})
    promise.catch(console.log)
    console.log(cards)
    }, [])
    

    if(token){
        return(
    <PageStyle>
        <GlobalStyle color="#e5e5e5"/>
    <Header/>
    <Container>
        <MyHabits>
            <BlueText text="Meus habitos"/>
            <PlusBtn onClick={() => setAdd(true)}><StyledButtonBlue width='40px' text='+' height='35px'/></PlusBtn>
       </MyHabits>
        {add ? <Habit setAdd={(add) => setAdd(add)}/> : ''}
        {cards ? cards.map((n)=><HabitAdded habit={n.name} />) : ''}
    {!cards ? <NoHabit>Voce ainda nao tem nenhum habito cadastrado ainda. Adicione um habito para comecar a acompanhar!</NoHabit> : ''}
    </Container>
    <Footer></Footer>
    </PageStyle>
    )}
    else{
        return(
            <LoginFailed/>
        )
    }
}

const MyHabits = styled.span`
    display: flex;
    justify-content:space-between;
    background-color: #e5e5e5;
    margin-bottom: 22px;
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
const PlusBtn = styled.div`
    
`

const NoHabit = styled.div`
    color:#666666;
    width: 93%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 28px;
`