import styled from "styled-components"
import { Link } from "react-router-dom"
import Cadastro from "./Cadastro"
import StyledButtonBlue from "../CommonAssets/StyledButtonBlue"
import StyledTextInput from "../CommonAssets/StyledTextInput"
import Logo from "../CommonAssets/Logo"
export default function Login(){
    return(
        <Container>
            <Logo></Logo>
            
            
            <form>

                <StyledTextInput type="email" placeholder="Email"></StyledTextInput>
                <StyledTextInput type="password" placeholder="Senha" ></StyledTextInput>
                <StyledButtonBlue height='45px' width="303px" text="Entrar"></StyledButtonBlue>
            </form>
                <Link to='/cadastro' element={<Cadastro/>}>
                <SignupHook>Nao tem conta? Cadastre-se!</SignupHook>
                </Link>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
flex-direction: column;
align-items: center;
align-content: center;
margin-top: 70px;
    
 
`



const SignupHook = styled.div`
    margin-top: 25px;
    color:#52b6ff;
    font-size: 14px;
    text-decoration: underline;
`