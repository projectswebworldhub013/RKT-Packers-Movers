import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Navbar from "./Components/Navbar"
import FloatingButtons from './Components/FloatingButtons'
import ScrollToTop from './Components/ScrollToTop'
import Footer from "./Components/Footer"
function App() {

  return (
    <>
    <ScrollToTop/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    <Footer />
    <FloatingButtons/>
    </>
  )
}

export default App
