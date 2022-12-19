
import styled from "styled-components"
import Header from "../../CommonAssets/Header"
import Footer from "../../CommonAssets/Footer"
import BlueText from "../../CommonAssets/BlueText"
import GlobalStyle from "../../../Styles/GlobalStyle"




export default function(prop){
    
    return(
    <PageStyle>
        <GlobalStyle color="#e5e5e5"/>
    <Header/>
    <Container>
        <MyHistory>
            <BlueText text="Historico"/>
       </MyHistory>
        <NoHabit>Em breve voce podera ver seu historico aqui!</NoHabit>
    </Container>
    <Footer></Footer>
    </PageStyle>
    )
}

const MyHistory = styled.span`
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
    
    
`

const NoHabit = styled.div`
    color:#666666;
    width: 93%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 15px;
`