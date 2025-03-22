import styled from "styled-components"
import Title from "../Title"
import Tags from "./Tags"
import Popular from "./Popular"
import Image from './Image'

const GalleryContainer = styled.section`
    display: flex;
    
`

const ImagesContainer = styled.ul`
    display: flex;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
    gap: 20px;
`

const FluidSection = styled.section`
    flex-grow: 1;
    margin: 0;
    padding: 0;
`

const Gallery = ({ photos = [], onPhotoSelected }) => {
    return (
        <>
            <Tags></Tags>
            <GalleryContainer>

                <FluidSection>

                    <Title>Navegue pela galeria</Title>
                    <ImagesContainer>
                        {photos.map(photo => 
                            <Image 
                                key={photo.id} 
                                photo={photo}
                                onZoomRequested={onPhotoSelected}
                                ></Image>)}
                    </ImagesContainer>


                </FluidSection>
                <Popular></Popular>
            </GalleryContainer>
        </>

    )
}

export default Gallery