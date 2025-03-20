import styled from "styled-components";
import NavItem from "./NavItem";

const ListStyled = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    width: 212px;
`

const SideBar = () => {
    return (
        <aside>
            <nav>
                <ListStyled>
                    <NavItem 
                        active={true}
                        activeIcon="/icones/home-ativo.png" 
                        inativeIcon="/icones/home-inativo.png">
                            Início
                    </NavItem>
                    <NavItem 
                        active={false}public
                        activeIcon="/icones/mais-vistas-ativo.png" 
                        inativeIcon="/icones/mais-vistas-inativo.png">
                            Mais vistas
                    </NavItem>
                    <NavItem 
                        active={false}public
                        activeIcon="/icones/mais-curtidas-ativo.png" 
                        inativeIcon="/icones/mais-curtidas-inativo.png">
                            Mais curtidas
                    </NavItem>
                    <NavItem 
                        active={false}public
                        activeIcon="/icones/novas-ativo.png" 
                        inativeIcon="/icones/novas-inativo.png">
                            Novas
                    </NavItem>
                    <NavItem 
                        active={false}public
                        activeIcon="/icones/surpreenda-me-ativo.png" 
                        inativeIcon="/icones/surpreenda-me-inativo.png">
                            Surpreenda-me
                    </NavItem>
                </ListStyled>
            </nav>
        </aside>
    )
}

export default SideBar;