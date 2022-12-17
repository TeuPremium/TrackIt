import styled from "styled-components"

export default function(prop){
    return(
        <HeaderStyle>
            <Container>
            <div>TrackIt</div>
            <div><img src="https://i.pinimg.com/564x/4d/5f/82/4d5f82ad23026c2a8cd2be39980ad96c.jpg"/></div>
            </Container>
        </HeaderStyle>
    )
}

const HeaderStyle = styled.div`
    background-color: #126ba5;
    width: 100%;
    height: 70px;
    position: fixed;
    
    div{
        font-weight:400 ;
        font-size: 39px;
        color:white;
        font-family: playball;
        position: relative;
        top:10px;
        left: 18px;
    }
   
   
`
const Container = styled.div`
   position :absolute ;
   display: flex;
   width: 100%;
   justify-content: space-between;
   img{
        width: 51px;
        height: 51px;
        border-radius: 51px;
        position: relative;
        top: -8px;
        right: 45px;
        
    }
`