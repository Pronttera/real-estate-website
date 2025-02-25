import React from 'react'
import HeroSection from './HeroSection'
import Contact from './Contact'
import Footer from './FooterSection'
import AboutSection from './AboutSection'
import ServiceSection from './ServiceSection'
import ContactUsSection from './ContactUsSection'
import WorkSection from './WorksSection'

const Home = () => {
  return (
    <div>
        <HeroSection />
        <WorkSection />
        <AboutSection />
        <ServiceSection />
        <Contact />
        <ContactUsSection />
        <Footer />
    </div>
  )
}

      export default Home