import styled from "styled-components"
import IconButton from "../IconButton"

const social = [
    {
        id: "instagram",
        path: "/imagens/sociais/instagram.svg",
        url: "https://instagram.com"
    },
    {
        id: "facebook",
        path: "/imagens/sociais/facebook.svg",
        url: "https://facebook.com"
    },
    {
        id: "twitter",
        path: "/imagens/sociais/twitter.svg",
        url: "https://twitter.com"
    }
]

const FooterStyled = styled.footer`
    background-color: #04244F;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    color: #D9D9D9;
    margin-top: 40px;
    align-items: center;
`

const SocialIcons = styled.div`
    display: flex;
    flex-direction: row;
`

const Footer = () => {
    return (

        <FooterStyled>
            <SocialIcons>
                {
                    social.map(icon => {
                        return (<IconButton key={icon.id}>
                            <a href={icon.url} target="_blank">

                                <img src={icon.path} alt={icon.id}></img>
                            </a>

                        </IconButton>)
                    })
                }
            </SocialIcons>
            <span>Desenvolvido por João Fiorini e Alura</span>
        </FooterStyled>

    )
}

export default Footer