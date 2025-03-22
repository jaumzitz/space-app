import styled from "styled-components"
import IconButton from "../../IconButton"


const PhotoCard = styled.figure`
    background-color: #001634;
    border-radius: 20px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    margin: 0;
    padding: 0;

    > img {
        border-radius: 20px 20px 0 0;
        height: 300px;
        max-height: 300px;
        
    }

    &:hover {

        margin-top: -10px;
        transition: 200ms
    }
    
`

const Caption = styled.figcaption`
    display: flex;
    align-items: flex-end;
    padding: 10px 20px;
    justify-content: space-between;
    
    
    `
const CaptionText = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 0;
    color: #D9D9D9;
`






const Image = ({ photo, expanded = true, onZoomRequested }) => {
    return (
        <PhotoCard>
            <img src={photo.path} alt={photo.titulo}></img>
            <Caption>
                <CaptionText>
                    <h3>
                        {photo.titulo}
                    </h3>
                    <p>{photo.fonte}</p>

                </CaptionText>
                <footer>
                    <IconButton>
                        <img src="/icones/favorito.png"></img>
                    </IconButton>

                    <IconButton aria-hidden={expanded} onClick={() => {
                        
                        onZoomRequested(photo)}}>
                    <img src="/icones/expandir.png"></img>

                </IconButton>
            </footer>
        </Caption>
        </PhotoCard >
    )
}

export default Image