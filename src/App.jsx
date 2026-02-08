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
import CertificatePage from "./Pages/CertificatePage"
import EnquiryForm from "./Components/EnquiryForm"
import { useEffect, useState } from "react"
function App() {
const [showEnquiry, setShowEnquiry] = useState(false);
 useEffect(() => {
    const timer = setTimeout(() => {
      setShowEnquiry(true);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);
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
      <Route path='/certificates' element={<CertificatePage/>} />
    </Routes>
    <Footer />
    <EnquiryForm isOpen={showEnquiry} onClose={() => setShowEnquiry(false)} />
    <FloatingButtons/>
    </>
  )
}

export default App
