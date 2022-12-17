import StyledButtonBlue from "../CommonAssets/StyledButtonBlue";
import StyledTextInput from "../CommonAssets/StyledTextInput";
import Logo from "../CommonAssets/Logo";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Cadastro(prop){
    return(
        <Container>
        <Logo/>

        <StyledTextInput type="email" placeholder="Email"></StyledTextInput>

        <StyledTextInput type="password" placeholder="Senha"></StyledTextInput>

        <StyledTextInput type="text" placeholder="Nome"></StyledTextInput>

        <StyledTextInput type="image" placeholder="Foto"></StyledTextInput>

        <StyledButtonBlue text="Cadastrar"></StyledButtonBlue>

        <Link to='/'>
        <LoginHook>Ja tem uma conta? Faca login</LoginHook>
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
const LoginHook = styled.div`
    margin-top: 25px;
    color:#52b6ff;
    font-size: 14px;
    text-decoration: underline;
`