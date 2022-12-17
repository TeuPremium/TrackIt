import styled from "styled-components"
export default function(prop){
    return(
        <StyledButtonBlue>
            {prop.text}
        </StyledButtonBlue>
    )
}
const StyledButtonBlue = styled.button`
    color: white;
    background-color: #52b6ff;
    width: 303px;
    height: 45px;
    border-radius: 5px;
    border-style: solid;
    border-width: 0px;
`