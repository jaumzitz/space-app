import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"
import bannerBackground from "/imagens/banner.png"
import photos from './fotos.json'
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"

const FundoGradiente = styled.div`
 background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
 width: 100%;
 min-height: 100vh;
 
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  flex-direction: row;
  gap: 24px;
`

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {

  const [galleryPhotos, setGalleryPhotos] = useState(photos)
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <FundoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Header />
        <MainContainer>
          <SideBar />
          <GalleryContent>
            <Banner imageURL={bannerBackground} text="A galeria mais completa de fotos do espaço!"></Banner>
            <Gallery
              photos={galleryPhotos}
              onPhotoSelected={photo => setSelectedPhoto(photo)}
              ></Gallery>
          </GalleryContent>
        </MainContainer>
        <ModalZoom
          photo={selectedPhoto}></ModalZoom>
      </AppContainer>
    </FundoGradiente>
  )
}

export default App
