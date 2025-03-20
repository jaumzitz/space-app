import styled from "styled-components"


const PhotoCard = styled.figure`
    background-color: #001634;
    border-radius: 20px;
    
    margin: 0;
    padding: 0;
    

    img {
        border-radius: 20px 20px 0 0;
        height: 300px;
    }
    
`

const Caption = styled.figcaption`
    display: flex;
    align-items: flex-end;
    padding: 10px 20px;
    
    `
const CaptionText = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 0;
    color: #D9D9D9;
`






const Image = ({ photo }) => {
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
                    <button>favoritar</button>
                    <button>expandir</button>
                </footer>
            </Caption>
        </PhotoCard>
    )
}

export default Image