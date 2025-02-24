import React from 'react'
import HeroSection from './HeroSection'
import Contact from './Contact'
import Footer from './FooterSection'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <Contact />
        <AboutSection />
        <Footer />
    </div>
  )
}

export default Home