import styled from "styled-components"
import { Link } from "react-router-dom"
import Cadastro from "./Cadastro"
import StyledButtonBlue from "../Routes/StyledButtonBlue"
export default function Login(){
    return(
        <Container>
            
            <img src="https://raw.githubusercontent.com/gist/xie/d3ede2c454b8bf89d4ae543eba4b1563/raw/b225b0706cb9d1ba48206f6dc7352de45c127380/fortnite.gif"/>
            
            <form>

                <InputStyle><input type="email" name="" placeholder="Email" id="" /></InputStyle>
                <InputStyle><input type="password" name="" id="" placeholder="Senha" /></InputStyle>
                <StyledButtonBlue text="Entrar"></StyledButtonBlue>
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
    img{
        width: 180px;
        background-color: burlywood;
        margin-bottom: 33px;
    }
 
`

const InputStyle = styled.div`

    input{
        width:303px ;
        height: 45px;
        border-color:#d4d4d4;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        margin-bottom: 5px;
        box-sizing: border-box;
    }
`

const SignupHook = styled.div`
    margin-top: 25px;
    color:#52b6ff;
    font-size: 14px;
    text-decoration: underline;
`