import styled from "styled-components"
import TextField from "../TextField"

const HeaderStyled = styled.header`
    padding: 60px 0;
    display: flex;
    justify-content: space-between;

    img {
        max-width: 212px;
    }
`

const Header = ({onSearchChange}) => {
    return (

        <HeaderStyled>
            <img src="/imagens/logo.png" alt="Logo do SpaceApp"/>
            <TextField onSearchChange={onSearchChange}></TextField>
            
        </HeaderStyled>

    )
}

export default Header