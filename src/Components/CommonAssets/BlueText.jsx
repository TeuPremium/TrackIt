import styled from "styled-components"

export default function(prop){
    return(
        <Style>
            {prop.text}
        </Style>
    )
}

const Style = styled.div`
    font-size: 23px;
    color: #126ba5;
    
`