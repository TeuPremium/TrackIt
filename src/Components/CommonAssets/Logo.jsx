import styled from "styled-components"

export default function Logo(){
    return(
        <Style>
        <img src='./logo512.png' alt="" srcset="" />
        </Style>
    )
}

const Style = styled.div`
    margin-left: auto;
    margin-right: auto;
    img{width: 180px;
    
    margin-bottom: 33px;}
`
