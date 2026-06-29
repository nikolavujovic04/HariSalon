import { useState } from 'react'
import { Navbar } from './layout/Navbar'
import HeroSection from './sections/hero/HeroSection'
import CuratedServices from './sections/services/CuratedServices'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <CuratedServices></CuratedServices>
    </>
  )
}

export default App
