import styled from "styled-components"
import IconButton from "../../IconButton"


const PhotoCard = styled.figure`
    background-color: #001634;
    border-radius: 20px;
    box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
    margin: 0;
    padding: 0;

    
    //position: absolute;
    //right: 30px;
    //top: 30px;
    

    > img {
        border-radius: 20px 20px 0 0;
        height: 300px;
        
        
    }

    &.expanded > img{
       height: 500px;
    }




    ${props => props.expanded ? `
        &:hover {
            
        margin-top: -10px;
        transition: 200ms
        }
        ` : ''}
    
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




const Image = ({ photo, expanded, onZoomRequested, onToggleFavorite }) => {

    const favoriteIcon = photo.favorite ? '/icones/favorito-ativo.png' : '/icones/favorito.png'
    
    return (
        <PhotoCard className={expanded ? 'expanded' : ''}>

           

            <img src={photo.path} alt={photo.titulo}></img>
            <Caption>
                <CaptionText>
                    <h3>
                        {photo.titulo}
                    </h3>
                    <p>{photo.fonte}</p>

                </CaptionText>

                {!expanded &&
                    <footer>
                        <IconButton onClick={() => onToggleFavorite(photo)}>
                            <img src={favoriteIcon}></img>
                        </IconButton>

                        <IconButton aria-hidden={expanded} onClick={() => {
                            onZoomRequested(photo)
                        }}>
                            <img src="/icones/expandir.png"></img>

                        </IconButton>

                    </footer>
                }
            </Caption>
        </PhotoCard >
    )
}

export default Image