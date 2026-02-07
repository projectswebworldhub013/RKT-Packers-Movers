import React from 'react'
import AboutSection from '../Components/AboutSection'
import AboutHero from '../Components/AboutHero'
import CTASection from '../Components/CTASection'
import Testimonials from '../Components/Testimonials'

const AboutPage = () => {
  return (
    <div>
      <AboutHero /> 
      <AboutSection />
      <Testimonials/>
      <CTASection/>
    </div>
  )
}

export default AboutPage
