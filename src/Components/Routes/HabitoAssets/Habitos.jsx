import styled from "styled-components"
import Header from "../../CommonAssets/Header"
import Footer from "../../CommonAssets/Footer"
import StyledButtonBlue from "../../CommonAssets/StyledButtonBlue"
import BlueText from "../../CommonAssets/BlueText"
import GlobalStyle from "../../../Styles/GlobalStyle"
import Habit from "./HabitAdd"
import HabitAdded from "./HabitAdded"
import AuthContext from "../../Contexts/AuthContext"
import { useContext } from "react"
import LoginFailed from "../../CommonAssets/LoginFailed"


export default function(prop){
    const {token} = useContext(AuthContext)

    if(token){
        return(
    <PageStyle>
        <GlobalStyle color="#e5e5e5"/>
    <Header/>
    <Container>
        <MyHabits>
            <BlueText text="Meus habitos"/>
            <PlusBtn><StyledButtonBlue width='40px' text='+' height='35px'/></PlusBtn>
       </MyHabits>
        <Habit/>
        <HabitAdded habit="Placeholder text" />
    <NoHabit>Voce ainda nao tem nenhum habito cadastrado ainda. Adicione um habito para comecar a acompanhar!</NoHabit>
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

