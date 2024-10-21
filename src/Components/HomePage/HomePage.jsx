import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroSection from '../HeroSection/HeroSection'
import Features from '../Features/Features'
import Wave from '../Wave/Wave'
import Wave1 from '../Wave/Wave1'
import IndustryApplication from '../IndustryApplications/IndustryApplication'
import Footer from '../Footer/Footer'


function HomePage() {
   return (
      <>
      <HeroSection/>
      <Wave  />
      <Features/> 
      <Wave1/> 
      <IndustryApplication/>
      <Footer/>
      </>
   )
}

export default HomePage;