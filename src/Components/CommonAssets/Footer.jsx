import styled from "styled-components"

export default function(prop){
    return(
        <Container>
            <Habbits>
                Habitos
            </Habbits>
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
`

const History = styled.div`
    
`

const Habbits = styled.div`
    
`