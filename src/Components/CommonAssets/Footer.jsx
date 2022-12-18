import styled from "styled-components"
import { buildStyles, CircularProgressbar } from "react-circular-progressbar"

export default function(prop){
    let percentage = 25
    return(
        <Container>
            <Habits>
                Habitos
            </Habits>
            
            <CircularProgressbar 
            background={true}
            value={percentage} 
            text={<tspan dy={4.5} dx={-17}>Hoje</tspan>}
            />

            <History>
                Historico
            </History>
            
        </Container>
        
    )
}

const Container = styled.div`
    background-color: white;
    height: 70px;
    width: 100%;
    position: fixed;
    bottom: 0;
    color:#52b6ff;
    display: flex;
    justify-content: space-between;
    

    .CircularProgressbar-trail{
        stroke: #52b6ff;
        width: 79px;
        height: 79px;
    }
    .CircularProgressbar-path{
        stroke: white;
        width: 79px;
    }
    .CircularProgressbar{
        width: 91px;
        height: 91px;
        position: relative;
        bottom:30px;    
    }

    .CircularProgressbar-text{
        fill: #ffffff;
       
    }
    .CircularProgressbar-background{
        fill: #52b6ff;
       
    }
    
`

const History = styled.div`
    position: relative;
    right: 5%;
    top:22px;
`

const Habits = styled.div`
   position: relative;
    left: 5%;
    top:22px; 
`