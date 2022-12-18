import styled from "styled-components"
import Header from "../../CommonAssets/Header"
import Footer from "../../CommonAssets/Footer"
import StyledButtonBlue from "../../CommonAssets/StyledButtonBlue"
import BlueText from "../../CommonAssets/BlueText"
import GlobalStyle from "../../../Styles/GlobalStyle"
import Habbit from "./Habbit"

export default function(prop){
    return(
    <PageStyle>
        <GlobalStyle color="#e5e5e5"/>
    <Header/>
    <Container>
        <MyHabbits>
            <BlueText text="Meus habitos"/>
            <PlusBtn><StyledButtonBlue width='40px' text='+' height='35px'/></PlusBtn>
       </MyHabbits>
        <Habbit/>
    <NoHabit>Voce ainda nao tem nenhum habito cadastrado ainda. Adicione um habito para comecar a acompanhar!</NoHabit>
    </Container>
    <Footer></Footer>
    </PageStyle>
    )
}

const MyHabbits = styled.span`
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

