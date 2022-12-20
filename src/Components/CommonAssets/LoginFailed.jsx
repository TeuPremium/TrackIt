
import { Link, } from "react-router-dom"
import styled from "styled-components"
import StyledButtonBlue from "./StyledButtonBlue"

export default function(){
    
  
    
    return(
        <GOHOME >
        <h1>voce precisa estar logado para usar esta funcao</h1>
        <Link to='/'>
        <StyledButtonBlue width='303px' height="45px" text="fazer login"></StyledButtonBlue>
        </Link>
        </GOHOME>
    )
}

const GOHOME = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: auto;
`