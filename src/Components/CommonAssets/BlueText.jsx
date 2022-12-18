import styled from "styled-components"

export default function(prop){
    return(
        <Style>
            {prop.text}
        </Style>
    )
}

const Style = styled.div`
    
    color: #126ba5;
    
`