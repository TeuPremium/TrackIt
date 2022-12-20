import styled from "styled-components"
import { buildStyles, CircularProgressbar, } from "react-circular-progressbar"
import { Link } from "react-router-dom"
import "react-circular-progressbar/dist/styles.css";

export default function(prop){
    let percentage = 25
    return(
        <Container>
            <Habits>
            <Link style={{ textDecoration:'none' , color:'#52b6ff'}} to="/habitos">
                Habitos
            </Link>
            </Habits>

            <Link style={{ textDecoration:'none' , color:'#52b6ff'}} to="/hoje">
            <CircularProgressbar 
            className="joj"
            background={true}
            backgroundPadding={6}
            styles={buildStyles({
                backgroundColor: '#52b6ff',
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent",
            })}
            value={percentage} 
            text='Hoje'
            />
          
          
            </Link>

            <History>
            <Link style={{ textDecoration:'none' , color:'#52b6ff'}} to="/historico">
                Historico
            </Link>
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
    

    .joj{
        width: 91px;
        position: absolute;
        top: -31px;
        left: calc(50% - (91px / 2));
        cursor: pointer;
        font-size: 18px;
        font-weight: 400;
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