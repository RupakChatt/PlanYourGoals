import React from 'react'
import Hero from '../Hero'
import HowItWorks from '../HowItWorks'
import TryFree from '../TryFree'
import Header from '../Header'
import Footer from '../Footer'

const Home = () => {
  return (
    <div>
      <Header/>
        <Hero/>
        <HowItWorks/>
        <TryFree/>
        <Footer/>
    </div>
  )
}

export default Home