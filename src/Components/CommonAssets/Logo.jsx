import styled from "styled-components"

export default function Logo(){
    return(
        <Style>
        <img src="https://raw.githubusercontent.com/gist/xie/d3ede2c454b8bf89d4ae543eba4b1563/raw/b225b0706cb9d1ba48206f6dc7352de45c127380/fortnite.gif" alt="" srcset="" />
        </Style>
    )
}

const Style = styled.div`
    margin-left: auto;
    margin-right: auto;
    img{width: 180px;
    
    margin-bottom: 33px;}
`
