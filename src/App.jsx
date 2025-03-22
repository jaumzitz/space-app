import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/Header"
import SideBar from "./components/SideBar"
import Banner from "./components/Banner"
import Gallery from "./components/Gallery"
import bannerBackground from "/imagens/banner.png"
import photos from './photos.json'
import { useState } from "react"
import ModalZoom from "./components/ModalZoom"
import Footer from "./components/Footer"

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

  const onToggleFavorite = (photo) => {
    
    
    setGalleryPhotos(galleryPhotos.map(galleryPhoto => {
      return {
        ...galleryPhoto,
        favorite: galleryPhoto.id === photo.id ? !galleryPhoto.favorite : galleryPhoto.favorite
      }
    }))
    
    
  }
  

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
              onToggleFavorite={photo => onToggleFavorite(photo)}
              ></Gallery>
          </GalleryContent>
        </MainContainer>
        <ModalZoom
          photo={selectedPhoto}
          onModalClose={() => setSelectedPhoto(null)}
          ></ModalZoom>
      </AppContainer>
      <Footer></Footer>
    </FundoGradiente>
  )
}

export default App
