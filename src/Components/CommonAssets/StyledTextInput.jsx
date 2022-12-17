import styled from "styled-components"
export default function StyledTextInput(prop){
return(
    <InputStyle>
    <input type={prompt.type} name="" placeholder={prop.placeholder} id="" />
    </InputStyle>
)
}

const InputStyle = styled.div`

    input{
        width:303px ;
        height: 45px;
        border-color:#d4d4d4;
        border-style: solid;
        border-radius: 5px;
        border-width: 1px;
        margin-bottom: 5px;
        box-sizing: border-box;
    }
`