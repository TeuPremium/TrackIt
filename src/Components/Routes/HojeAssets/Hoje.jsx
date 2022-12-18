import styled from "styled-components"
import Header from "../../CommonAssets/Header"
import Footer from "../../CommonAssets/Footer"
import StyledButtonBlue from "../../CommonAssets/StyledButtonBlue"
import BlueText from "../../CommonAssets/BlueText"
import GlobalStyle from "../../../Styles/GlobalStyle"
import HabitCard from "./HabitCard"



export default function(prop){
    
    return(
    <PageStyle>
        <GlobalStyle color="#e5e5e5"/>
    <Header/>
    <Container>
        <MyHabits>
            <BlueText text="Segunda, 17/05"/>
       </MyHabits>
        <NoHabit>Nenhum habito concluido ainda</NoHabit>
        <HabitCard habit='Terminar os projetos' record={3} currentSequence={3} />
    </Container>
    <Footer></Footer>
    </PageStyle>
    )
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