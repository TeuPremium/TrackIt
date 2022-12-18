import styled from "styled-components"
export default function(prop){
    return(
        <StyledButtonBlue width={prop.width} height={prop.height}>
            {prop.text}
        </StyledButtonBlue>
    )
}
const StyledButtonBlue = styled.button`
    color: white;
    background-color: #52b6ff;
    width: ${props => props.width};
    height: ${props => props.height};
    border-radius: 5px;
    border-style: solid;
    border-width: 0px;
    cursor: pointer;
`