import Title from "../../Title"
import popularPhotos from "../../../popular.json"
import styled from "styled-components"
import Button from "../../PrimaryButton"

const PopularSection = styled.section`

    display: flex;
    flex-direction: column;
    gap: 20px;
`

const SmallImage = styled.img`
    width: auto;
    max-width: 500px;
    border-radius: 16px;

    &:hover {
        cursor: pointer;
        
    }
`

const Popular = () => {
    return (
        <>
            <PopularSection>
                <Title $alignment='left'>Popular</Title>

                {
                    popularPhotos.map(photo => <SmallImage src={photo.path} />)
                }
                
                <Button>Ver mais</Button>
                
            </PopularSection>

        </>
    )
}

export default Popular