import { useContext } from "react"
import styled from "styled-components"

import UserContext from "../Contexts/UserContext"

export default function(prop){
    const {user} = useContext(UserContext)
    const pfp = user.image
    return(
        <HeaderStyle>
            <Container>
            <div>TrackIt</div>
            <div><img src={pfp}/></div>
            </Container>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    background-color: #126ba5;
    width: 100%;
    height: 70px;
    position: fixed;
    padding-left: 3.5%;
    padding-right: 3.5%;
    box-sizing: border-box;
    div{
        font-weight:400 ;
        font-size: 39px;
        color:white;
        font-family: playball;
        
    }
   
   
`
const Container = styled.div`
   position :absolute ;
   display: flex;
   width: 93%;
   justify-content: space-between;
   align-items: center;
   align-content: center;
   height: 100%;
   
   margin-left: auto;
   margin-right: auto;
   img{
        width: 51px;
        height: 51px;
        border-radius: 51px;
        position: relative;
        top: 5px;
    }
`