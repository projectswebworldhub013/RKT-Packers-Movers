import React from 'react'
import HeroSection from '../Components/HeroSection'
import PremiumAboutRKT from '../Components/PremiumAboutRKT'
import WhyChooseRKT from '../Components/WhyChooseRKT'
import RKTGallery from '../Components/RKTGallery'
import Testimonials from '../Components/Testimonials'
import StatsSection2 from '../Components/StatsSection2'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PremiumAboutRKT />
      <WhyChooseRKT />
      <RKTGallery />
      <Testimonials />
      <StatsSection2 />
    </div>
  )
}

export default Home
