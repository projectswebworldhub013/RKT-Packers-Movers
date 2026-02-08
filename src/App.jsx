import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import FloatingButtons from './Components/FloatingButtons'
import ScrollToTop from './Components/ScrollToTop'
import Footer from "./Components/Footer"
import AboutPage from "./Pages/AboutPage"
import ServiceDetail from "./Pages/ServiceDetail"
import GalleryPage from "./Pages/GalleryPage"
import Contact from "./Pages/Contact"
function App() {

  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path="/services/:serviceSlug" element={<ServiceDetail />} /> 
      <Route path='/gallery' element={<GalleryPage/>} />
      <Route path='/contact' element={<Contact/>} />
    </Routes>
    <Footer />
    <FloatingButtons/>
    </>
  )
}

export default App
