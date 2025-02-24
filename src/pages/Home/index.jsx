import React from 'react'
import HeroSection from './HeroSection'
import ContactUsSection from './ContactUsSection.jsx';
import FooterSection from './FooterSection.jsx';

const Home = () => {
  return (

  <><div>App home page</div>
      <HeroSection />
      <div className="flex flex-col min-h-screen">
                <main className="flex-grow">
                  <ContactUsSection />
                </main>

                <FooterSection className="bg-black py-10">
                  {/* Footer content */}
                </FooterSection>
      </div>
    </>

      )
}

      export default Home