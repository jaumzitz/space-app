import styled from "styled-components"

const FigureStyled = styled.figure`
     background-image: ${props => `url(${props.$backgroundImage})`};
     flex-grow: 1;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    min-height: 328px;
    margin: 0;
    border-radius: 20px;
    max-width: 100%;
    background-size: cover;
`

const Banner = ({ text, imageURL }) => {
    return (
        <>
            <FigureStyled $backgroundImage={imageURL}>
                <h1>{text}</h1>
            </FigureStyled>
        </>
    )
}

export default Banner